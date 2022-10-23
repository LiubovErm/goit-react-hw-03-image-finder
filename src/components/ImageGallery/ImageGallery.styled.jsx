import styled from 'styled-components';

export const ImageList = styled.ul`
  list-style: none;
  margin: 0 auto;
  /* padding-top: 80px; */
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 80px;
  margin-bottom: 30px;
`;