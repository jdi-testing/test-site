<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="title"
            :rules="[rules.required, rules.counter]"
            label="Title"
            counter
            maxlength="20"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
            :validate-on-blur="false"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="emailOnBlur"
            :rules="[rules.required, rules.email]"
            label="E-mail validate only on blur"
            :validate-on-blur="true"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      title: 'Preliminary report',
      email: '',
      emailOnBlur: '',
      rules: {
        required: (value) => !!value || 'Required.',
        counter: (value) => value.length <= 20 || 'Max 20 characters',
        email: (value) => {
          /* eslint-disable max-len */
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
      },
    };
  },
};
</script>
