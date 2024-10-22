import React, { useRef, useState } from 'react';

function SearchableList({ items, children, itemKeyFn }) {
  const [searchTerm, setSearchTerm] = useState('');
  const lastChange = useRef();

  const searchResults = items.filter(item =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(e) {
    if (lastChange.current) clearTimeout(lastChange.current);

    lastChange.current = setTimeout(() => {
      console.log('done');
      lastChange.current = null;
      setSearchTerm(e.target.value);
    }, 700);
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
