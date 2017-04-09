import { expect } from 'chai';
import save from './save';
import { setDB } from '../../data/data';
import MemoryDB from '../../data/memory';

describe('middleware', () => {
  describe('documents', () => {
    describe('save', () => {
      beforeEach(() => {
        setDB(new MemoryDB());
      });

      it('should add default fields for new elements', () =>
        save({
          title: 'hello',
          body: 'world',
        }).then(({ document, modules }) => {
          expect(document.flag).to.equal('created');
          expect(document.created).to.be.at.least(1);
          expect(document.updated).to.be.equal(document.updated);
          expect(document.id).to.have.lengthOf(36);
          expect(document.title).to.be.equal('hello');
          expect(document.body).to.be.equal('world');
          expect(modules).to.be.eql({});
        }),
      );


      it('should be able to update document', () =>
        save({
          id: '1234567890',
          title: 'hello',
          body: 'world',
        }).then(({ document, modules }) => {
          expect(document.flag).to.equal('updated');
          expect(document.created).to.be.at.least(1);
          expect(document.updated).to.be.equal(document.updated);
          expect(document.id).to.be.equal('1234567890');
          expect(document.title).to.be.equal('hello');
          expect(document.body).to.be.equal('world');
          expect(modules).to.be.eql({});
        }),
      );


      it('should be able to find modules in body', () =>
        save({
          body: `
Demo

\`\`\`javascript
// settings: name=test1
some script here
\`\`\`

Document
\`\`\`javascript
// settings: name=test2
some other script here
\`\`\``,
        }).then(({ modules }) => {
          expect(modules).to.be.eql({
            test1: 'some script here',
            test2: 'some other script here',
          });
        }),
      );
    });
  });
});
