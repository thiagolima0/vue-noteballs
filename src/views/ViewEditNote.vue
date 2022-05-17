<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      label="Edit note"
      placeholder="Edit note"
      bgColor="link"
      :noteId="$route.params.id"
    >
      <template #buttons>
        <button
          @click="gotoViewNotes"
          class="mx-2 button is-link has-background-danger"
        >
          Cancel
        </button>
        <button @click="editNote" class="button is-link has-background-link">
          Edit note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();
const route = useRoute();
const router = useRouter();


const props = defineProps({
  id: String,
});

const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

const gotoViewNotes = () => {
  router.push({ name: "notes" });
};

const editNote = () => {
  storeNotes.editNote(props.id, noteContent.value);
  gotoViewNotes();
};
</script>
