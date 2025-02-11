<template>
  <header>
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png"
      alt=""
    />
    <div class="actions">
      <div v-if="!isLogged">
        <Button
          buttonText="Sign in"
          buttonBackground="#0000FF"
          colorText="#fff"
          borderColor="#0000FF"
          borderRadius="4px"
        />
        <Button
          buttonText="Sign up"
          buttonBackground="transparent"
          colorText="#000"
          borderColor="#000"
          borderRadius="4px"
        />
      </div>
      <div v-if="isLogged">
        <Button
          buttonText="Logout"
          buttonBackground="#0000FF"
          colorText="#fff"
          borderColor="#0000FF"
          borderRadius="4px"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import Button from "@/components/Button/Button.vue";
const props = defineProps({
    isLogged: Boolean
});

import { computed } from "vue";

const style = computed(() => ({
}));
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header img {
  width: 150px;
}

header .actions div {
  display: flex;
  gap: 8px;
}
</style>
