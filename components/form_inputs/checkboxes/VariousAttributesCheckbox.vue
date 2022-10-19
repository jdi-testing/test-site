<template>
  <v-container fluid>
   <v-row align="center">
     <span class="mr-3">Success, Readonly</span>
         <p>{{ selected }}</p>
             <v-checkbox
               id="SuccessReadonlyCheckbox"
               v-model="selected"
               label="John"
               value="John"
               success
             ></v-checkbox>
             <v-checkbox
               id="SuccessReadonlyCheckbox"
               v-model="selected"
               label="Jacob"
               value="Jacob"
               success
             ></v-checkbox>
   </v-row>
   <v-row align="center">
        <span class="mr-3">Error, Hint, Back-ground color, Dense</span>
             <p>{{ selected }}</p>
                 <v-checkbox
                   id="ErrorDenseCheckboxWithHint"
                   v-model="selected"
                   label="John"
                   value="John"
                   error
                   hint="some hint"
                   persistent-hint
                   background-color="light-blue"
                   dense
                 ></v-checkbox>
                 <v-checkbox
                   id="ErrorDenseCheckboxWithHint"
                   v-model="selected"
                   label="Jacob"
                   value="Jacob"
                   error
                   hint="another some hint"
                   persistent-hint
                   background-color="orange"
                   dense
                 ></v-checkbox>
      </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      column: null,
      row: null,
    }
  },
};
</script>