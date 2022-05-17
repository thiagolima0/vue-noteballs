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
  </div>
</template>

<script setup>
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();

const numNotes = storeNotes.totalNotes;
const numCharacters = storeNotes.totalCharacters;
</script>
