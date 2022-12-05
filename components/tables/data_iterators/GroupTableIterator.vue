<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <p class="text-h6">
          Group by <code>calories</code>
        </p>
        <v-data-iterator
          :items="desserts"
          item-key="name"
          hide-default-footer
          group-by="calories"
        >
          <template v-slot:default="{ groupedItems }">
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="group in groupedItems"
                  :key="group.name"
                  cols="4"
                >
                  <v-card>
                    <v-card-title>{{ group.name }}</v-card-title>
                    <v-card-text>
                      <ul>
                        <li
                          v-for="item in group.items"
                          :key="item.name"
                        >
                          {{ item.name }}
                        </li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>
        </v-data-iterator>
      </v-col>
      <v-col cols="12">
        <p class="text-h6">
          Group by <code>iron</code>
        </p>
        <v-data-iterator
          :items="desserts"
          item-key="name"
          hide-default-footer
          group-by="iron"
        >
          <template v-slot:default="{ groupedItems }">
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="group in groupedItems"
                  :key="group.name"
                  cols="4"
                >
                  <v-card>
                    <v-card-title>{{ group.name }}</v-card-title>
                    <v-card-text>
                      <ul>
                        <li
                          v-for="item in group.items"
                          :key="item.name"
                        >
                          {{ item.name }}
                        </li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
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