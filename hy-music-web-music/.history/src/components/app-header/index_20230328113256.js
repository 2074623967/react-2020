import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const HYAppHeader = memo(function HYAppHeader() {
  return (
    <div>
      <NavLink to={"/"}></NavLink>
      <NavLink to={"/mine"}></NavLink>
      <NavLink></NavLink>
    </div>
  );
});

export default HYAppHeader;
