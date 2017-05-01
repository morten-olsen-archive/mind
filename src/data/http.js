import DataSource from './data-source';

const fields = {
  token: Symbol('token'),
};

export default class HttpDB extends DataSource {
  constructor(baseUrl, token, client) {
    super();
    this.baseUrl = baseUrl;
    this.client = client;
    this[fields.token] = token;
  }

  send(url, type = 'GET', body) {
    return global.fetch(url, {
      method: type,
      body: JSON.stringify(body),
      headers: {
        token: this[fields.token],
        client: this.client,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json());
  }

  set(collection, document) {
    const url = `${this.baseUrl}/${collection}/${document.id}`;
    return this.send(url, 'POST', document);
  }

  remove(collection, id) {
    const url = `${this.baseUrl}/${collection}/${id}`;
    return this.send(url, 'DELETE');
  }

  search(collection, body) {
    const url = `${this.baseUrl}/${collection}`;
    return this.send(url, 'POST', {
      ...body,
      client: 1234,
      lastUpdated: 0,
    });
  }
}
