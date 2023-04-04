import React, { memo } from 'react';



import HYPlayHeader from './c-cpns/play-header'
import HYPlayList from './c-cpns/'
import { PlaybarPanelWrapper } from './style';

export default memo(function HYAppPlayerPanel() {
  return (
    <PlaybarPanelWrapper>
        <HYPlayHeader/>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <HYPlayList/>
        <HYLyricPanel/>
      </div>
    </PlaybarPanelWrapper>
  );
});
