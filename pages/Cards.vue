<template>
  <v-container class="cards">
    <v-col>
      <h1>Cards</h1>
      <p class="body-1 mt-2">
        The <code>v-card</code> component is a versatile component that can be used for anything from a panel to a static image. 
        The card component has numerous helper components to make markup as easy as possible. 
      </p>
    </v-col>
    <InformationCard />
    <OutlinedCard />
    <MediaWithTextCard />
    <LoadingCard />
    <CardReveal />
    <CustomActionsCard />
  </v-container>
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
