<template>
  <v-container fluid>
   <v-row align="center">
     <span id="ClearableRating" class="mr-3">Clearable</span>
          <v-rating
                v-model="rating"
                color="red lighten-3"
                background-color="grey lighten-1"
                large
                clearable
              ></v-rating>
   </v-row>
   <v-row align="center">
     <span id="OpenCloseDelayRating" class="mr-3">Open-delay, close-delay</span>
          <v-rating
                color="orange"
                background-color="blue lighten-3"
                large
                hover
                open-delay="1000"
                close-delay="1000"
          ></v-rating>
   </v-row>
   <v-row align="center">
        <span id="RatingWithValue" class="mr-3">Value</span>
             <v-rating
                   length="7"
                   size="64"
                   value="5"
             ></v-rating>
      </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    rating: 2,
  }),
};
</script>
