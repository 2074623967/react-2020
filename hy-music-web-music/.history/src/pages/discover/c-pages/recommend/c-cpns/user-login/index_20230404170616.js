import React, { memo } from 'react';

import { UserLoginWrapper } from './style';

export default memo(function HYUserLogin() {
  return (
    <UserLoginWrapper>
      <div className="sprite_02 login">
        <div className="login-top">
          <a href="/#" className="img">
            <img src="http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg?param=80y80"></img>
          </a>
          <div className="info">
            <h3>
              <a className="title">数据库开发行货</a>
            </h3>
            <p>
              <a className="sprite_icon3 level-left">
                8<i className="sprite_icon3 level-right"></i>
              </a>
            </p>
            <div className="button">
              <a className="sprite_button sign">
                <i className="sprite_button sign-button">签到</i>
              </a>
            </div>
          </div>
        </div>
        <ul className="login-bottom">
          <li>
            <a className='bottom-title'>
              <strong>0</strong>
              <span>动态</span>
            </a>
          </li>
          <li className="vertical-split"></li>
          <li>
            <a>
              <strong>0</strong>
              <span>关注</span>
            </a>
          </li>
          <li className="vertical-split"></li>
          <li>
            <a>
              <strong c>0</strong>
              <span>粉丝</span>
            </a>
          </li>
        </ul>
      </div>
    </UserLoginWrapper>
  );
});
