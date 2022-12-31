<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <ShortUrl />
      <AboutUrl />
    </v-main>
  </v-app>
</template>

<script>
import ShortUrl from "./components/ShortUrl.vue";
import AboutUrl from "./components/AboutUrl.vue";
export default {
  name: "App",

  components: {
    ShortUrl,
    AboutUrl,
  },

  data: () => ({
    //
  }),
};
</script>
