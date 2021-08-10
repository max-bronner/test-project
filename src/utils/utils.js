const fetchJson = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        return {};
      }
      return response.json();
    })
    .catch((error) => console.log(error));
}

export {
  fetchJson
};