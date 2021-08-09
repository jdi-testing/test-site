<template>
    <div>
        <v-row
            class="ma-2"
        >
            <div class="mx-3">
                <v-badge
                    v-if="locked"
                    bordered
                    color="error"
                    icon="mdi-lock"
                    overlap
                >
                    <v-btn
                        class="white--text"
                        color="error"
                        depressed
                        @click="locked= false"
                    >
                        Unlock Account
                    </v-btn>
                </v-badge>
                <v-badge
                    v-else
                    bordered
                    color="error"
                    icon="mdi-lock-open-variant"
                    overlap
                >
                    <v-btn
                        class="white--text"
                        color="error"
                        depressed
                        @click="locked = true"
                    >
                        Lock account
                    </v-btn>
                </v-badge>
            </div>
    
            <div class="mx-3">
                <v-badge
                    bordered
                    bottom
                    color="deep-purple accent-4"
                    dot
                    offset-x="10"
                    offset-y="10"
                >
                    <v-avatar size="40">
                        <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                    </v-avatar>
                </v-badge>
            </div>

            <div class="mx-3">
                <v-badge
                    avatar
                    bordered
                    overlap
                >
                    <template v-slot:badge>
                        <v-avatar>
                            <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png"></v-img>
                        </v-avatar>
                    </template>
                    <v-avatar size="40">
                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                    </v-avatar>
                </v-badge>
            </div>
        </v-row>
    </div>
</template>

<script>

export default {
  data() {
    return {
      locked: true,
    };
  },
};
</script>
