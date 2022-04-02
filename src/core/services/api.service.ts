import { DefaultResponse } from 'core/interfaces/response.interfaces';
// Usage example
/* 
  api
    .get<any>(`${env.get('API_STORAGE_PREFIX')}/denm/get?page=0&size=6`)
    .then((response) => response.json().then(console.log))
*/

import { getStorageToken } from 'core/hooks/use-token';

interface Headers {
  'content-type': string;
}

interface ApiServiceInterface {
  get<T>(route: string, headers?: Headers): Promise<T>;
  getNoAuth(route: string): Promise<any>;

  post<T>(route: string, data: any, headers?: Headers): Promise<T>;
}

export interface ApiReject {
  error: string;
}

class ApiService implements ApiServiceInterface {
  get<T>(route: string, headers?: Headers): Promise<T> {
    return fetch(route, {
      method: 'GET',
      headers: headers
        ? {
            Authorization: getStorageToken(),
            ...headers,
          }
        : {
            Authorization: getStorageToken(),
            'Content-Type': 'application/json',
          },
    }).then(async (response) => {
      if (!response.ok) {
        try {
          const body: DefaultResponse<T> = await response.json();

          if (body.message) {
            return Promise.reject({ error: body.message });
          }
        } catch (e) {
          return Promise.reject({ error: 'Ошибка парсинга' });
        }
      }

      try {
        const body: DefaultResponse<T> = await response.json();
        return Promise.resolve(body.data as T);
      } catch (e) {
        return Promise.reject({ error: 'Ошибка парсинга' });
      }
    });
  }

  getNoAuth(route: string) {
    return fetch(route);
  }

  delete<T>(route: string, headers?: Headers): Promise<T> {
    return fetch(route, {
      method: 'DELETE',
      headers: headers
        ? {
            Authorization: getStorageToken(),
            ...headers,
          }
        : {
            Authorization: getStorageToken(),
            'Content-Type': 'application/json',
          },
    }).then(async (response) => {
      if (!response.ok) {
        try {
          const body: DefaultResponse<T> = await response.json();

          if (body.message) {
            return Promise.reject({ error: body.message });
          }
        } catch (e) {
          return Promise.reject({ error: 'Ошибка парсинга' });
        }
      }

      try {
        const body: DefaultResponse<T> = await response.json();
        return Promise.resolve(body.data as T);
      } catch (e) {
        return Promise.reject({ error: 'Ошибка парсинга' });
      }
    });
  }

  post<T>(route: string, data: any, requestHeaders?: Headers): Promise<T> {
    const raw = JSON.stringify(data);
    const token = getStorageToken();
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    if (token) {
      headers.append('Authorization', token);
    }

    const requestOptions = {
      body: raw,
      method: 'POST',
      headers: headers,
      redirect: 'follow',
    };

    return fetch(route, requestOptions as any).then(async (response) => {
      if (!response.ok) {
        try {
          const body: DefaultResponse<T> = await response.json();

          if (body.message) {
            return Promise.reject({ error: body.message });
          }
        } catch (e) {
          return Promise.reject({ error: 'Ошибка парсинга' });
        }
      }

      try {
        const body: DefaultResponse<T> = await response.json();
        return Promise.resolve(body.data as T);
      } catch (e) {
        return Promise.reject({ error: 'Ошибка парсинга' });
      }
    });
  }
}

const api = new ApiService();

export default api;
