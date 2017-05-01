import { getDB } from '../../data/data';

export default ({ collection }) =>
  getDB()
    .then(db => db.resetSync(collection));
