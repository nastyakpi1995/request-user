import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: inherit !important;
  margin: 0 auto;
  font-size: 36px;
  color: white;
  height: 50px;
  padding-bottom: 40px;

  a {
    text-decoration: none;
      &:hover {
        height: 40px;
        background: red;
   }
   }
`;

export const LinkChildren = styled.button`
  background: ${props => (props.isActive ? '#fff' : '#d6cccf')};
  color: ${props => (props.isActive ? '#000' : '#a4abb1')};
  transition: 0.3s all;
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 40px;
  width: 40px;
`;

export const Continue = styled.div`
  background: inherit;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const ButtonPagination = styled.button`
  appearance: inherit;
  background: inherit;
  border: none;
  margin: 0 auto;
  height: 100%;
  outline: none;
  color: white;
  max-width: 400px;
  width: 60px;
  justify-content: space-around;
  cursor: pointer;

   ​&:hover {
    fill: red;
    background: darkgrey !important;
    transition: background-color .2s, transform .2s;
  }

  img {
    overflow: hidden;
    box-sizing: border-box;
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: relative;
    display: block;
  }
`;

