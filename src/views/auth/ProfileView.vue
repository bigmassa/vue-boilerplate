<script lang="ts">
import { defineComponent } from "vue";
import { authService } from "@/services/auth";
import { prepareErrors } from "@/errorhandler";
import NavBar from "@/components/NavBar.vue";
import FooterItem from "@/components/FooterItem.vue";

export default defineComponent({
  components: {
    FooterItem,
    NavBar,
  },
  data() {
    return {
      authService: authService,
      data: {},
      success: false,
    };
  },
  async created() {
    await this.authService.me();
    const user = this.authService.state.user;
    this.data = {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    };
  },
  methods: {
    async submit(data: any) {
      this.success = false;
      try {
        await this.authService.update(data);
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
  <NavBar />
  <header class="container">
    <hgroup>
      <h1>Profile</h1>
      <h2>Keep your details upto date below</h2>
    </hgroup>
  </header>
  <main class="container">
    <section>
      <FormKit
        id="appform"
        v-model="data"
        :actions="false"
        type="form"
        @submit="submit"
      >
        <FormKit
          label="Email address"
          name="email"
          type="email"
          validation="required|email"
        />
        <FormKit
          label="First name"
          name="first_name"
          type="text"
          validation="required"
        />
        <FormKit
          label="Last name"
          name="last_name"
          type="text"
          validation="required"
        />
        <FormKit type="submit" label="Update" />
      </FormKit>
      <p v-if="success">Your profile was updated successfully.</p>
    </section>
  </main>
  <FooterItem />
</template>
