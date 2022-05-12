import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: '1',
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates incidunt totam facere! Alias cupiditate reiciendis doloremque! Dolor neque unde labore magni commodi magnam, fuga blanditiis tempora maiores provident omnis?",
        },
        {
          id: '2',
          content: "Facere! Alias cupiditate reiciendis doloremque!",
        },
      ],
    };
  },
  actions: {
    addNote(contentNote) {
      const currentDate = new Date().getTime();

      const note = {
        id: String(currentDate),
        content: contentNote,
      };

      this.notes.unshift(note);
    },
    deleteNote(idNote) {
      this.notes = this.notes.filter((note) => note.id !== idNote);
    },
    editNote(idNote, contentNote) {
      const noteToEdit = this.notes.findIndex((note) => note.id === idNote);
      this.notes[noteToEdit].content = contentNote;
    },
  },
});
