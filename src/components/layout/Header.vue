<template>
  <v-layout wrap>
    <v-toolbar dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Company title</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/women/90.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Beng Sheng Lui</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile v-for="item in items" :key="item.title" @click="navigateRoute(item.route)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard', route: '/' },
          { title: 'About', icon: 'question_answer', route: '/about' }
        ],
        mini: false,
      }
    },
    methods: {
      navigateRoute(route) {
        this.$router.push(route);
      }
    },
  }
</script>
