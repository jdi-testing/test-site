<template>
  <v-container>
    <h2>Floating Button</h2>
    <v-btn
      id="fb-heart"
      class="mx-2"
      fab
      dark
      small
      color="pink"
      @click="click_fb_heart"
    >
      <v-icon dark>
        mdi-heart
      </v-icon>
    </v-btn>
    <v-btn
      id="fb-plus"
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="click_fb_plus"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-btn
      id="fb-pencil"
      class="mx-2"
      fab
      dark
      large
      color="cyan"
      @click="click_fb_pencil"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>
    <v-text-field id="fb-state" textarea v-model="state" readonly></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    state: '',
  }),

  methods: {
    click_fb_heart() {
      this.state = 'Floating button clicked: heart';
    },
    click_fb_plus() {
      this.state = 'Floating button clicked: plus';
    },
    click_fb_pencil() {
      this.state = 'Floating button clicked: pencil';
    },
  },
};
</script>
