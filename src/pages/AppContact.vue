<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      newsletter: true,
      showSuccess: false,
      isSending: false,
      hasError: false,
    };
  },
  methods: {
    sendLead() {
      this.isSending = true;
      axios
        .post(this.store.baseUrl + "api/leads", {
          name: this.name,
          email: this.email,
          message: this.message,
          newsletter: this.newsletter,
        })
        .then((response) => {
          this.isSending = false;

          if (response.data.success) {
            this.showSuccess = true;
            this.resetForm();
          } else {
            this.hasError = true;
          }
        });
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.newsletter = "";
    },
  },
};
</script>

<template>
  <h1>Contattaci</h1>

  <div
    v-if="showSuccess"
    class="alert alert-success alert-dismissible fade show"
    role="alert"
  >
    Messaggio inviato con successo
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>

  <div
    v-if="hasError"
    class="alert alert-success alert-dismissible fade show"
    role="alert"
  >
    Errore invio messaggio
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>

  <form @submit.prevent="sendLead" novalidate>
    <div class="mb-3">
      <label for="name" class="form-label">Nome</label>
      <input type="email" class="form-control" id="name" v-model="name" />
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Indirizzo e-mail</label>
      <input type="email" class="form-control" id="email" v-model="email" />
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">Messaggio</label>
      <textarea
        class="form-control"
        id="message"
        rows="5"
        v-model="message"
      ></textarea>
    </div>

    <div class="mb-3 form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="newsletter"
        v-model="newsletter"
      />
      <label class="form-check-label" for="newsletter"
        >Iscriviti alla newsletter</label
      >
    </div>

    <button type="submit" class="btn btn-primary" :disabled="isSending">
      Invia
    </button>
  </form>
</template>

<style></style>
