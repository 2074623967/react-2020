import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';
import { HeaderWrapper } from './style';

const HYAppHeader = memo(function HYAppHeader() {
  return (
    <HeaderWrapper>
     <div className='content'></div>
     <div></div>
    </HeaderWrapper>
  );
});

export default HYAppHeader;
