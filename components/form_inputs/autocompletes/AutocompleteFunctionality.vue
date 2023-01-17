<template>
  <v-container id="functionality">
    <h2>Functionality</h2>
    <v-card>
      <v-container>
        <v-row align="center">
          <v-col cols="40">
            <v-autocomplete
                    disabled
                    dense
                    v-model="values"
                    :items="items"
                    label="Disabled"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
                    clearable
                    open-on-clear
                    v-model="values"
                    :items="items"
                    dense
                    label="Clearable, open on clear"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
                    auto-select-first
                    v-model="values"
                    :items="items"
                    label="Autoselect first"
                    dense
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ['foo', 'bar', 'fizz', 'buzz'],
    values: ['foo', 'bar'],
    value: null,
  }),
};
</script>
