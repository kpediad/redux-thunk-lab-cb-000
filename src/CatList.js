import React from 'react';

const CatList = ({ cats }) => {
  const renderCats = cats.map(cat => 
    <img key={cat.id} src={cat.url} />
  );
  
  return (
    <div>
      {renderCats}
    </div>
  );
};

export default CatList;