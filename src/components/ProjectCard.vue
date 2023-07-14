<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="project.cover_image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cliente: {{ project.client_name }}</li>
      <li class="list-group-item">Categoria: {{ project.type.name }}</li>
      <li class="list-group-item">Data: {{ project.date }}</li>
    </ul>
  </div>
</template>

<style>
.card {
  margin: 1rem;
}
</style>
