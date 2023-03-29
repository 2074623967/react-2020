import React, { memo } from 'react';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';

const HYAppHeader = memo(function HYAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          
        </HeaderLeft>
        <HeaderRight>Right</HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default HYAppHeader;
