import React from "react";

const Filterbar = ({ fil, setFilter }) => {
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <label htmlFor="search" className="form-label fw-semibold">
          🔍 Search Tasks
        </label>

        <input
          id="search"
          type="text"
          className="form-control form-control-lg"
          placeholder="Search by title..."
          value={fil}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filterbar;