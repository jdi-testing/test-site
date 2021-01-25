import React from 'react';
import MSlider from '@material-ui/core/Slider';
import styled from 'styled-components';

const Slider = (props) => <MStyledSlider {...props} />;
const MStyledSlider = styled(MSlider)`
  width: 100px;
`;

export default Slider;
