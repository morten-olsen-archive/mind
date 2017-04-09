import { getDB } from 'data/data';

export default run => (...names) => getDB()
  .then(db =>
    Promise.all(names.map(name => db.search('modules', {
      filters: [{
        field: 'name',
        type: '=',
        value: name,
      }],
    })),
  )
  .then(modules => modules.reduce((result, item) => {
    result.push(item[0]);
    return result;
  }, []))
  .then(modules =>
    modules.map((m) => {
      const module = {
        exports: {},
      };
      run(m.module, module.exports, module);
      return module.exports;
    }),
  ),
);
