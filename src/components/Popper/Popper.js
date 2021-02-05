import React from 'react';
import MPopper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';

function Popper() {
return <div>
            <button aria-describedby='popperButton' type="button"
                onClick={() => console.log('Toggle Popper clicked')}>
                Toggle Popper
            </button>
            <MPopper id = 'simple-popper' anchorEl='popperButton' open= 'true'>
              <div>The content of the Popper.</div>
              </MPopper>
      </div>;
}


export default Popper;

