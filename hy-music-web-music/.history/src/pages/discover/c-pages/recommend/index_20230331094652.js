import React, { memo } from 'react';



import { RecommendWrapper } from './style';

import HYTopBanner from './c-cpns/top-banner'

function HYRecommend(props) {
  return (
     <RecommendWrapper>
       <HYTopBanner
     </RecommendWrapper>
    )
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
