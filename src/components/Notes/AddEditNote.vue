<template>
  <div class="card p-4 mb-5" :class="colorClass">
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          ref="newNoteRef"
          class="textarea"
          :placeholder="placeholder"
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type somenthing...",
  },
  label: {
    type: String,
  },
});

const newNoteRef = ref(null);

const focusTextArea = () => {
  newNoteRef.value.focus();
};

const colorClass = computed(() => {
  return `has-background-${props.bgColor}-dark`;
});

defineExpose({
  focusTextArea,
});
</script>
