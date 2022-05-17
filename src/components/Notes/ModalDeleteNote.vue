<template>
  <div v-if="modelValue" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you wanna delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="confirmModal">Delete</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside, onKeyDown } from "@vueuse/core";

onKeyDown("Escape", (e) => {
  closeModal();
  e.preventDefault();
});

defineProps({
  modelValue: Boolean,
});

const confirmModal = () => {
  emit("confirm");
};

const closeModal = () => {
  emit("update:modelValue", false);
};

const modalRef = ref(null);

onClickOutside(modalRef, () => closeModal);

const emit = defineEmits(["update:modelValue", "confirm"]);
</script>
