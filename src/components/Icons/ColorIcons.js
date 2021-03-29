import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
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

export default function SvgIconsColor() {
    const classes = useStyles();
    const [lastClick, setClick] = useState("");
    const [lastHover, setHover] = useState("");

    return (
      <div>
        <div className={classes.root}>
            <HomeIcon onClick={() => setClick("default")}
                      onMouseOver={() => setHover("default")}/>
            <HomeIcon color="primary" onClick={() => setClick("primary")}
                      onMouseOver={() => setHover("primary")}/>
            <HomeIcon color="secondary"
                      onClick={() => setClick("secondary")}
                      onMouseOver={() => setHover("secondary")}/>
            <HomeIcon color="action" onClick={() => setClick("action")}
                      onMouseOver={() => setHover("action")}/>
            <HomeIcon color="disabled" onClick={() => setClick("disabled")}
                      onMouseOver={() => setHover("disabled")}/>
            <HomeIcon style={{ color: green[500] }} onClick={() => setClick("green[500]")}
                      onMouseOver={() => setHover("green[500]")}/>
        </div>
        <p id={"colorLastClick"}>Last click: {lastClick}</p>
        <p id={"colorLastHover"}>Last hover: {lastHover}</p>
      </div>
    );
}