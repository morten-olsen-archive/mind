export default ({ dispatch }) => next => (action) => {
  const result = next(action);
  Promise.resolve(result).then(() => {
    if (action.meta && action.meta.after) {
      dispatch(action.meta.after);
    }
  });
  return result;
};
