import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';

import { DiscoverWrapper, TopMenu } from './style';
import { dicoverMenu } from '@/common/local-data';

export default memo(function HYDiscover() {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item, index) => {
            return <NavLink to={item.link}>{item.title}</NavLink>;
          })}
        </TopMenu>
      </div>
    </DiscoverWrapper>
  );
});
