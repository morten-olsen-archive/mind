export const isToday = (today, document) => {
  if (!document.startDate) return false;
  const date = new Date(document.startDate);
  date.setFullYear(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  const tmp = new Date(today);
  tmp.setFullYear(
    tmp.getFullYear(),
    tmp.getMonth(),
    tmp.getDate(),
  );
  tmp.setHours(0);
  tmp.setMinutes(0);
  tmp.setSeconds(0);
  tmp.setMilliseconds(0);
  if (tmp.getTime() === date.getTime()) {
    return true;
  } else {
    return false;
  }
};

export const getDocuments = (today, documents) => documents.filter(d => isToday(today, d));

export const getFirstDayOfMonth = (date) => {
  const tmp = new Date(date);
  tmp.setFullYear(
    date.getFullYear(),
    date.getMonth(),
    1,
  );
  return tmp.getDay();
};

export const getLastDayOfMonth = (date) => {
  const tmp = new Date(date);
  tmp.setFullYear(
    date.getFullYear(),
    date.getMonth() + 1,
    1,
  );
  return tmp.getDay();
};

export const getDaysInMonth = (date) => {
  const tmp = new Date(date);
  tmp.setFullYear(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  );
  return tmp.getDate();
};

export const getMonth = (date) => {
  const firstDay = getFirstDayOfMonth(date);
  const lastDay = getLastDayOfMonth(date);
  const days = getDaysInMonth(date);
  const dateCopy = new Date(date);
  dateCopy.setDate(1);

  const dates = new Array(days).fill(undefined).map(() => {
    const output = new Date(dateCopy);
    dateCopy.setDate(dateCopy.getDate() + 1);
    return output;
  });

  return {
    dates,
    offsetStart: firstDay,
    offsetEnd: 7 - lastDay,
  };
};
