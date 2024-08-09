import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const currentYear = new Date().getFullYear();

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {[currentYear, currentYear - 1, currentYear - 2, currentYear - 3].map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
