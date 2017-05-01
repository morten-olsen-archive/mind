export default ({ dispatch }) => next => (action) => {
  if (action.type === '@@sync/START') {
    next(action);
    return Promise.all([
      Promise.resolve(action.payload.from),
      Promise.resolve(action.payload.to),
    ])
    .then(async ([fromDB, toDB]) => {
      let unsynced = await fromDB.getUnsyncedDocument();
      while (unsynced) {
        await toDB.addUpdatedDocument(unsynced);
        await fromDB.markSynced(unsynced);
        unsynced = await fromDB.getUnsyncedDocument();
      }
      return [fromDB, toDB];
    })
    .then(async ([fromDB, toDB]) => {
      let unsynced = await toDB.getUnsyncedDocument();
      while (unsynced) {
        await fromDB.addUpdatedDocument(unsynced);
        await toDB.markSynced(unsynced);
        unsynced = await toDB.getUnsyncedDocument();
      }
    })
    .then(() => dispatch({
      type: '@@sync/COMPLETED',
    }))
    .catch((err) => {
      dispatch({
        type: '@@sync/FAILED',
        error: err,
      });
    });
  } else {
    return next(action);
  }
};
