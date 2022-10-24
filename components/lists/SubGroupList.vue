<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto"
          width="300"
        >
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>

              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-group
              :value="true"
              prepend-icon="mdi-account-circle"
            >
              <template v-slot:activator>
                <v-list-item-title>Users</v-list-item-title>
              </template>

              <v-list-group
                :value="true"
                no-action
                sub-group
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Admin</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="([title, icon], i) in admins"
                  :key="i"
                  link
                >
                  <v-list-item-title v-text="title"></v-list-item-title>

                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>

              <v-list-group
                no-action
                sub-group
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Actions</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="([title, icon], i) in cruds"
                  :key="i"
                  link
                >
                  <v-list-item-title v-text="title"></v-list-item-title>

                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
            </v-list-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col>
        <v-card
          class="mx-auto"
          width="300"
        >
          <v-list>
            <v-list-group>
              <template v-slot:activator>
                <v-list-item-title>Subgroup depth 1</v-list-item-title>
              </template>
              <v-list-item>
                <v-list-item-title>Item 1</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Item 2</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Item 3</v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col>
        <v-card
          class="mx-auto"
          width="300"
        >
          <v-list>
            <v-list-group>
              <template v-slot:activator>
                <v-list-item-title>Subgroup depth 2</v-list-item-title>
              </template>
              <v-list-group
                sub-group
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-title>Subgroup depth 1</v-list-item-title>
                </template>
                <v-list-item>
                  <v-list-item-title>Item 1</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Item 2</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Item 3</v-list-item-title>
                </v-list-item>
              </v-list-group>
            </v-list-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    admins: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    cruds: [
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
    ],
  }),
};
</script>
