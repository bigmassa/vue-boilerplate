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
      success: false,
    };
  },
  methods: {
    async submit(data: any) {
      const copied = {
        password: data.password as string,
        token: this.$route.params.token as string,
      };
      try {
        await this.authService.resetPassword(copied);
        this.$formkit.reset("appform");
        this.success = true;
      } catch (e) {
        const prepare = prepareErrors(e);
        this.$formkit.setErrors("appform", prepare.errors, prepare.fieldErrors);
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
          <h1>Change Your Password</h1>
          <h2>Set a new password below.</h2>
        </hgroup>
        <FormKit id="appform" :actions="false" type="form" @submit="submit">
          <FormKit
            name="password"
            placeholder="new password"
            type="password"
            validation="required|length:6"
          />
          <FormKit
            name="confirm"
            placeholder="repeat your password"
            type="password"
            validation="required|confirm"
          />
          <FormKit type="submit" label="Reset" />
        </FormKit>
        <p v-if="success">
          Your password has been reset. You can now
          <RouterLink to="/login">Login</RouterLink>
          using your new password.
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
