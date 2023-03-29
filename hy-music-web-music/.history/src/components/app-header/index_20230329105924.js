import React, { memo } from 'react';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import { headerLinks } from '@/common/local-data';

const HYAppHeader = memo(function HYAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01" />
          <div className="select-list">
            headerLinks.map((item,index) => {
             return (
               
              )
            })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>Right</HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default HYAppHeader;
