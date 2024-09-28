import React from "react";
// import './FilterButtons.css'; // Optional CSS import for styling

const FilterButtons = ({ selectedFilter, onFilterChange }) => {
  const filters = ["breakfast", "lunch", "dinner", "vegan", "gluten-free"];

  return (
    <div className='filter-buttons'>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={selectedFilter === filter ? "active-filter" : ""}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
