import React from 'react';
import MPaper from '@material-ui/core/Paper';
import styled from 'styled-components';

const Paper = (props) => <MStyledPaper {...props} />;

const MStyledPaper = styled(MPaper)`
  text-align: center;
  width: 100px;
  height: 100px;
`;

export default Paper;