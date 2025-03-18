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

<style lang="scss" scoped>
.tip-tech-item {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;

  .tip-tech-info {
    width: 70%;
    padding-right: 1rem;

    .tip-tech-sort {
      font-size: 0.9rem;
      color: #007bff;
      margin-bottom: 0.5rem;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0.5rem 0;
    }

    p {
      font-size: 0.9rem;
      color: #666;
    }
  }

  .thum {
    width: 30%;
    img {
      width: 100%;
      border-radius: 8px;
    }
  }
}
</style>
