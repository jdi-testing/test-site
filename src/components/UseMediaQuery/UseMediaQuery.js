import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SimpleMediaQuery() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div>
      <h1>Use Media Query</h1>
      <span>{`(min-width:600px) matches: ${matches}`}</span>
    </div>
    );
}