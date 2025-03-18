<template>
  <div class="tip-tech-item">
    <div class="tip-tech-info">
      <span class="tip-tech-sort">{{ item.category }}</span>
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
    <div class="thum">
      <img :src="item.image" alt="Image" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
