import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';
import { HeaderWrapper } from './style';

const HYAppHeader = memo(function HYAppHeader() {
  return (
    <HeaderWrapper>
      <NavLink to={'/'}>发现音乐</NavLink>
      <NavLink to={'/mine'}>我的音乐</NavLink>
      <NavLink to={'/friend'}>我的朋友</NavLink>
    </HeaderWrapper>
  );
});

export default HYAppHeader;
