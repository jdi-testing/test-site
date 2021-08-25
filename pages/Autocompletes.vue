<template>
  <div class="autocompletes">
    <h1>Autocompletes</h1>
    <AutocompleteDense />
    <AutocompleteFilter />
    <AutocompleteSlots />
    <AutocompleteAPISearch />
    <AutocompleteAsyncItems />
  </div>
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
