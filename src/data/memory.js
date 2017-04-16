import DataSource from './data-source';

export default class MemoryDB extends DataSource {
  constructor(data, onSave) {
    super();
    this.data = data || {};
    this.onSave = onSave;
  }

  setAll(data) {
    this.data = data;
  }

  set(collection, document) {
    this.data[collection] = this.data[collection] || [];
    const currentId = this.data[collection].findIndex(a => a.id === document.id);
    if (currentId >= 0) {
      this.data[collection][currentId] = document;
    } else {
      this.data[collection].push(document);
    }
    if (this.onSave) {
      this.onSave(this.data);
    }
  }

  remove(collection, id) {
    this.data[collection] = this.data[collection] || [];
    const index = this.data[collection].findIndex(doc => doc.id === id);
    if (index >= 0) {
      this.data[collection].splice(index, 1);
    }

    if (this.onSave) {
      this.onSave(this.data);
    }
  }

  search(collection, {
    filters = [],
    sort = {},
    skip,
    take,
  }) {
    let data = [...(this.data[collection] || [])];
    filters.forEach((filter) => {
      const applyFilter = (fn) => {
        data = data.filter(item => fn(item) === !filter.not);
      };
      if (filter.type === 'includes') {
        applyFilter(item => item[filter.field].includes(filter.values));
      } else if (filter.type === '=') {
        applyFilter(item => item[filter.field] === filter.value);
      } else if (filter.type === '>') {
        applyFilter(item => item[filter.field] > filter.value);
      } else if (filter.type === '>=') {
        applyFilter(item => item[filter.field] >= filter.value);
      } else if (filter.type === '<') {
        applyFilter(item => item[filter.field] < filter.value);
      } else if (filter.type === '<=') {
        applyFilter(item => item[filter.field] <= filter.value);
      } else if (filter.type === 'filter') {
        applyFilter(filter.fn);
      }
    });

    if (sort) {
      Object.keys(sort).forEach((key) => {
        const asc = sort[key] === 'asc';
        data.sort((a, b) => {
          if (a[key] < b[key]) {
            return asc ? -1 : 1;
          }
          if (a[key] > b[key]) {
            return asc ? 1 : -1;
          }
          return 0;
        });
      });
    }
    if (skip) {
      data = data.splice(skip);
    }
    if (take) {
      data = data.splice(0, take);
    }
    return data;
  }
}
