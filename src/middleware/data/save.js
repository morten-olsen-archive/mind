import uuid from 'uuid';
import { getDB } from '../../data/data';

const modulePattern = /```javascript\n\/\/ +settings:[^\n]name=([a-z0-9]+)[^\n]*([^`]+)```/g;

export default (payload) => {
  const document = {
    id: uuid.v4(),
    created: new Date().getTime(),
    files: [],
    body: '',
    title: 'unnammed document',
    tags: [],
    ...payload,
    updated: new Date().getTime(),
    flag: 'updated',
  };

  const modules = {};
  let result;

  do {
    result = modulePattern.exec(payload.body);
    if (result) {
      modules[result[1]] = result[2].trim();
    }
  } while (result);

  return getDB()
    .then((db) => {
      db.set('documents', document);
      Object.keys(modules).map(name => db.set('modules', {
        id: name,
        name,
        module: modules[name],
      }));
      return {
        document,
        modules,
      };
    });
};
