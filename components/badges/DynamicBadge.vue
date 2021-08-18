<template>
    <div>
        <v-row class="ma-2">
            <v-btn
                class="mx-3"
                color="primary"
                @click="messages++"
            >
                Send Message
            </v-btn>

            <v-btn
                class="mx-3"
                color="error"
                @click="messages = 0"
            >
                Clear Notifications
            </v-btn>
    
            <v-badge
                class="mx-3"
                :content="messages"
                :value="messages"
                color="green"
                overlap
            >
                <v-icon large>
                    mdi-vuetify
                </v-icon>
            </v-badge>
        </v-row>
    </div>
</template>

<script>

export default {
  data() {
    return {
      messages: 0,
    };
  },
};

</script>
