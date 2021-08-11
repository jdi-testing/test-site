<template>
  <div class="cards">
    <h1>Cards</h1>
    <InformationCard />
    <OutlinedCard />
    <MediaWithTextCard />
    <LoadingCard />
    <CardReveal />
    <CustomActionsCard />
  </div>
</template>

<script>
// @ is an alias to /src
import InformationCard from '@/components/cards/InformationCard.vue';
import MediaWithTextCard from '@/components/cards/MediaWithTextCard.vue';
import LoadingCard from '@/components/cards/LoadingCard.vue';
import CardReveal from '@/components/cards/CardReveal.vue';
import CustomActionsCard from '@/components/cards/CustomActionsCard.vue';
import OutlinedCard from '@/components/cards/OutlinedCard.vue';

export default {
  name: 'Cards',
  components: {
    InformationCard,
    OutlinedCard,
    MediaWithTextCard,
    LoadingCard,
    CardReveal,
    CustomActionsCard,
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
