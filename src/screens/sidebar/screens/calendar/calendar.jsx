import React from 'react';
import { getMonth, getDocuments } from './utils';
import style from './calendar.css';
import classnames from 'classnames';

const renderOffset = (offset) => {
  return new Array(offset).fill(undefined).map((a, i) => (
    <div className={classnames(style.day, style.inactive)} key={`fillin_${i}`}></div>
  ));
};

const renderDay = (day, documents, onSelect) => {
  const todays = getDocuments(day, documents);
  return (
    <div className={style.day} key={day.getTime()}>
      {day.getDate()}
      {todays.map(document => (
        <div onClick={() => onSelect(document)}>{document.title}</div>
      ))}
    </div>
  );
};

const Component = ({
  documents,
  onSelect,
}) => {
  const month = getMonth(new Date());
  return (
    <div className={style.calendar}>
      {renderOffset(month.offsetStart)}
      {month.dates.map(day => renderDay(day, documents, onSelect))}
      {renderOffset(month.offsetEnd)}
    </div>
  );
};

export default Component;
