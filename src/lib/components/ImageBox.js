import styled from 'styled-components';
import FlexBox from './FlexBox';

const ImageBox = styled(FlexBox)`
  background: ${props => props.theme.colors.background};
  // border: 2px solid ${props => props.theme.colors.outlineColor};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 1rem;
  padding: 1.5rem 2rem;
`;

export default ImageBox;
