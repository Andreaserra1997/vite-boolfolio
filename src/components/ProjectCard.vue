<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImageUrl(image) {
      return image
        ? this.baseUrl + "storage/" + image
        : this.baseUrl + "storage/default.jpg";
    },
  },
};
</script>

<template>
  <div class="card h-100">
    <img :src="getImageUrl(project.image)" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
    </div>
    <div class="card-body d-flex flex-column">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cliente: {{ project.client_name }}</li>
        <li class="list-group-item">Categoria: {{ project.type.name }}</li>
        <li class="list-group-item">Data: {{ project.date }}</li>
      </ul>
      <a href="#" class="btn btn-primary mt-auto">View</a>
    </div>
  </div>
</template>

<style>
.card {
  margin: 1rem;
  height: 100%;
}
</style>
