import React, { memo} from 'react';
// import { connect } from 'react-redux';



function HYRecommend(props) {
  return <div></div>;
}

// function HYRecommend(props) {
//   //组件和redux关联:获取数据和进行操作
//   const { topBanners } = useSelector(state => ({
//     topBanners: state.recommend.topBanners,
//   }),shallowEqual );
//   console.log(topBanners);

//   const dispatch = useDispatch();

//   //发送网络请求
//   useEffect(() => {
//     dispatch(getTopBannerAction());
//   }, [dispatch]);

//   return <div>{topBanners.length}</div>;
// }

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
