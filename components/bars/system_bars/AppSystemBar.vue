<template>
    <div>
        <v-card
            color="grey lighten-4"
            flat
            tile
        >
            <v-system-bar id="system-bar-app" height="30" color="green" app>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>App system bar title</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-system-bar>
                App system bar is located on the top of the page
        </v-card>
    </div>
</template>
