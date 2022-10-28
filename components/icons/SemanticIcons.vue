<template>
    <v-row justify="space-around">
        <v-icon aria-hidden="false">
          mdi-account
        </v-icon>

        <v-icon aria-label="My Account" role="img" aria-hidden="false">
          mdiAccount
        </v-icon>
    </v-row>
</template>
<script>
    import { mdiAccount } from "@mdi/js";
        export default {
          data: () => ({
            icons: {
              mdiAccount
            }
          })
        };
</script>