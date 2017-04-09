import MemoryDB from './memory';
import demo from './demo.json';

class LocalStorageDB extends MemoryDB {
  constructor(name) {
    const rawData = global.localStorage.getItem(name);
    let data = demo;
    if (rawData) {
      data = JSON.parse(rawData);
    }
    super(data, (newData) => {
      global.localStorage.setItem(name, JSON.stringify(newData));
    });
  }
}

export default LocalStorageDB;
