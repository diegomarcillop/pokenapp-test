import {API_URL} from '../config/Environments';

class Api {
  async get(url, params, newUrl) {
    url = new URL(`${newUrl || API_URL}${url}`);

    if (params) {
      Object.keys(params).forEach(key =>
        url.searchParams.append(key, params[key]),
      );
    }

    return fetch(url, {
      method: 'GET',
      headers: new Headers({
        //Authorization: `Bearer ${token}`,
      }),
    })
      .then(async response => {
        if (response.status === 401) {
          return response;
        }
        response.payload = await response.json();
        return response;
      })
      .catch(err => err);
  }

  async post(url, data, isFormData) {
    let dataBody;

    if (isFormData) {
      dataBody = new FormData();
      Object.keys(data).map(key => {
        if (!Array.isArray(data[key])) {
          const isFile = data[key] && (data[key].size || data[key].uri);
          const isJson = typeof data[key] === 'object';

          dataBody.append(
            key,
            isFile || !isJson ? data[key] : JSON.stringify(data[key]),
          );
        } else {
          data[key].forEach(item => {
            const isFile = item && item.size;
            const isJson = typeof item === 'object';
            dataBody.append(
              key,
              isFile || !isJson ? item : JSON.stringify(item),
            );
          });
        }
      });
    } else {
      dataBody = JSON.stringify(data);
    }

    url = new URL(`${API_URL}${url}`);
    return fetch(url, {
      method: 'POST',
      /*headers: isFormData
        ? new Headers({Authorization: `Bearer ${token}`})
        : new Headers({
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          }),*/
      body: dataBody,
    })
      .then(async response => {
        if (response.status === 401) {
          return response;
        }
        response.payload = await response.json();
        return response;
      })
      .catch(err => err);
  }
}

export default new Api();
