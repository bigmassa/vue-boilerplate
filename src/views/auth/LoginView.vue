<script lang="ts">
import { defineComponent } from "vue";
import { authService } from "@/services/auth";
import { prepareErrors } from "@/errorhandler";
import FooterItem from "@/components/FooterItem.vue";

export default defineComponent({
  components: {
    FooterItem,
  },
  data() {
    return {
      authService: authService,
    };
  },
  methods: {
    async submit(data: any) {
      try {
        await this.authService.login(data);
        this.$router.push("/");
      } catch (e) {
        const prepare = prepareErrors(e);
        this.$formkit.setErrors("appform", prepare.errors, prepare.fieldErrors);
      }
    },
  },
});
</script>

<template>
  <main class="container">
    <div class="grid">
      <div>
        <hgroup>
          <h1>Login</h1>
          <h2>Access your account.</h2>
        </hgroup>
        <FormKit id="appform" :actions="false" type="form" @submit="submit">
          <FormKit
            name="username"
            placeholder="email"
            type="email"
            validation="required|email"
          />
          <FormKit
            name="password"
            placeholder="password"
            type="password"
            validation="required"
          />
          <p class="text-right">
            <RouterLink to="/forgotten-password">
              Forgotten your password?
            </RouterLink>
          </p>
          <FormKit type="submit" label="Login" />
        </FormKit>
      </div>
      <div></div>
    </div>
  </main>
  <FooterItem class="container-fluid" />
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 2.5rem);
}
.text-right {
  text-align: right;
}
</style>
