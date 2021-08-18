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
import AutocompleteDense from '@/components/autocompletes/AutocompleteDense.vue';
import AutocompleteFilter from '@/components/autocompletes/AutocompleteFilter.vue';
import AutocompleteSlots from '@/components/autocompletes/AutocompleteSlots.vue';
import AutocompleteAPISearch from '@/components/autocompletes/AutocompleteAPISearch.vue';
import AutocompleteAsyncItems from '@/components/autocompletes/AutocompleteAsyncItems.vue';

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
