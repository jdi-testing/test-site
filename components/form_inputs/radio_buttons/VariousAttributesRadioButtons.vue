<template>
  <v-container fluid>
   <v-row align="center">
     <span class="mr-3">Success, Hint, Background-color, Readonly</span>
          <v-radio-group v-model="radioGroup"
             success
             hint="some hint"
             persistent-hint
             background-color="yellow"
             readonly>
            <v-radio
              v-for="n in 3"
              :key="n"
              :label="`Radio ${n}`"
              :value="n"

            ></v-radio>
          </v-radio-group>
   </v-row>
   <v-row align="center">
        <span class="mr-3">Error, Dense, </span>
             <v-radio-group v-model="radioGroup"
                error
                dense
                background-color="blue"
                >
               <v-radio
                 v-for="n in 3"
                 :key="n"
                 :label="`Radio ${n}`"
                 :value="n"

               ></v-radio>
             </v-radio-group>
      </v-row>
      <v-row align="center">
        <span class="mr-3">Disabled </span>
             <v-radio-group v-model="radioGroup"
                disabled
                >
               <v-radio
                 v-for="n in 2"
                 :key="n"
                 :label="`Radio ${n}`"
                 :value="n"

               ></v-radio>
             </v-radio-group>
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
