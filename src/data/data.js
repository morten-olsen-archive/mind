let dbPromise = null;
let bootPromise = null;
let bootResolve = null;

export const setDB = (db) => {
  if (bootResolve) {
    bootResolve(db);
  }
  dbPromise = Promise.resolve(db);
};

export const getDB = () => {
  if (dbPromise) {
    return dbPromise;
  } else {
    if (!bootPromise) {
      bootPromise = new Promise((resolve) => {
        bootResolve = resolve;
      });
    }
    return bootPromise;
  }
};
