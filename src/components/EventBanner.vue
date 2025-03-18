<template>
  <div v-if="showBanner" class="front-event-banner">
    <div class="event-banner-item mentor-hiring">
      <a href="#none">
        <img
          src="@/assets/images/event-banner-mentor.png"
          alt="멘토 모집 이벤트 배너"
        />
      </a>
    </div>
    <div class="event-banner-item new-year">
      <a href="#none">
        <img
          src="@/assets/images/event-banner-new-year.png"
          alt="새해 이벤트 배너"
        />
      </a>
    </div>
    <div class="close-buttons">
      <a href="#none" @click.prevent="hideBanner">오늘 그만 보기</a>
      <a href="#none" @click.prevent="closeBanner">닫기</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showBanner = ref(true);

const hideBanner = () => {
  // '오늘 그만 보기' 클릭 시 배너 숨기기
  localStorage.setItem('hideBanner', 'true');
  showBanner.value = false;
};

const closeBanner = () => {
  // '닫기' 클릭 시 배너 숨기기
  showBanner.value = false;
};

// 로컬 스토리지에 저장된 값 확인하여 배너 표시 여부 결정
if (localStorage.getItem('hideBanner') === 'true') {
  showBanner.value = false;
}
</script>

<style lang="scss" scoped>
.front-event-banner {
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 8px;
  position: relative;
}

.event-banner-item {
  flex: 1;
  margin: 0 0.5rem;
  text-align: center;

  a {
    display: block;
    img {
      max-width: 100%;
      border-radius: 8px;
    }
  }
}

.close-buttons {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 0.5rem;

  a {
    font-size: 0.9rem;
    color: #007bff;
    text-decoration: none;
  }
}
</style>
