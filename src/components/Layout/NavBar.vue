<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 ml-2 is-family-monospace">
          <RouterLink class="has-text-white" to="/">Noteballs</RouterLink>
        </div>

        <a
          @click.prevent="showMenu = !showMenu"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMenu }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navItemsRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMenu }"
        ref="navMenuRef"
      >
        <div class="navbar-end">
          <RouterLink
            @click.prevent="showMenu = false"
            to="/"
            class="navbar-item"
            active-class="is-active"
          >
            Notes
          </RouterLink>

          <RouterLink
            @click.prevent="showMenu = false"
            to="/stats"
            class="navbar-item"
            active-class="is-active"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const showMenu = ref(false);
const navMenuRef = ref(null);
const navItemsRef = ref(null);

onClickOutside(navMenuRef, () => (showMenu.value = false), {
  ignore: [navItemsRef],
});
</script>

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    width: 100%;
    left: 0;
  }
}
</style>
