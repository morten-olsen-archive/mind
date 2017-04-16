class DataSource {
  getUnsyncedDocument() {
    return Promise.resolve(this.search('documents', {
      filters: [{
        field: 'flag',
        type: '=',
        value: 'updated',
      }],
      take: 1,
    }))
    .then(results => results[0]);
  }

  markSynced(document) {
    return Promise.resolve(this.set('documents', {
      ...document,
      flag: null,
    }));
  }

  addUpdatedDocument(document) {
    return Promise.resolve(this.set('documents', {
      ...document,
      flag: null,
    }));
  }
}

export default DataSource;
