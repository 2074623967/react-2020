import styled from 'styled-components';

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    height: 270px;
    background-color: red;

    display: flex;
    position: relative;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
  .ant-carousel .slick-dots{
    background-position: 3px ;
  }
  .ant-carousel .slick-dots li button {
    display: block;
    width: 7px;
    height: 7px;
    padding: 0;
    /* color: transparent; */
    font-size: 0;
    /* background: #fff; */
    border: 0;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  .ant-carousel .slick-dots li.slick-active button {
    background-color: #be0b0b;
  }
`;

export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank',
})`
  width: 254px;
  height: 270px;
  background: url(${require('@/assets/img/download.png')});
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
