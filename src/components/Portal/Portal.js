import React from 'react';
import MPortal from '@material-ui/core/Portal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    alert: {
        padding: theme.spacing(1),
        margin: theme.spacing(1, 0),
        border: '1px solid',
    },
}));

export default function Portal() {
    const classes = useStyles();
    const [show, setShow] = React.useState(false);
    const container = React.useRef(null);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div>
            <button type="button" onClick={handleClick}>
                {show ? 'Unmount children' : 'Mount children'}
            </button>
            <div className={classes.alert}>
                It looks like I will render here.
                {show ? (
                    <MPortal container={container.current}>
                        <span>But I actually render here!</span>
                    </MPortal>
                ) : null}
            </div>
            <div className={classes.alert} ref={container} />
        </div>
    );
}

// const Portal = (props) => <MPortal {...props} />;
//
// export default Portal;
