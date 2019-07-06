import React from 'react';

const Header = (props) => {
  return (
    <div id="Header">
      <h1>anablock</h1>
      {props.children}
    </div>
  );
};

export default Header;
