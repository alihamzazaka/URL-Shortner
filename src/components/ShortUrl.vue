<template>
  <div class="background">
    <h2 class="text-center mt-10 font">Paste Your URL to be Shortend</h2>
    <div>
      <v-text-field
        class="ml-15 mr-15 mt-7"
        v-model="url"
        placeholder="Enter your URL"
      ></v-text-field>
      <div class="text-center">
        <v-btn @click="urlSh" :loading="loading" color="success">
          Enter to shorten URL
        </v-btn>
      </div>
    </div>
    <div v-if="responseUrl" class="d-flex justify-center">
      <p class="mt-5">
        Shortend URL:
        <a :href="responseUrl" target="_blank">{{ responseUrl }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { store } from "@/store";
export default {
  name: "ShortUrl",

  data() {
    return {
      url: "",
      loading: false,
    };
  },
  methods: {
    urlSh() {
      if (this.url.includes("https://")) {
        this.loading = true;
        store.dispatch("shortUrl", this.url);
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      }
    },
  },
  watch: {
    responseUrl() {
      if (this.responseUrl && this.responseUrl.includes("https://")) {
        this.loading = false;
        this.copyURL(this.responseUrl);
      }
    },
  },
  computed: {
    responseUrl() {
      return store.state.shortUrl;
    },
  },
};
</script>

<style scoped>
.background {
  background-color: rgb(255, 254, 253);
  height: 200px;
}
.font {
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
}
.url-area {
  width: 75%;
  margin: 1.5rem auto;
}
.alert-box {
  width: 18rem;
  position: absolute;
  top: 1rem;
  right: 2rem;
}
</style>
