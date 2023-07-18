<script>
import axios from "axios";
import { store } from "../store";
import { DateTime } from "luxon";
import App404 from "./App404.vue";

export default {
  components: {
    App404,
  },
  data() {
    return {
      project: null,
      store,
      DateTime,
      is404: false,
    };
  },
  created() {
    axios
      .get(this.store.baseUrl + "api/projects/" + this.$route.params.slug)
      .then((response) => {
        if (response.data.success) {
          this.project = response.data.results;
        } else {
          // this.$router.push({ name: "page404" });
          this.is404 = true;
        }
      });
  },
};
</script>

<template>
  <App404 v-if="is404" />
  <template v-if="project">
    <h1>{{ project.name }}</h1>
    <h2>Data: {{ this.DateTime.now().toFormat("dd-MM-yyyy") }}</h2>
    <img :src="this.store.getImageUrl(project.image)" :alt="project.name" />
    <p>{{ project.summary }}</p>
  </template>
</template>

<style></style>
