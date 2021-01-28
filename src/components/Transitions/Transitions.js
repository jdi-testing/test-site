import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import MCollapse from '@material-ui/core/Collapse';
import MFade from "@material-ui/core/Fade";
import MGrow from "@material-ui/core/Grow";
import MSlide from "@material-ui/core/Slide";
import MZoom from "@material-ui/core/Zoom";

export const TRANSITIONS = {
    COLLAPSE: "collapse",
    FADE: "fade",
    GROW: "grow",
    SLIDE: "slide",
    ZOOM: "zoom"
}

export default function SimpleTransition(...args) {

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div>
            <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Show"
            />
            {renderTransition(args[0], checked)}
        </div>
    );
}

function renderTransition(arg, checked) {
    switch (arg.transition) {
        case "collapse":
            return (
                <MCollapse in={checked}>
                    {SimplePaper()}
                </MCollapse>
            )
        case "fade":
            return (
                <MFade in={checked}>
                    {SimplePaper()}
                </MFade>
            )
        case "grow":
            return (
                <MGrow in={checked}>
                    {SimplePaper()}
                </MGrow>
            )
        case "slide":
            return (
                <MSlide in={checked} direction="up" mountOnEnter unmountOnExit>
                    {SimplePaper()}
                </MSlide>
            )
        case "zoom":
            return (
                <MZoom in={checked} style={{ transitionDelay: checked ? '100ms' : '0ms' }}>
                    {SimplePaper()}
                </MZoom>
            )
        default:
            return null;
    }
}

function SimplePaper() {
    const classes = useStyles();
    return (
        <Paper elevation={4} className={classes.paper}>
            Content
        </Paper>
    )
}

const useStyles = makeStyles(() => ({
    paper: {
        width:100,
        height:100,
        textAlign: "center",
    },
}));