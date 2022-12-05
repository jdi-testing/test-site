<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <p class="text-h6">
          Multiple selection
        </p>
        <v-data-iterator
          v-model="selected.multiple"
          :items="desserts"
          :items-per-page="4"
          item-key="name"
          hide-default-footer
        >
          <template v-slot:default="{ items, isSelected, select }">
            <v-checkbox
              v-for="item in items"
              :key="item.name"
              :label="item.name"
              :value="isSelected(item)"
              @change="(value) => select(item, value)"
            ></v-checkbox>
          </template>
        </v-data-iterator>
      </v-col>
      <v-col cols="6">
        <p class="text-h6">
          Single selection
        </p>
        <v-data-iterator
          v-model="selected.single"
          :items="desserts"
          :items-per-page="4"
          item-key="name"
          hide-default-footer
          single-select
        >
          <template v-slot:default="{ items, isSelected, select }">
            <v-checkbox
              v-for="item in items"
              :key="item.name"
              :label="item.name"
              :value="isSelected(item)"
              @change="(value) => select(item, value)"
            ></v-checkbox>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      selected: {
        multiple: [],
        single: []
      },
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%',
        },
      ],
    }),
  }
</script>