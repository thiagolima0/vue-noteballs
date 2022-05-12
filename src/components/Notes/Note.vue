<template>
  <div class="mb-4 has-background-white">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ charactersLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="emit('delete', note.id)" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["delete"]);

const charactersLength = computed(() => {
  const total = props.note.content.length;
  if (total > 1) {
    return `${total} characters`;
  }
  return `${total} character`;
});
</script>
