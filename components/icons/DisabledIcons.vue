<template>
    <v-row justify="space-around">
        <v-icon
          large
          color="green darken-2"
          disabled
        >
          mdi-domain
        </v-icon>

        <v-icon aria-label="My Account" role="img""
        disabled>
          mdiAccount
        </v-icon>

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
    </v-row>
</template>