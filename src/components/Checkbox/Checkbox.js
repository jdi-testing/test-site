import React from 'react';
import BasicCheckboxes from "./BasicCheckboxes";
import CheckboxesGroup from "./CheckboxesGroup";
import CheckboxLabels from "./FormControl";
import FormControlLabelPosition from "./FormLabel";

export default function Checkboxes() {
    return (
        <div>
            <h1>Checkboxes</h1>
            <h2>Basic checkboxes</h2>
            <BasicCheckboxes id={"basicCheckboxes"} />
            <h2>Checkbox with FormControlLabel</h2>
            <CheckboxLabels id={"formControlCheckboxes"} />
            <h2>Checkboxes with FormGroup</h2>
            <CheckboxesGroup
                id={"checkboxGroup"} />
            <h2>Label placement</h2>
            <FormControlLabelPosition id={"labelPlacementCheckboxes"} />
        </div>
    );
};