const fetch = require('node-fetch');

const ApiService = {
  async get(url, config) {
    const response = await fetch(url, { method: 'GET', ...config });
    return response.json();
  },
  async post(url, data, config) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...config,
    });

    return response.json();
  },
  async put(url, data, config) {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...config,
    });

    return response.json();
  },
  async patch(url, data, config) {
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...config,
    });

    return response.json();
  },
  async delete(url, config) {
    const response = await fetch(url, { method: 'DELETE', ...config });
    return response.json();
  },
};

module.exports = ApiService;
