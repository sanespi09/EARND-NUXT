<template>
  <main class="flex flex-col mx-auto">
    <div class="mt-20">
      <Dashboard :user="user" />
    </div>
    <Modal :show-modal="showModal" />
  </main>
</template>

<script>
import { remote } from "electron";
import Dashboard from "../components/Dashboard/Dashboard";
import Modal from "../Components/Modal/Modal";

export default {
  components: {
    Dashboard,
    Modal
  },
  data() {
    return {
      user: {
        name: "Vicio Betespin",
        email: "vicio@betespin.com",
        username: "viciespin07"
      }
    };
  },
  computed: {
    showModal() {
      return this.$store.state.ui.showModal;
    }
  }
};
</script>

<style></style>
