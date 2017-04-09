import { spy } from 'sinon';
import { expect } from 'chai';
import data from './data';
import { setDB } from '../../data/data';
import MemoryDB from '../../data/memory';

describe('middleware', () => {
  describe('data', () => {
    let instance = null;
    let dispatch = null;

    beforeEach(() => {
      setDB(new MemoryDB());
      dispatch = spy();
      instance = data({ dispatch })(a => a);
      instance({
        type: 'init',
      });
    });

    it('sdf', () =>
      instance({
        type: '@@data/SAVE',
        meta: {
          responseType: 'TEST_STUFF',
        },
        payload: {
        },
      })
      .then(() => {
        expect(dispatch.firstCall.args[0].type).to.be.eql('TEST_STUFF');
      }),
    );
  });
});
