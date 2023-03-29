import React, { memo } from 'react';

import { HeaderWrapper } from './style';

const HYAppHeader = memo(function HYAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content"></div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default HYAppHeader;
