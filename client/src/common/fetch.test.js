import fetchMethod from './fetch';

global.fetch = require('jest-fetch-mock');

const hash = '1232';
const service = `characters/${hash}`;
const endpoint = `http://localhost:3000/${service}`;

describe('fetch()', () => {

  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify({ data: 'success' }));
  });

  it('default', () => {
    fetchMethod({ service })
      .then(response => expect(response.data).toEqual('success'));

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(endpoint);
  });
});
