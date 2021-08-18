<template>
    <div>
        <v-card
            color="grey lighten-4"
            flat
            height="110px"
            tile
        >
            <v-system-bar id="system-bar-absolute-position" absolute>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>System bar title</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-system-bar>
                Card text line 1<br/>
                Card text line 2<br/>
                Card text line 3<br/>
        </v-card>
    </div>
</template>
