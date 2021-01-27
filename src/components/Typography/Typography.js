import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});

export default function Types() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h1" component="h2" gutterBottom>
                Head 1
            </Typography>
            <Typography variant="h2" gutterBottom>
                Head 2
            </Typography>
            <Typography variant="h3" gutterBottom>
                Head 3
            </Typography>
            <Typography variant="h4" gutterBottom>
                Head 4
            </Typography>
            <Typography variant="h5" gutterBottom>
                Head 5
            </Typography>
            <Typography variant="h6" gutterBottom>
                Head 6
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Subtitle 1
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                Subtitle 2
            </Typography>
            <Typography variant="body1" gutterBottom>
                Body 1
            </Typography>
            <Typography variant="body2" gutterBottom>
                Body 2
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
                Button text
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                Caption text
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                Overline text
            </Typography>
        </div>
    );
}
