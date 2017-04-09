export default ({ dispatch }) => next => (action) => {
  const result = next(action);
  if (action.meta && action.meta.after) {
    dispatch(action.meta.after);
  }
  return result;
};
