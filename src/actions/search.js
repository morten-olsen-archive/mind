import { reload } from 'actions/documents';

export const addFilter = (not, field, type, value) => {
  if (type === 'includes') {
    value = value.split(',');
  }
  return {
    type: 'ADD_FILTER',
    payload: {
      not,
      field,
      type,
      value,
    },
    meta: {
      after: reload(),
    },
  };
};

export const removeFilter = index => ({
  type: 'REMOVE_FILTER',
  payload: index,
  meta: {
    after: reload(),
  },
});

export const setFields = fields => ({
  type: 'SET_FIELDS',
  payload: fields,
});
