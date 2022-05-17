import { watch } from "vue";

export function useWatchCharacters(item, maxChars = 100) {
  watch(item, (count) => {
    count.length >= maxChars &&
      alert(`you reached the limit of ${maxChars} characters`);
  });
}
