import React, { memo } from 'react';

import HYTopBanner from './c-cpns/top-banner';
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style';

function HYRecommend(props) {
  return (
    <RecommendWrapper>
      <HYTopBanner/>
      <Content>
        <RecommendLeft>
        </RecommendLeft>
        
      </Content>
    </RecommendWrapper>
  );
}

export default memo(HYRecommend);

// function HYRecommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);

//   return <div>HYRecommend</div>;
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));
