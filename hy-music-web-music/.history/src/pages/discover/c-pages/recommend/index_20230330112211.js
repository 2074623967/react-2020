import React, { memo } from 'react';
import { connect } from 'react-redux';

function HYRecommend() {
  return <div>HYRecommend</div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));
