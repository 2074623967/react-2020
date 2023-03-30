import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { connect } from 'react-redux';

import { getTopBannerAction } from './store/actionCreators';

function HYRecommend(props) {
  //组件和redux关联:获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners,
  }));
  console.log(
    useSelector(state => ({
      topBanners: state,
    }))
  );

  const dispatch = useDispatch();

  //发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return <div>{topBanners.length}</div>;
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
