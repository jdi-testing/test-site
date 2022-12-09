<template>
    <v-container>
        <v-col>
            <h1>Forms</h1>
            <p class="body-1 mt-2">
                The internal <code>v-form</code> component makes it easy to add validation to form inputs. 
                All input components have a rules prop which accepts a mixed array of types function, 
                boolean and string. These allow you to specify conditions in which the input is valid or invalid. 
                Whenever the value of an input is changed, each function in the array will receive the new value and each array 
                element will be evaluated. If a function or array element returns false or a string, validation has 
                failed and the string value will be presented as an error message.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Rules form
            </p>
            <RulesForm id="RulesForm" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Validation with submit & clear form
            </p>
            <ValidationWithSubmitClearForm id="ValidationWithSubmitClearForm" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Vee-validate form
            </p>
            <VeeValidateForm id="VeeValidateForm" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Vuelidate form
            </p>
            <VuelidateForm id="VuelidateForm" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Disabled form
            </p>
            <DisabledForm id="DisabledForm" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Readonly form
            </p>
            <ReadonlyForm id="ReadonlyForm" />
        </v-col>
    </v-container>
</template>

<script>
import RulesForm from '@/components/form_inputs/forms/RulesForm.vue';
import ValidationWithSubmitClearForm from '@/components/form_inputs/forms/ValidationWithSubmitClearForm.vue';
import VeeValidateForm from '@/components/form_inputs/forms/VeeValidateForm.vue';
import VuelidateForm from '@/components/form_inputs/forms/VuelidateForm.vue';
import DisabledForm from '@/components/form_inputs/forms/DisabledForm.vue';
import ReadonlyForm from '@/components/form_inputs/forms/ReadonlyForm.vue';

export default {
  name: 'Forms',
  components: {
    RulesForm,
    ValidationWithSubmitClearForm,
    VeeValidateForm,
    VuelidateForm,
    DisabledForm,
    ReadonlyForm
  },
};
</script>
