const URL = 'https://venbest-test.herokuapp.com/';

const request = url => (
  fetch(url)
    .then((result) => {
      if (!result.ok) {
        throw new Error(`${result.status} - ${result.statusText}`);
      }

      return result.json();
    })
);

export const getUsers = () => request(URL);
