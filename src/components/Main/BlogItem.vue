<template>
  <div class="blog-item">
    <div class="thum">
      <img :src="item.image" :alt="item.title" />
    </div>
    <div class="desc">
      <span class="blog-sort">{{ item.category }}</span>
      <div class="blog-outline">
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </div>
      <div class="blog-writer">
        <div class="writer-avatar">
          <img :src="item.avatar" alt="Author Avatar" />
        </div>
        <div class="writer-info">
          <b>{{ item.author }}</b>
          <div class="date-comment">
            <span><i class="bi bi-calendar"></i> {{ item.date }}</span>
            <span><i class="bi bi-chat"></i> {{ item.comments }} comments</span>
          </div>
        </div>
      </div>
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
