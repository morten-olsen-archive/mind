import { reload } from 'actions/documents';

export const addFilter = (field, type, value) => ({
  type: 'ADD_FILTER',
  payload: {
    field,
    type,
    value,
  },
  meta: {
    after: reload(),
  },
});

export const setFields = fields => ({
  type: 'SET_FIELDS',
  payload: fields,
});
