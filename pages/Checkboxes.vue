<template>
    <v-container>
        <v-col>
            <h1>Checkboxes</h1>
            <p class="body-1 mt-2">
             The <code>v-checkbox</code> component provides users the ability to choose between two distinct values. 
             These are very similar to a switch and can be used in complex forms and checklists. A simpler version, 
             <code>v-simple-checkbox</code> is used primarily as a lightweight alternative in data-table components 
             to select rows or display inline boolean data.
            </p>
        </v-col>
        <v-col>
            <p class="text-h5">
                Colors
            </p>
            <ColorsCheckboxes id="ColorsCheckboxes" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Model as array
            </p>
            <ModelArrayCheckboxes id="ModelArrayCheckboxes" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Model as boolean
            </p>
            <ModelBooleanCheckboxes id="ModelBooleanCheckboxes" />
        </v-col>
        <v-col>
            <p class="text-h5">
                States
            </p>
            <StatesCheckboxes id="StatesCheckboxes" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Label slot
            </p>
            <LabelSlotCheckboxes id="LabelSlotCheckboxes" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Inline text-field
            </p>
            <InlineTextFieldCheckboxes id="InlineTextFieldCheckboxes" />
        </v-col>
        <v-col>
            <p class="text-h5">
                Various Attributes Checkbox
            </p>
            <VariousAttributesCheckbox id="VariousAttributesCheckbox" />
        </v-col>

    </v-container>
</template>
<script>
import ColorsCheckboxes from '@/components/form_inputs/checkboxes/ColorsCheckboxes.vue';
import ModelArrayCheckboxes from '@/components/form_inputs/checkboxes/ModelArrayCheckboxes.vue';
import ModelBooleanCheckboxes from '@/components/form_inputs/checkboxes/ModelBooleanCheckboxes.vue';
import StatesCheckboxes from '@/components/form_inputs/checkboxes/StatesCheckboxes.vue';
import LabelSlotCheckboxes from '@/components/form_inputs/checkboxes/LabelSlotCheckboxes.vue';
import InlineTextFieldCheckboxes from '@/components/form_inputs/checkboxes/InlineTextFieldCheckboxes.vue';
import VariousAttributesCheckbox from '@/components/form_inputs/checkboxes/VariousAttributesCheckbox.vue';

export default {
  name: 'Checkboxes',
  components: {
    ColorsCheckboxes,
    ModelArrayCheckboxes,
    ModelBooleanCheckboxes,
    StatesCheckboxes,
    LabelSlotCheckboxes,
    InlineTextFieldCheckboxes,
    VariousAttributesCheckbox,
  },
};
</script>
