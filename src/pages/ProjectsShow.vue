<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(this.store.baseUrl + "api/projects/" + this.$route.params.slug);
  },
};
</script>

<template>
  <h2>Sono la show</h2>
</template>

<style></style>
