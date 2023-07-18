<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
import { store } from "../store";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      arrProjects: [],
      arrTechnologies: [],
      currentPage: 1,
      nPages: 0,
      store,
    };
  },
  methods: {
    toPrevPage() {
      this.currentPage != 1 ? this.currentPage-- : null;
    },
    toNextPage() {
      this.currentPage != this.nPages ? this.currentPage++ : null;
    },
    getProjects() {
      axios
        .get(this.store.baseUrl + "api/projects", {
          params: {
            page: this.currentPage,
            q: new URLSearchParams(window.location.search).get("q"),
          },
        })
        .then((response) => {
          this.arrProjects = response.data.results.data;
          this.nPages = response.data.results.last_page;
        });
    },
    getTechnologies() {
      axios.get(this.store.baseUrl + "api/technologies").then((response) => {
        this.arrTechnologies = response.data.results;
      });
    },
  },
  created() {
    this.getProjects();
    this.getTechnologies();
  },
  watch: {
    currentPage() {
      this.getProjects();
    },
  },
};
</script>

<template>
  <form>
    <h2>Filtra i Progetti</h2>

    <label for="technology">Tecnologie</label>
    <select class="form-select" id="technology">
      <option
        v-for="technology in arrTechnologies"
        :key="technology.id"
        :value="technology.id"
      >
        {{ technology.name }}
      </option>
    </select>
  </form>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
    <div class="col" v-for="project in arrProjects" :key="project.id">
      <ProjectCard :project="project" />
    </div>
  </div>

  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage == 1 }">
        <a class="page-link" href="#" @click="toPrevPage">Previous</a>
      </li>

      <li
        v-for="page in nPages"
        :key="page"
        class="page-item"
        :class="{ active: page == currentPage }"
      >
        <a class="page-link" href="#" @click="currentPage = page">
          {{ page }}
        </a>
      </li>

      <li class="page-item" :class="{ disabled: currentPage == nPages }">
        <a class="page-link" href="#" @click="toNextPage">Next</a>
      </li>
    </ul>
  </nav>
</template>

<style>
.container-card {
  display: flex;
  flex-wrap: wrap;
}
</style>
