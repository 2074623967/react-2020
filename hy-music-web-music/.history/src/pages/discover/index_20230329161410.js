import React, { memo } from 'react';

import { DiscoverWrapper, TopMenu } from './style';
import { dicoverMenu } from '@/common/local-data';
import { NavLink } from 'react-router-dom';

export default memo(function HYDiscover() {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item, index) => {
           <NavLink
          })}
        </TopMenu>
      </div>
    </DiscoverWrapper>
  );
});
