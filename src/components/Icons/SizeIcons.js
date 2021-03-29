import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > svg': {
            margin: theme.spacing(2),
        },
    },
}));

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export default function SvgIconsSize() {
    const classes = useStyles();
    const [lastClick, setClick] = useState("");
    const [lastHover, setHover] = useState("");


    return (
      <div>
        <div className={classes.root}>
            <HomeIcon fontSize="small"
                      onClick={() => setClick("small size")}
                      onMouseOver={() => setHover("small size")}/>
            <HomeIcon alt={"default home"}
                      onClick={() => setClick("default size")}
                      onMouseOver={() => setHover("default size")}/>
            <HomeIcon fontSize="large"
                      onClick={() => setClick("large size")}
                      onMouseOver={() => setHover("large size")}/>
            <HomeIcon style={{ fontSize: 40 }}
                      onClick={() => setClick("40 size")}
                      onMouseOver={() => setHover("40 size")}/>
        </div>
        <p id={"sizeLastClick"}>Last click: {lastClick}</p>
        <p id={"sizeLastHover"}>Last hover: {lastHover}</p>
      </div>
    );
}
