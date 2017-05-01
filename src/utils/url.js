export const getInit = () => {
  const hash = global.location.hash;
  if (hash.length > 1) {
    const corrected = hash.substring(1);
    const name = corrected.substring(0, corrected.indexOf(':'));
    const rawData = decodeURIComponent(corrected.substring(corrected.indexOf(':') + 1));
    const data = JSON.parse(rawData);
    return {
      name,
      data,
    };
  } else {
    return null;
  }
};
