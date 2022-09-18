
import React from 'react';

function Header(){
  const headerStyledComponentsStyles = {
    fontFamily: 'Jost',
    textAlign: 'center',
    fontSize: '32px',
    backgroundColor: 'lavender'
  }
  return (
    <div style= {headerStyledComponentsStyles}>
      <h1>Inventory</h1>
    </div>
  );
}

export default Header;