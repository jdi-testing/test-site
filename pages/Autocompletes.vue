<template>
  <v-container class="autocompletes">
    <v-col>
      <h1>Autocompletes</h1>
      <p class="body-1 mt-2">
        The <code>v-autocomplete</code> component can be used to fix any section to a specific aspect ratio
      </p>
    </v-col>
    <AutocompleteDense />
    <AutocompleteFilter />
    <AutocompleteSlots />
    <AutocompleteAPISearch />
    <AutocompleteAsyncItems />
  </v-container>
</template>

<script>
import AutocompleteDense from '@/components/form_inputs/autocompletes/AutocompleteDense.vue';
import AutocompleteFilter from '@/components/form_inputs/autocompletes/AutocompleteFilter.vue';
import AutocompleteSlots from '@/components/form_inputs/autocompletes/AutocompleteSlots.vue';
import AutocompleteAPISearch from '@/components/form_inputs/autocompletes/AutocompleteAPISearch.vue';
import AutocompleteAsyncItems from '@/components/form_inputs/autocompletes/AutocompleteAsyncItems.vue';

export default {
  name: 'Autocompletes',
  components: {
    AutocompleteDense,
    AutocompleteFilter,
    AutocompleteSlots,
    AutocompleteAPISearch,
    AutocompleteAsyncItems,
  },
};
</script>

<style>
h1 {
  text-align: center;
}

h2 {
  margin-bottom: 15px;
}
</style>
