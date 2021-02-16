import React from 'react';
import CheckboxConst from './Checkbox';
import FormControlConst from './FormControl';
import FormLabelConst from './FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabelConst from './FormControlLabel';
import NSwitch from '@material-ui/core/Switch';
import FormGroupConst from './FormGroup';

export default {
    title: 'Material Ui/Inputs/Checkbox',
    component: CheckboxConst,
};

const Template = (args) => <CheckboxConst {...args} />;

const checkedConst = {
    checked: true,
};

const disabledConst = {
    disabled: true,
};

const shrinkConst = {
    shrink: true,
};

export const Primary = Template.bind({});
Primary.args = {
    value: "primary",
    inputProps: { 'aria-label': 'Checkbox A' },
    color: "primary",
};

export const Disabled = Template.bind({});
Disabled.args = {
    id: "disabled-checkbox",
    value: "Disabled",
    disabled: true,
    inputProps: { 'aria-label': 'Checkbox B' }
};

export const Required = Template.bind({});
Required.args = {
    id: "required-checkbox",
    required: true,
    color: "secondary",
};

const Template1 = (args) => <FormControlConst {...args} >
    <InputLabel htmlFor="my-input" shrink={Boolean(shrinkConst)}>Email address</InputLabel>
    <Input id="my-input" type="checkbox" aria-describedby="my-helper-text" />
    <FormHelperText id="my-helper-text" margin="dense">We ll never share your email.</FormHelperText>
</FormControlConst>;
export const FormControl = Template1.bind({});
FormControl.args = {
    error: true,
};

const Template2 = (args) => <FormControlLabelConst {...args} />;
export const LabelBox = Template2.bind({});
LabelBox.args = {
    id: "label-checkbox",
    checked: true,
    label: 'With Label',
    labelPlacement: 'bottom',
    value: "value",
    control: <NSwitch />
};

export const DisabledControlLabel = Template2.bind({});
DisabledControlLabel.args = {
    id: "dis-label-checkbox",
    disabled: true,
    label: 'Disabled',
    labelPlacement: 'top',
    control: <NSwitch />
};

const Template3 = (args) => <FormGroupConst {...args} >
    <CheckboxConst id="first" />
    <CheckboxConst id="second" checked={Boolean(checkedConst)} />
    <CheckboxConst id="third" disabled={Boolean(disabledConst)} />
</FormGroupConst>;
export const Group = Template3.bind({});
Group.args = {
    row: true,
};

const Template4 = (args) => <FormLabelConst {...args} />;
export const FormLabelCheckbox = Template.bind({});
FormLabelCheckbox.args = {
    component: 'label',
    color: "primary",
};