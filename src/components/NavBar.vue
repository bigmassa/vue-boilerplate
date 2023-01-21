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
      <li>Vue Boilerplate</li>
    </ul>
    <ul>
      <li>
        <details role="list" dir="rtl">
          <summary aria-haspopup="listbox" role="link">Me</summary>
          <ul role="listbox">
            <li><RouterLink to="/profile">My Profile</RouterLink></li>
            <li><a @click="logout()">Sign Out</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </nav>
</template>
