export const find = ({
  responseType = 'MODULES_FOUND',
} = {}) => ({
  type: '@@data/FIND',
  payload: {
    collection: 'modules',
  },
  meta: {
    responseType,
  },
});
