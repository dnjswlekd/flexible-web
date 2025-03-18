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

<style lang="scss" scoped>
.blog-item {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;

  .thum {
    width: 30%;
    img {
      width: 100%;
      border-radius: 8px;
    }
  }

  .desc {
    width: 70%;
    padding-left: 1rem;

    .blog-sort {
      font-size: 0.9rem;
      color: #007bff;
      margin-bottom: 0.5rem;
    }

    .blog-outline {
      h4 {
        font-size: 1.1rem;
        font-weight: bold;
        margin: 0.5rem 0;
      }

      p {
        font-size: 0.9rem;
        color: #666;
      }
    }

    .blog-writer {
      display: flex;
      margin-top: 1rem;

      .writer-avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }

      .writer-info {
        margin-left: 0.5rem;

        b {
          font-size: 1rem;
        }

        .date-comment {
          font-size: 0.8rem;
          color: #999;
        }
      }
    }
  }
}
</style>
