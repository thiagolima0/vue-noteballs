<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef">
      <template #buttons>
        <button
          @click="addNotes"
          :disabled="!newNote.length"
          class="button is-link has-background-success"
        >
          Add new note
        </button>
      </template>
    </AddEditNote>
  </div>
  <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
</template>

<script setup>
import { ref } from "vue";
import Note from "../components/Notes/Note.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import AddEditNote from "../components/Notes/AddEditNote.vue";
import { useWatchCharacters } from "@/use/useWatchCharacters";

const storeNotes = useStoreNotes();

const newNote = ref("");
const addEditNoteRef = ref(null);

useWatchCharacters(newNote);

const addNotes = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextArea();
};
</script>
