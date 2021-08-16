<template>
    <v-container>
        <v-col>
            <h1>Forms</h1>
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

    </v-container>
</template>

<script>
import RulesForm from '@/components/forms/RulesForm.vue';
import ValidationWithSubmitClearForm from '@/components/forms/ValidationWithSubmitClearForm.vue';
import VeeValidateForm from '@/components/forms/VeeValidateForm.vue';
import VuelidateForm from '@/components/forms/VuelidateForm.vue';

export default {
  name: 'Forms',
  components: {
    RulesForm,
    ValidationWithSubmitClearForm,
    VeeValidateForm,
    VuelidateForm,
  },
};
</script>
