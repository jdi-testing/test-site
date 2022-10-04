<template>
  <v-card>
    <v-app>
      <v-main class="pl-0">
        <v-app-bar absolute clipped-right dense flat>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer clipped permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
              </v-list-item-title>
              <v-list-item-subtitle>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-main>
    </v-app>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
  }
</script>