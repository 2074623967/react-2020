import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import { NavLink } from 'react-router-dom';


import { dicoverMenu } from '@/common/local-data';

export default memo(function HYDiscover(props) {
  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
});
