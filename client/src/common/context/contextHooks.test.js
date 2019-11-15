import { globalReducer } from './contextHooks';

const initialState = { items: 1, total: 10 };
let action = { type: 'update', payload: { items: 2, total: 20 } };

describe('<contextHooks>', () => {
  it('globalReducers when action is update', () => {
    const value = globalReducer(initialState, action);
    expect(value).toStrictEqual({ items: 2, total: 20 });
  });

  it('globalReducers when action is submit', () => {
    action = { type: 'submit', payload: { items: 1, total: 30 } };
    const value = globalReducer(initialState, action);
    expect(value).toStrictEqual({ items: 1, total: 10 });
  });
});
