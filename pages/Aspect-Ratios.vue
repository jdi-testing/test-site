<template>
    <v-container>
        <v-col>
            <h1>Aspect ratios</h1>
            <p class="body-1 mt-2">
                The <code>v-responsive</code> component can be used to fix any section to a specific aspect ratio
            </p>
        </v-col>
        <v-card class="mx-5">
            <v-responsive :aspect-ratio="16/9">
                <v-card-text>
                    This card will always be 16:9 (unless you put more stuff in it)
                </v-card-text>
            </v-responsive>
        </v-card>
    </v-container>
</template>
