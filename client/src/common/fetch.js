const ENDPOINT = 'http://localhost:3000';

export default async ({ service, method, data }) => {
  const options = {
    method: method || 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
    },
  };
  if (data) {
    options.body = JSON.stringify(data);
    options.headers['Content-Type'] = 'application/json';
  }

  return fetch(`${ENDPOINT}/${service}`, options)
    .then(response => (response.status === 200 ? response.json() : {
      errorStatus: response.status,
    }))
    .catch(error => (error));
};