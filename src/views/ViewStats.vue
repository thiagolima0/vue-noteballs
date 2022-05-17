<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stats</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ numNotes }}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td>{{ numCharacters }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="text"
      type="text"
      v-autofocus
      placeholder="do you love noteballs?"
      class="input"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";

const storeNotes = useStoreNotes();
const text = ref("");

useWatchCharacters(text, 10);

const numNotes = storeNotes.totalNotes;
const numCharacters = storeNotes.totalCharacters;
</script>
