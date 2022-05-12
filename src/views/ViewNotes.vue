<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            ref="newNoteRef"
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNotes"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>

    </div>
      <Note v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "../components/Notes/Note.vue";

const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates incidunt totam facere! Alias cupiditate reiciendis doloremque! Dolor neque unde labore magni commodi magnam, fuga blanditiis tempora maiores provident omnis?",
  },
  {
    id: 2,
    content: "Facere! Alias cupiditate reiciendis doloremque!",
  },
]);

const addNotes = () => {
  const currentDate = new Date().getTime();

  const note = {
    id: String(currentDate),
    content: newNote.value,
  };

  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};
</script>
