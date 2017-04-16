export default {
  from: () => JSON.parse(JSON.stringify([{
    id: 1,
    title: 'test 1',
    flag: 'updated',
  }, {
    id: 2,
    title: 'test 2',
    flag: 'updated',
  }, {
    id: 3,
    title: 'test 3',
    flag: null,
  }])),

  to: () => JSON.parse(JSON.stringify([{
    id: 3,
    title: 'test 4',
    flag: 'updated',
  }, {
    id: 4,
    title: 'test 5',
    flag: 'updated',
  }, {
    id: 5,
    title: 'test 6',
    flag: null,
  }])),
};
