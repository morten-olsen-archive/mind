export default ({ getState }) => next => (action) => {
  if (typeof action === 'function') {
    return next(action(getState()));
  } else {
    return next(action);
  }
};
