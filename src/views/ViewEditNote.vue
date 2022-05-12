<template>
  <div class="edit-note">
    <AddEditNote :isEditing="true" :noteId="$route.params.id" />
  </div>
</template>

<script setup>
import AddEditNote from "../components/Notes/AddEditNote.vue";
const props = defineProps({
  id: String,
});

</script>
