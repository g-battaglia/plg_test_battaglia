const API = {
  getData: async (url: string) => {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  },
};

export default API;
