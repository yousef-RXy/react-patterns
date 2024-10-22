import React, { useState } from 'react';

function SearchableList({ items, children, itemKeyFn }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter(item =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <div className="searchable-list">
      <input type="search" placeholder="search" onChange={handleChange} />
      <ul>
        {searchResults.map(item => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchableList;
