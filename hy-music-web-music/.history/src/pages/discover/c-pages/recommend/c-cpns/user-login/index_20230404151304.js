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
              <a className="sprite_icon3 level-left">8</a>
              <i className="sprite_icon3 level-right"></i>
            </p>
          </div>
        </div>
      </div>
    </UserLoginWrapper>
  );
});
