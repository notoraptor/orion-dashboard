import axios from 'axios';
// Use adapter to prevent "cross origin forbidden" error in tests
// Ref (2022/02/01): https://github.com/axios/axios/issues/1418
import adapter from 'axios/lib/adapters/http';

export function queryServer(path, params = undefined) {
  return new Promise((resolve, reject) => {
    const baseURL = 'http://127.0.0.1:8000';
    const apiCall = `${baseURL}/${path}`;
    const config = {
      method: 'get',
      url: apiCall,
      responseType: 'json',
      responseEncoding: 'utf8',
      adapter: adapter,
    };
    if (params !== undefined) config.params = params;
    axios(config)
      .then(response => resolve(response.data))
      .catch(reject);
  });
}
