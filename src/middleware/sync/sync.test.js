import assert from 'assert';
import MemoryDB from 'data/memory';
import sync from './sync';
import data from './sync.data';

describe.only('middleware', () => {
  describe('sync', () => {
    let dbOne = null;
    let dbTwo = null;
    let instance = null;

    beforeEach(() => {
      instance = sync({
        dispatch: () => {},
      })(() => {});
    });

    it('should be able to sync to server', () => {
      dbOne = new MemoryDB({ documents: data.from() });
      dbTwo = new MemoryDB();

      return instance({
        type: '@@sync/START',
        payload: {
          from: dbOne,
          to: dbTwo,
        },
      }).then(() => {
        assert.deepEqual(dbOne.data.documents.map(a => a.flag), [null, null, null]);
        assert.deepEqual(dbTwo.data.documents.map(a => a.id), [1, 2]);
      });
    });

    it('should be able to sync from server', () => {
      dbOne = new MemoryDB({ documents: data.from() });
      dbTwo = new MemoryDB();

      return instance({
        type: '@@sync/START',
        payload: {
          from: dbTwo,
          to: dbOne,
        },
      }).then(() => {
        assert.deepEqual(dbOne.data.documents.map(a => a.flag), [null, null, null]);
        assert.deepEqual(dbTwo.data.documents.map(a => a.id), [1, 2]);
      });
    });

    it('should be able to sync bot ways', () => {
      dbOne = new MemoryDB({ documents: data.from() });
      dbTwo = new MemoryDB({ documents: data.to() });

      return instance({
        type: '@@sync/START',
        payload: {
          from: dbTwo,
          to: dbOne,
        },
      }).then(() => {
        assert.deepEqual(dbOne.data.documents.map(a => a.flag), [null, null, null, null]);
        assert.deepEqual(dbTwo.data.documents.map(a => a.flag), [null, null, null, null, null]);
        assert.deepEqual(dbOne.data.documents.map(a => a.id), [1, 2, 3, 4]);
        assert.deepEqual(dbTwo.data.documents.map(a => a.id), [3, 4, 5, 1, 2]);
        assert.deepEqual(dbOne.data.documents.map(a => a.title), [
          'test 1',
          'test 2',
          'test 4',
          'test 5',
        ]);
      });
    });
  });
});
