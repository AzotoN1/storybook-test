<template>
    <button :style="style" @click="buttonEvent" :disabled>
        {{ buttonText }}
    </button>
</template>

<script setup>
const props = defineProps({
    buttonText: String,
    buttonBackground: String,
    colorText: String,
    borderColor: String,
    borderRadius: {
        type: String,
        validator: function(value) {
            return ['2px', '4px', '8px', '16px'].indexOf(value) !== 0;
        }
    },
    disabled: Boolean
});

import { computed } from 'vue';

const style = computed(() => ({
    backgroundColor: props.buttonBackground,
    color: props.colorText,
    borderColor: props.borderColor,
    borderRadius: props.borderRadius
}));

</script>

<style scoped>

button {
    padding: 10px 20px;
    border: 1px solid transparent;
    border-radius: 2px;
    cursor: pointer;
    color: white;
}

button:disabled {
    cursor: not-allowed;
    background: #3b3b3b !important;
    color: white !important;
}
</style>