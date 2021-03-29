import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.primary,
    },
}));

export default function SvgMaterialIcons() {
    const classes = useStyles();
    const [lastClick, setClick] = useState("");
    const [lastHover, setHover] = useState("");

    return (
      <div>
        <Grid container className={classes.root}>
            <Grid item xs={4}>
                <Typography>Filled</Typography>
            </Grid>
            <Grid item xs={8}>
                <DeleteIcon onClick={() => setClick("DeleteIcon")}
                            onMouseOver={() => setHover("DeleteIcon")}/>
                <DeleteForeverIcon onClick={() => setClick("DeleteForeverIcon")}
                                   onMouseOver={() => setHover("DeleteForeverIcon")}/>
            </Grid>
            <Grid item xs={4}>
                <Typography>Outlined</Typography>
            </Grid>
            <Grid item xs={8}>
                <DeleteOutlinedIcon onClick={() => setClick("DeleteOutlinedIcon")}
                                    onMouseOver={() => setHover("DeleteOutlinedIcon")}/>
                <DeleteForeverOutlinedIcon onClick={() => setClick("DeleteForeverOutlinedIcon")}
                                           onMouseOver={() => setHover("DeleteForeverOutlinedIcon")}/>
            </Grid>
            <Grid item xs={4}>
                <Typography>Rounded</Typography>
            </Grid>
            <Grid item xs={8}>
                <DeleteRoundedIcon onClick={() => setClick("DeleteRoundedIcon")}
                                   onMouseOver={() => setHover("DeleteRoundedIcon")}/>
                <DeleteForeverRoundedIcon onClick={() => setClick("DeleteForeverRoundedIcon")}
                                          onMouseOver={() => setHover("DeleteForeverRoundedIcon")}/>
            </Grid>
            <Grid item xs={4}>
                <Typography>Two Tone</Typography>
            </Grid>
            <Grid item xs={8}>
                <DeleteTwoToneIcon onClick={() => setClick("DeleteTwoToneIcon")}
                                   onMouseOver={() => setHover("DeleteTwoToneIcon")}/>
                <DeleteForeverTwoToneIcon onClick={() => setClick("DeleteForeverTwoToneIcon")}
                                          onMouseOver={() => setHover("DeleteForeverTwoToneIcon")}/>
            </Grid>
            <Grid item xs={4}>
                <Typography>Sharp</Typography>
            </Grid>
            <Grid item xs={8}>
                <DeleteSharpIcon onClick={() => setClick("DeleteSharpIcon")}
                                 onMouseOver={() => setHover("DeleteSharpIcon")}/>
                <DeleteForeverSharpIcon onClick={() => setClick("DeleteForeverSharpIcon")}
                                        onMouseOver={() => setHover("DeleteForeverSharpIcon")}/>
            </Grid>
            <Grid item xs={4}>
                <Typography>Edge-cases</Typography>
            </Grid>
            <Grid item xs={8}>
                <ThreeDRotationIcon onClick={() => setClick("ThreeDRotationIcon")}
                                    onMouseOver={() => setHover("ThreeDRotationIcon")}/>
                <FourKIcon onClick={() => setClick("FourKIcon")}
                           onMouseOver={() => setHover("FourKIcon")}/>
                <ThreeSixtyIcon onClick={() => setClick("ThreeSixtyIcon")}
                                onMouseOver={() => setHover("ThreeSixtyIcon")}/>
            </Grid>
        </Grid>
        <p id={"simpleLastClick"}>Last click: {lastClick}</p>
        <p id={"simpleLastHover"}>Last hover: {lastHover}</p>
      </div>
    );
}