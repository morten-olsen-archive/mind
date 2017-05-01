export const withLocalStorage = (name, defaultState, reducer) => {
  const storeName = `reducer-${name}`;
  const rawState = global.localStorage.getItem(storeName);
  let initState = defaultState;
  if (rawState) {
    initState = {
      ...defaultState,
      ...JSON.parse(rawState),
    };
  }
  let prevState;
  return (state, action) => {
    const newState = reducer(state || initState, action);
    if (newState !== prevState) {
      global.localStorage.setItem(storeName, JSON.stringify(newState));
      prevState = newState;
    }
    return newState;
  };
};
