import { getDB } from '../../data/data';

export default ({ collection, filters, sort, skip, take }) =>
  getDB()
    .then(db => db.search(collection, {
      filters,
      sort,
      skip,
      take,
    }));
