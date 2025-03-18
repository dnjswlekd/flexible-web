<template>
  <section class="early-bird">
    <div class="early-bird-inner">
      <div class="early-bird-content">
        <div class="countdown-wrap">
          <div id="early-bird-countdown">{{ countdown }}</div>
          <span class="early-bird-info">{{ earlyBirdInfo }}</span>
        </div>
        <div class="early-bird-banner">
          <div class="banner-about">
            <h1>
              {{ title }}<span>{{ subtitle }}</span>
            </h1>
            <h2 class="hash-tag">{{ hashtags.join(' ') }}</h2>
          </div>
          <div class="banner-thumb">
            <img :src="imageSrc" alt="얼리버드 이벤트 배너" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const countdown = ref('00:00:00');
const earlyBirdInfo = ref('조기인원 마감 시 이벤트가 종료됩니다.');
const title = ref('얼리버드~ 왔어요');
const subtitle = ref('얼리버드 선착순 할인 이벤트, 신규강의 30% 할인');
const hashtags = ref(['#빅찬스', '#세일', '#30%']);
const imageSrc = ref('src/assets/images/banner-early-bird-01.png');

const calculateCountdown = () => {
  const eventDeadline = new Date().getTime() + 3600000; // 1시간 후 마감 예시
  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = eventDeadline - now;
    if (timeLeft <= 0) {
      countdown.value = '00:00:00';
      return;
    }
    const hours = String(
      Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
    ).padStart(2, '0');
    const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
      2,
      '0'
    );
    const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');
    countdown.value = `${hours}:${minutes}:${seconds}`;
  };
  setInterval(updateCountdown, 1000);
};

onMounted(() => {
  calculateCountdown();
});
</script>

<style lang="scss" scoped>
.early-bird {
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;

  .early-bird-inner {
    max-width: 800px;
    margin: 0 auto;
  }

  .countdown-wrap {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .early-bird-banner {
    display: flex;
    flex-direction: column;
    align-items: center;

    .banner-about {
      h1 {
        font-size: 2rem;
        margin-bottom: 10px;
        span {
          display: block;
          font-size: 1.2rem;
          color: #777;
        }
      }

      .hash-tag {
        font-size: 1rem;
        color: #ff5e00;
      }
    }

    .banner-thumb {
      margin-top: 10px;
      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
}
</style>
