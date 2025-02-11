<script setup>
import Button from '@/components/Button/Button.vue'

let buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
}
</script>

<template>
  <main>
    <Button :button-text="'Buy now'" :button-style="buttonStyle"></Button>
  </main>
</template>
