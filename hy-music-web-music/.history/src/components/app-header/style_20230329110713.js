import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  .content {
    height: 70px;
    background-color: blue;
    display: flex;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    box-sizing: border-box;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }
  .select-list {
    display: flex;
    line-height: 70px;
  }
`;

export const HeaderRight = styled.div``;
