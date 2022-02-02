import axios from 'axios';

export function queryServer(path, params = undefined) {
  return new Promise((resolve, reject) => {
    const baseURL = 'http://127.0.0.1:8000';
    const apiCall = `${baseURL}/${path}`;
    const config = {
      method: 'get',
      url: apiCall,
      responseType: 'json',
      responseEncoding: 'utf8',
    };
    if (params !== undefined) config.params = params;
    axios(config)
      .then(response => resolve(response.data))
      .catch(reject);
  });
}
