<script lang="ts">
import { defineComponent } from "vue";
import { authService } from "@/services/auth";

export default defineComponent({
  data() {
    return {
      authService: authService,
    };
  },
  methods: {
    async logout() {
      await this.authService.logout();
    },
  },
});
</script>

<template>
  <nav class="container-fluid">
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
    </ul>
    <ul>
      <li><RouterLink class="ml-auto" to="/profile">Profile</RouterLink></li>
      <li><a class="ml-4" @click="logout()">Logout</a></li>
    </ul>
  </nav>
</template>
