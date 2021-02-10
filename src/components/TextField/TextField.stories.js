import React from 'react';

import BuildTextField from './TextField';

export default {
    title: "Material Ui/Inputs/Text Field",
    component: BuildTextField,
}

export const Standard = (args) => <BuildTextField {...args}>BuildTextField</BuildTextField>;
Standard.args = {
                      id: "standard-basic",
                      label: "First",
                      type: "text",
                      required: "true",
                      autoFocus: "true"
                  };

export const FieldWithDefault = (args) => <BuildTextField {...args}>BuildTextField</BuildTextField>;
FieldWithDefault.args = {
                      id: "second-basic",
                      label: "Second with default",
                      defaultValue: "Default value"
                  };

export const Disabled = (args) => <BuildTextField {...args}>BuildTextField</BuildTextField>;
Disabled.args = {
                 id: "disabled-field",
                 label: "Disabled field",
                 disabled: "true"
                };

export const Filled = (args) => <BuildTextField {...args}>BuildTextField</BuildTextField>;
Filled.args = {
                 id: "filled-basic",
                 label: "Filled",
                 variant: "filled"
                };

export const Number = (args) => <BuildTextField {...args}>BuildTextField</BuildTextField>;
Number.args = {
                 id: "number",
                 type: "number",
                 label: "Number",
                 variant: "standard"
                };

export const Error = (args) => <BuildTextField {...args}>BuildTextField</BuildTextField>;
Error.args = {
                 id: "error",
                 label: "Error",
                 error: "true",
                 helperText: "Incorrect value",
                 variant: "filled"
                };

export const Outlined = (args) => <BuildTextField {...args}>BuildTextField</BuildTextField>;
Outlined.args = {
                 id: "outlined-basic",
                 label: "Outlined",
                 variant: "outlined"
                };

export const OutlinedWithHelperText = (args) => <BuildTextField {...args}>BuildTextField</BuildTextField>;
OutlinedWithHelperText.args = {
                 id: "outlined-basic-text",
                 label: "Outlined with Helper text",
                 helperText: "Please fill text in this field",
                 variant: "outlined"
                };

export const Time = (args) => <BuildTextField {...args}>BuildTextField</BuildTextField>;
Time.args = {
                 id: "time-field",
                 type: "time",
                 helperText: "Please fill time"
                };

export const Email = (args) => <BuildTextField {...args}>BuildTextField</BuildTextField>;
Email.args = {
                 id: "email",
                 type: "email",
                 helperText: "Email field"
                };