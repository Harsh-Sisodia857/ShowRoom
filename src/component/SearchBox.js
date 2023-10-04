import React from "react";

const SearchBox = ({ value, onChange }) => {
    return (
        <input
            type="text"
            name="query"
            className="form-control me-2"
            placeholder="Search..."
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
        />
    );
};

export default SearchBox;
