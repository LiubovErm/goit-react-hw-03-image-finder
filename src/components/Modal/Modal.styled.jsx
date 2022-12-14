import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const LargeImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.radii.normal};
`;
