<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p class="text-h6">
          Enabled pagination controls
        </p>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          item-key="name"
          class="elevation-1"
          :footer-props="{
            showFirstLastPage: true,
            firstIcon: 'mdi-arrow-collapse-left',
            lastIcon: 'mdi-arrow-collapse-right',
            prevIcon: 'mdi-minus',
            nextIcon: 'mdi-plus',
            showCurrentPage: true
          }"
        ></v-data-table>
      </v-col>

      <v-col cols="12">
        <p class="text-h6">
          Disabled pagination controls
        </p>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          item-key="name"
          class="elevation-1"
          :footer-props="{
            showFirstLastPage: true,
            firstIcon: 'mdi-arrow-collapse-left',
            lastIcon: 'mdi-arrow-collapse-right',
            prevIcon: 'mdi-minus',
            nextIcon: 'mdi-plus',
            showCurrentPage: true,
            disableItemsPerPage: true,
            disablePagination: true,
          }"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container> 
</template>
<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            value: 'name',
          },
          { text: 'Category', value: 'category' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            category: 'Ice cream',
          },
          {
            name: 'Ice cream sandwich',
            category: 'Ice cream',
          },
          {
            name: 'Eclair',
            category: 'Cookie',
          },
          {
            name: 'Cupcake',
            category: 'Pastry',
          },
          {
            name: 'Gingerbread',
            category: 'Cookie',
          },
          {
            name: 'Jelly bean',
            category: 'Candy',
          },
          {
            name: 'Lollipop',
            category: 'Candy',
          },
          {
            name: 'Honeycomb',
            category: 'Toffee',
          },
          {
            name: 'Donut',
            category: 'Pastry',
          },
          {
            name: 'KitKat',
            category: 'Candy',
          },
        ],
      }
    },
  }
</script>