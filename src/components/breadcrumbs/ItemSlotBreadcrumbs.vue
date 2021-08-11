<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
        >
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>

export default {
  data: () => ({
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: '#dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: '#link1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: '#link2',
      },
    ],
  }),
};
</script>
