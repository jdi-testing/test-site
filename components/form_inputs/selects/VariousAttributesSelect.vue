<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        cols="12"
        sm="6"
      >
        <v-subheader v-text="'Multiple (Chips) with persistent hint'"></v-subheader>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="e6"
          :items="states"
          label="Select"
          dark
          background-color="green"
          multiple
          chips
          small-chips
          autofocus
          hide-selected
          reverse
          height="60"
          loading
          loader-height="10"
          error-count="2"
          :error-messages="['First', 'Second']"
          deletable-chips
          hint="What are the target regions"
          persistent-hint
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        Shaped, disabled lookup, messages, clearable, solo-inverted,
        open-on-clear
        <v-select
          v-model="e7"
          :items="states"
          label="Select"
          open-on-clear
          shaped
          disable-lookup
          clearable
          solo-inverted
          background-color="blue"
          hint="What are the target regions"
          persistent-hint
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        Rounded, solo-invertedm no-data-text, flat
        <v-select
          v-model="e8"
          label="Select"
          messages="some message"
          rounded
          flat
          solo-inverted
          no-data-text="No data is present"
          background-color="blue"
        ></v-select>
      </v-col>

      <v-col>
        <div>Full width with placeholder, prefix, suffix, prepended and appended icons, on blur validation</div>
        <v-row
          cols="12"
          sm="6"
        >
          <v-select
            v-model="e9"
            :rules="[(value) => value.length < 8 || 'some error']"
            validate-on-blur
            append-icon="mdi-message-text"
            append-outer-icon="mdi-email"
            prefix="Some prefix"
            prepend-inner-icon="mdi-wrench"
            placeholder="Some placeholder"
            persistent-placeholder
            :items="states"
            suffix="Some suffix"
            full-width
            clearable
            clear-icon="$cancel"
            background-color="orange"
            type="number"
            persistent-hint
          ></v-select>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      e6: [],
      e7: [],
      e8: [],
      e9: [],
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
      ],
    };
  },
};
</script>
