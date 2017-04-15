import { getDB } from '../../data/data';

export default ({ collection, id }) =>
  getDB()
    .then(db => db.remove(collection, id));
