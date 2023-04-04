import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
  .login {
    height: 165px;
    padding-top: 20px;
    background-position: 0 -270px;
    .login-top {
      .img {
        float: left;
        width: 80px;
        height: 80px;
        margin-left: 20px;
        _margin-left: 10px;
        padding: 2px;
        background: #fff;
        border: 1px solid #dadada;
      }
      .info {
        float: left;
        width: 115px;
        margin-left: 18px;
        padding-top: 3px;
        .title {
          font-size: 14px;
          color: #333;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: bold;
        }
        .level-left {
          display: inline-block;
          height: 17px;
          overflow: hidden;
          padding-left: 25px;
          line-height: 18px;
          color: #999;
          font-weight: bold;
          font-style: italic;
          background-position: -130px -64px;
        }
        .level-right{
        
        }
      }
    }
  }
`;
