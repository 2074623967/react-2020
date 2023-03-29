import React, { memo } from 'react';

import { DiscoverWrapper, TopMenu } from './style';

export default memo(function HYDiscover() {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1"></TopMenu>
      </div>
    </DiscoverWrapper>
  );
});
