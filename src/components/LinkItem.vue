<template>
  <div class="link-item">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="(link, index) in links" :key="index" v-html="link"></li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  links: Array,
});
</script>
