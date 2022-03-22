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

class ApiService implements ApiServiceInterface {
  get<T>(route: string, headers?: Headers): Promise<T> {
    return fetch(route, {
      method: 'GET',
      headers: headers
        ? {
            Authorization: `Bearer ${getStorageToken()}`,
            ...headers,
          }
        : {
            Authorization: `Bearer ${getStorageToken()}`,
            'Content-Type': 'application/json',
          },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json().then((data) => data as T);
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
            Authorization: `Bearer ${getStorageToken()}`,
            ...headers,
          }
        : {
            Authorization: `Bearer ${getStorageToken()}`,
            'Content-Type': 'application/json',
          },
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      try {
        const body = await response.json();
        return body as T;
      } catch (e) {
        return Promise.resolve({} as T);
      }
    });
  }

  post<T>(route: string, data: any, requestHeaders?: Headers): Promise<T> {
    const raw = JSON.stringify(data);
    const token = getStorageToken();
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }

    const requestOptions = {
      body: raw,
      method: 'POST',
      headers: headers,
      redirect: 'follow',
    };

    return fetch(route, requestOptions as any)
      .then((response) => response.json())
      .then((data) => data as T);
  }
}

const api = new ApiService();

export default api;
