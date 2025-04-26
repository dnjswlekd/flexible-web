<template>
  <section class="early-bird">
    <div class="early-bird-inner">
      <div class="early-bird-content">
        <div class="countdown-wrap">
          <div id="early-bird-countdown">
            <b>종료까지</b> {{ countdown.days }}일 <em>{{ countdown.hours }}</em
            >:<em>{{ countdown.minutes }}</em
            >:<em>{{ countdown.seconds }}</em>
            남음
          </div>
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
import { ref, onMounted, onUnmounted } from 'vue';

// 이미지 import
import earlyBirdBanner from '@/assets/images/banner-early-bird-01.png';

const countdown = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
});
const earlyBirdInfo = ref('조기인원 마감 시 이벤트가 종료됩니다.');
const title = ref('얼리버드~ 왔어요');
const subtitle = ref('얼리버드 선착순 할인 이벤트, 신규강의 30% 할인');
const hashtags = ref(['#빅찬스', '#세일', '#30%']);

// 여기 수정! 문자열X, import한 이미지로 세팅
const imageSrc = ref(earlyBirdBanner);

let countdownInterval;

const calculateCountdown = () => {
  const eventDeadline = new Date('2027-11-01T00:00:00').getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = eventDeadline - now;

    if (timeLeft <= 0) {
      countdown.value = {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
      clearInterval(countdownInterval);
      return;
    }

    countdown.value = {
      days: String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(
        2,
        '0'
      ),
      hours: String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(
        2,
        '0'
      ),
      minutes: String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
        2,
        '0'
      ),
      seconds: String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0'),
    };
  };

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
};

onMounted(() => {
  calculateCountdown();
});

onUnmounted(() => {
  clearInterval(countdownInterval);
});
</script>

<style lang="scss" scoped></style>
