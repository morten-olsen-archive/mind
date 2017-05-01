export const save = (document, responseType = 'DOCUMENT_SAVE') => ({
  type: '@@data/SAVE',
  payload: {
    ...document,
    dirty: undefined,
  },
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

export const resetUpdated = () => ({
  type: '@@data/RESETSYNC',
  payload: {
    collection: 'documents',
  },
  meta: {
    after: reload(),
    responseType: 'RESET_UPDATED',
  },
});

export const remove = id => ({
  type: '@@data/REMOVE',
  payload: {
    collection: 'documents',
    id,
  },
  meta: {
    after: reload(),
  },
});

export const select = document => (state) => {
  if (
    !state.documents.selected.dirty
    || global.confirm('You have unsaved changes, are you sure you want to open this document?')
  ) {
    return {
      type: 'DOCUMENT_SELECTED',
      payload: document,
    };
  } else {
    return {
      type: '@@nill',
    };
  }
};


export const create = () => select({});

export const setFields = fields => ({
  type: 'DOCUMENT_SET_FIELD',
  payload: fields,
});
