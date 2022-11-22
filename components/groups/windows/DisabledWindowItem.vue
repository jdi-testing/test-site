<template>
  <v-card
    flat
    tile
  >
    <v-window
      show-arrows
    >
      <v-window-item
      >
        <v-card
          color="grey"
          height="200"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <h1
              style="font-size: 5rem;"
              class="white--text"
            >
              Slide 1
            </h1>
          </v-row>
        </v-card>
      </v-window-item>
      <v-window-item
        disabled
            >
              <v-card
                color="green"
                height="200"
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <h1
                    style="font-size: 5rem;"
                    class="black--text"
                  >
                    Disabled
                  </h1>
                </v-row>
              </v-card>
            </v-window-item>
            <v-window-item
                  >
                    <v-card
                      color="blue"
                      height="200"
                    >
                      <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                      >
                        <h1
                          style="font-size: 5rem;"
                          class="red--text"
                        >
                          Slide 3
                        </h1>
                      </v-row>
                    </v-card>
                  </v-window-item>
    </v-window>
  </v-card>
</template>


