<script lang="ts">
import { defineComponent } from "vue";
import { authService } from "@/services/auth";
import FooterItem from "@/components/FooterItem.vue";

export default defineComponent({
  components: {
    FooterItem,
  },
  data() {
    return {
      authService: authService,
      success: false,
    };
  },
  methods: {
    async submit(data: any) {
      try {
        await this.authService.forgotPassword(data.email);
        this.$formkit.reset("appform");
        this.success = true;
      } catch (e) {
        this.success = true;
      }
    },
  },
});
</script>

<template>
  <main class="container flex flex-col justify-center">
    <div class="grid">
      <div>
        <hgroup>
          <h1>Forgotten Your Password</h1>
          <h2>Request details to change your password.</h2>
        </hgroup>
        <FormKit id="appform" :actions="false" type="form" @submit="submit">
          <FormKit
            name="email"
            placeholder="your email address"
            type="email"
            validation="required|email"
          />
          <FormKit type="submit" label="Reset" />
        </FormKit>
        <p v-if="success">
          Assuming the email exists in our system. We will send details of what
          to do next.
        </p>
      </div>
      <div></div>
    </div>
  </main>
  <FooterItem class="container-fluid" />
</template>

<style scoped>
main {
  min-height: calc(100vh - 2.5rem);
}
</style>
