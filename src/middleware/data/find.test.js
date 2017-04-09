import { expect } from 'chai';
import find from './find';
import { setDB } from '../../data/data';
import MemoryDB from '../../data/memory';

const demoDocuments = {
  documents: [{
    title: 'hello 1',
  }, {
    title: 'hello 2',
  }, {
    title: 'hello 3',
  }, {
    title: 'hello 4',
  }],
};

describe('middleware', () => {
  describe('documents', () => {
    describe('find', () => {
      beforeEach(() => {
        setDB(new MemoryDB(demoDocuments));
      });

      it('Should be able to get all documents', () =>
        find({ collection: 'documents' })
          .then((result) => {
            expect(result).to.have.length(4);
            expect(result.map(r => r.title)).to.be.eql([
              'hello 1', 'hello 2', 'hello 3', 'hello 4',
            ]);
          }),
      );

      it('Should be able to sort documents', () =>
        find({ collection: 'documents', sort: { title: 'desc' } })
          .then((result) => {
            expect(result.map(r => r.title)).to.be.eql([
              'hello 4', 'hello 3', 'hello 2', 'hello 1',
            ]);
          }),
      );

      it('Should be able to page documents', () =>
        find({ collection: 'documents', skip: 2, take: 2 })
          .then((result) => {
            expect(result).to.have.length(2);
            expect(result.map(r => r.title)).to.be.eql([
              'hello 3', 'hello 4',
            ]);
          }),
      );
    });
  });
});
