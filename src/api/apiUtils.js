const BASE_URL = `https://api.chucknorris.io/jokes`;
const USER_BASE_URL = `https://random-data-api.com/api/v2/users`;

// var myHeaders = new Headers();
// myHeaders.append("apikey", "");

function prepareOptions(methodType, headers) {
  return {
    method: methodType,
    headers: headers,
    // cache: "default"
  };
}

async function getUsers(options) {
  try {
    let result = await fetch('https://random-data-api.com/api/v2/users'+options);
    const movies = await result.json();
    return movies;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getUsers,
};
