import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    shortenUrl: "",
  },
  mutations: {
    shortenUrl(state, url) {
      state.shortenUrl = url;
    },
  },
  actions: {
    shortenUrl(context, enteredUrl) {
      const url = new URL("https://t.ly/api/v1/link/shorten");

      const params = {
        api_token:
          "kiZt9HgcNh4Gp1PNrB9ZNliNrHdAARjgRX2AnfdVFT0QcDBIpXsWUb2xnSzz",
      };
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      let body = {
        long_url: enteredUrl,
        include_qr_code: false,
      };

      fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          context.commit("shortenUrl", data.short_url);
        });
    },
  },
});
