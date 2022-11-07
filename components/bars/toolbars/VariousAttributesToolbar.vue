  <template>
    <div id="app">

        <v-card flat height=250>
          <v-container fluid>
            <v-row class="child-flex">
              <div>
                <v-toolbar rounded flat outlined short>

                  <v-btn
                    icon
                    class="hidden-xs-only"
                  >
                    <v-icon>mdi-arrow-left</v-icon>
                  </v-btn>

                  <v-toolbar-title>Rounded&Outlined&Short</v-toolbar-title>

                  <v-spacer></v-spacer>

                  <v-btn
                    icon
                    class="hidden-xs-only"
                  >
                    <v-icon>mdi-magnify</v-icon>
                  </v-btn>
                </v-toolbar>
              </div>

              <div>
                <v-toolbar dark shaped elevation="10" absolute>
                  <v-spacer></v-spacer>
                  <v-toolbar-title>Shaped&Elevation&Absolute</v-toolbar-title>
                  <v-btn icon>
                    <v-icon>mdi-reply</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-toolbar>
              </div>
            </v-row>
          </v-container>
        </v-card>

    </div>
  </template>
