import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver',
    'Van',
    'April',
    'Ralph',
    'Omar',
    'Carlos',
    'Miriam',
    'Bradley',
    'Virginia',
    'Kelly',
];

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

export default function Selects() {
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-multiple-select">Multiple Select</InputLabel>
                <Select
                    id="multiple-select"
                    multiple
                    autoWidth
                    value={personName}
                    onChange={handleChange}
                    input={<Input />}
                    MenuProps={MenuProps}>
                    {names.map((name) => (
                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-disabled-select">Disabled Select</InputLabel>
                <Select
                    id="disabled-select"
                    disabled>
                    <MenuItem value="10">Ten</MenuItem>
                    <MenuItem value="20">Twenty</MenuItem>
                    <MenuItem value="30">Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select">Simple Select</InputLabel>
                <Select
                    id="simple-select">
                    {lastNames.map((lastNames) => (
                        <MenuItem key={lastNames} value={lastNames} style={getStyles(lastNames, personName, theme)}>
                            {lastNames}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>);
}
