<template>
  <v-container id="style">
    <h2>Style</h2>
    <h3>Basic</h3>
    <v-card>
      <v-container>
        <v-row align="center">
          <v-col cols="40">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    label="Basic"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    filled
                    label="Filled"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    label="Solo"
                    solo
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    label="Solo-inverted"
                    solo-inverted
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <h3>Dense</h3>
    <v-card>
      <v-container>
        <v-row
                align="center"
        >
          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    label="Shaped outlined"
                    dense
            ></v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    label="Shaped outlined"
                    dense
                    shaped
                    outlined
            ></v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    dense
                    rounded
                    filled
                    label="Filled rounded"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    dense
                    filled
                    outlined
                    label="Filled outlined"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    label="Solo rounded"
                    dense
                    rounded
                    solo
            ></v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    label="Solo-inverted outlined"
                    dense
                    outlined
                    solo-inverted
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <h3>Dark</h3>
    <v-card dark>
      <v-container>
        <v-row
                align="center"
        >
          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    label="Shaped outlined"
                    dense
                    shaped
                    outlined
            ></v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    dense
                    rounded
                    filled
                    label="Filled rounded"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    dense
                    filled
                    outlined
                    label="Filled outlined"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    label="Solo rounded"
                    dense
                    rounded
                    solo
            ></v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-autocomplete
                    v-model="values"
                    :items="items"
                    label="Solo-inverted outlined"
                    dense
                    outlined
                    solo-inverted
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
