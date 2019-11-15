
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as Context from 'common/context/contextHooks';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });
global.fetch = require('jest-fetch-mock');

const STATE = {
  characters: [
    { name: 'Vero' },
    { name: 'Miguel' },
  ],
};

const HOC = () => (
  <Context.StateContext.Provider value={[STATE]}>
    <App />
  </Context.StateContext.Provider>
);

const flushPromises = async () => new Promise(resolve => setImmediate(resolve));
const dispatch = jest.fn();

describe('<App>', () => {
  // beforeEach(() => {
  //   fetch.resetMocks();
  // });

  it('render', () => {
    const tree = renderer.create(<HOC />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('dispath is called with', async () => {
    const stateUpdated = {
      type: 'update',
      payload: { ...STATE },
    };
    fetch.mockResponseOnce(JSON.stringify(STATE.characters));

    jest
      .spyOn(Context, 'useStateValue')
      .mockImplementation(() => [STATE, dispatch]);
    mount(<HOC />);

    await flushPromises();
    expect(dispatch).toHaveBeenCalledWith(stateUpdated);
  });
});
