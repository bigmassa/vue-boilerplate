<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import FooterItem from "@/components/FooterItem.vue";

export default defineComponent({
  components: {
    FooterItem,
    NavBar,
  },
});
</script>

<template>
  <NavBar />
  <header class="container">
    <hgroup>
      <h1>Homepage</h1>
      <h2>Basic home page layout</h2>
    </hgroup>
  </header>
  <main class="container">
    <article id="article">
      <h2>Article</h2>
      <p>
        Nullam dui arcu, malesuada et sodales eu, efficitur vitae dolor. Sed
        ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit
        sapien. Nulla iaculis eros a elit pharetra egestas. Nunc placerat
        facilisis cursus. Sed vestibulum metus eget dolor pharetra rutrum.
      </p>
      <footer>
        <small
          >Duis nec elit placerat, suscipit nibh quis, finibus neque.</small
        >
      </footer>
    </article>
  </main>
  <FooterItem />
</template>
