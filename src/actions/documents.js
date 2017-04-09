export const save = (document, responseType = 'DOCUMENT_SAVE') => ({
  type: '@@data/SAVE',
  payload: document,
  meta: {
    responseType,
  },
});

export const find = ({
  filters = [],
  sort,
  skip,
  take,
  responseType = 'DOCUMENTS_FOUND',
} = {}) => ({
  type: '@@data/FIND',
  payload: {
    collection: 'documents',
    filters,
    sort,
    skip,
    take,
  },
  meta: {
    responseType,
  },
});

export const reload = () => state => find({
  filters: state.search.userFilters,
});

export const select = document => ({
  type: 'DOCUMENT_SELECTED',
  payload: document,
});

export const setFields = fields => ({
  type: 'DOCUMENT_SET_FIELD',
  payload: fields,
});
