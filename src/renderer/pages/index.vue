<template>
  <main class="flex flex-col mx-auto">
    <div class="mt-20">
      <Dashboard :user="user" />
    </div>
  </main>
</template>

<script>
import { remote } from "electron";
import Dashboard from "../components/Dashboard/Dashboard";

export default {
  components: {
    Dashboard
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
  methods: {}
};
</script>

<style></style>
