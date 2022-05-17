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
      <RouterLink
        @click="onEditNote"
        :to="{ name: 'edit-note', params: { id: note.id } }"
        class="card-footer-item"
        >Edit</RouterLink
      >
      <a @click.prevent="modals.deleteNote = true" class="card-footer-item"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote v-model="modals.deleteNote" @confirm="handleDeleteNote" />
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import ModalDeleteNote from "./ModalDeleteNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const charactersLength = computed(() => {
  const total = props.note.content.length;
  if (total > 1) {
    return `${total} characters`;
  }
  return `${total} character`;
});

const onEditNote = () => {
  storeNotes.setNote(props.note.content);
};

const handleDeleteNote = () => {
  storeNotes.deleteNote(props.note.id);
  modals.deleteNote = false;
};

const modals = reactive({
  deleteNote: false,
});
</script>
