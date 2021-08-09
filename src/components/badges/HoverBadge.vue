<template>
    <div>
        <v-badge
            class="ma-3"
            :value="hover"
            color="deep-purple accent-4"
            content="9999+"
            transition="slide-x-transition"
        >
            <v-hover v-model="hover">
                <v-icon
                color="grey lighten-1"
                large
                >
                    mdi-account
                </v-icon>
            </v-hover>
        </v-badge>
    </div>
</template>

<script>

export default {
    data() {
        return {
            hover: false, 
        }
    }
}
</script>
