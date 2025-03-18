<template>
  <section class="tip-tech">
    <div class="tip-tech-inner">
      <div class="tip-tech-content">
        <div class="front-header">
          <h2>비욘드 인사이트 팁 & 테크</h2>
          <a href="#none">전체 보기</a>
        </div>
        <div class="tip-tech-wrap">
          <TipTechItem
            v-for="(item, index) in tipTechItems"
            :key="index"
            :item="item"
          />
        </div>
        <a href="#none" class="btn-tip-tech">Tip & Tech 기사 더 보기</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import TipTechItem from './TipTechItem.vue';

// 팁 & 테크 아이템 데이터를 배열로 관리
const tipTechItems = ref([
  {
    category: '필수 유틸리티',
    title: '파일 관리을 위한 필수 유틸리티! 멀티 윈도우 탐색기 Q-Dir',
    description:
      '일반적인 윈도우 사용자라면 굳이 멀티 윈도우 탐색기가 필요는 없습니다...',
    image: 'src/assets/images/tip-tech-cover-01.jpg',
  },
  {
    category: '작업 생산성',
    title: '비주얼 스튜디오 코드 캡쳐 익스텐션, CodeSnap',
    description:
      '비주얼 스튜디오 코드 익스텐션 중에서 코드캡쳐를 하는 CodeSnap을 소개합니다...',
    image: 'src/assets/images/tip-tech-cover-02.jpg',
  },
  {
    category: '지식공유자 인터뷰',
    title: '퍼블리셔 취업·이직을 위한 코딩웍스의 프론트엔드 강의',
    description:
      '퍼블리셔 취업을 위한 진짜 가이드 전자책(PDF)으로 효율적인 퍼블리싱 학습방법...',
    image: 'src/assets/images/tip-tech-cover-03.jpg',
  },
  {
    category: '프로그램 관련',
    title: '디자인의 약점을 보완해 줄 히든카드~ 미리캔버스',
    description: '퍼블리셔에게 디자인 일이 생기면 좀 부담스러운게 사실이죠...',
    image: 'src/assets/images/tip-tech-cover-04.jpg',
  },
  {
    category: '작업 생산성',
    title: '비주얼 스튜디오 코드에서 빈 줄 없애기',
    description:
      '비주얼 스튜디오 코드에서 [정규식 찾아 바꾸기]라는 방법으로 완벽하게 빈 줄을 해결할 수 있습니다...',
    image: 'src/assets/images/tip-tech-cover-05.jpg',
  },
  {
    category: 'IT 소식',
    title: '2022년 6월 15일 Internet Explorer 11 공식 종료',
    description:
      '마이크로소프트에서 2022년 6월 15일에 Explorer 11 지원 종료한다고 공식적으로 발표했습니다...',
    image: 'src/assets/images/tip-tech-cover-06.jpg',
  },
]);
</script>

<style lang="scss" scoped>
.tip-tech {
  .tip-tech-inner {
    padding: 2rem;
  }

  .tip-tech-content {
    .front-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;

      h2 {
        font-size: 2rem;
        font-weight: bold;
        color: #333;
      }

      a {
        font-size: 1rem;
        color: #007bff;
        text-decoration: none;
      }
    }

    .tip-tech-wrap {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .btn-tip-tech {
      display: block;
      margin-top: 2rem;
      font-size: 1rem;
      color: #007bff;
      text-decoration: none;
    }
  }
}
</style>
