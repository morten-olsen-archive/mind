export const add = () => {
};

export const remove = () => {
};

export const load = () => state => ({
  type: '@@data/FIND',
  payload: {
    filters: state,
  },
});
