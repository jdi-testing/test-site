import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const lastNames = [
    'Hansen',
    'Henry',
    'Tucker',
    'Hubbard',
    'Alexander',
    'Abbott',
    'Wagner',
    'Wilkerson',
    'Andrews',
    'Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function SimpleSelect() {
    const classes = useStyles();
    const theme = useTheme();
    const [personName] = React.useState([]);

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select">Simple Select</InputLabel>
                <Select
                    id="simple-select"
                    defaultValue="">
                    {lastNames.map((lastNames) => (
                        <MenuItem key={lastNames} value={lastNames} style={getStyles(lastNames, personName, theme)}>
                            {lastNames}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>);
}
