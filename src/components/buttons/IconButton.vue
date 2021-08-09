<template>
  <v-container>  
    <h2>Icon Buttons</h2>

    <v-btn
      icon
      color="pink"
      @click="click_heart"
    >
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn
      icon
      color="indigo"
      @click="click_start"
    >
      <v-icon>mdi-star</v-icon>
    </v-btn>

    <v-btn
      icon
      color="green"
      @click="click_cached"
    >
      <v-icon>mdi-cached</v-icon>
    </v-btn>
    
    <v-btn
      icon
      color="deep-orange"
      @click="click_thumb_up"
    >
      <v-icon>mdi-thumb-up</v-icon>
    </v-btn>
    
    <v-btn
      icon
      disabled
    >
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    
    <v-btn
      icon
      disabled
    >
      <v-icon>mdi-star</v-icon>
    </v-btn>
    
    <v-btn
      icon
      disabled
    >
      <v-icon>mdi-cached</v-icon>
    </v-btn>
    
    <v-btn
      icon
      disabled
    >
      <v-icon>mdi-thumb-up</v-icon>
    </v-btn>

    <v-text-field id="icon-buttons-state" textarea v-model="state" readonly></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    state: '',
  }),

  methods: {
    click_heart() {
      this.state = 'Icon button clicked: heart';
    },
    click_start() {
      this.state = 'Icon button clicked: star';
    },
    click_thumb_up() {
      this.state = 'Icon button clicked: thumb up';
    },
    click_cached() {
      this.state = 'Icon button clicked: cached';
    },
  },
};
</script>
