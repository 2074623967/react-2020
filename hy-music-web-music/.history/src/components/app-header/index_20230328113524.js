import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const HYAppHeader = memo(function HYAppHeader() {
  return (
    <div>
      <NavLink to={'/'}>发现</NavLink>
      <NavLink to={'/mine'}></NavLink>
      <NavLink to={'/friend'}></NavLink>
    </div>
  );
});

export default HYAppHeader;
