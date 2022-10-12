<template>
    <div>
      <v-breadcrumbs
        dark
        :items="items"
        v-ripple
        divider="/"
      >
      </v-breadcrumbs>
    </div>
</template>

<style lang="scss">
  #darkThemeRippleBreadcrumbs {
    background-color: black;
  }
</style>

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
