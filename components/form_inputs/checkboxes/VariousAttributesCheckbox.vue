<template>
  <v-container fluid>
   <v-row align="center">
    <v-col>
     <span id="SuccessReadonlyCheckbox" class="mr-3">Success, Readonly</span>
             <v-checkbox
               v-model="selected"
               label="John"
               value="John"
               success
               readonly
             ></v-checkbox>
             <v-checkbox
               v-model="selected"
               label="Jacob"
               value="Jacob"
               success
               readonly
             ></v-checkbox>
    </v-col>
   </v-row>
   <v-row align="center">
     <span id="ErrorDenseCheckboxWithHint" class="mr-3">Error, Hint, Back-ground color, Dense</span>
             <v-checkbox
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