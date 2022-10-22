<script>
import { taskController } from "../services/apiTaskController.js";

export default {
  name: "HomeView",

  methods: {
    async listTasks() {
      const response = await taskController.list();

      if (response.data.status === 0) {
        console.log(response.data.msg);
      }

      if (response.data.status === 1) {
        console.log(response.data.data);
      }
    },
  },

  created() {
    this.listTasks();
  },
};
</script>

<template>This is the home view</template>

<style></style>
