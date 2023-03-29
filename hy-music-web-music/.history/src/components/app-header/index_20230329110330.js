import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import { headerLinks } from '@/common/local-data';


const HYAppHeader = memo(function HYAppHeader() {
  //页面代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return(
        <NavLink
        )
    }else{
     return <a href={item.link}></a>
    }
  };

  //返回的jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01" />
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return <div key={item.title}></div>;
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>Right</HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default HYAppHeader;
