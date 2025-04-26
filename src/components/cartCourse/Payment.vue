<template>
  <div class="payment">
    <div class="price-total-wrap">
      <h2 class="payment-headline">결제 금액</h2>
      <div class="current-price">
        <b>총 결제 금액</b>
        <span
          ><em>{{ totalPrice }}</em
          >원</span
        >
      </div>
      <div class="origin-price">
        <b>상품금액</b>
        <span>{{ originalPrice }}원</span>
      </div>
      <div class="discount-amount">
        <b>총 할인 금액</b>
        <span
          ><em>-{{ discountAmount }}</em
          >원</span
        >
      </div>
    </div>

    <div class="mobile-confirm-wrap">
      <h2 class="payment-headline">휴대폰 번호 입력</h2>
      <div>
        <input type="tel" placeholder="휴대폰 번호(- 없이 숫자로 입력)" />
        <button class="btn-request">인증요청</button>
      </div>
    </div>

    <div class="payment-method-wrap">
      <h2 class="payment-headline">결제 수단</h2>
      <div v-for="(method, index) in paymentMethods" :key="index">
        <label>
          <input
            type="radio"
            name="payment-method"
            :value="method.id"
            v-model="selectedMethod"
          />
          <em></em>{{ method.label }}
          <b v-if="method.freeInterest" class="free-interest">{{
            method.freeInterest
          }}</b>
          <img v-if="method.imgSrc" :src="method.imgSrc" :alt="method.imgAlt" />
        </label>
      </div>
    </div>

    <button class="btn-payment-final">결제하기</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  totalPrice: Number,
  originalPrice: Number,
  discountAmount: Number,
});

// 결제 수단을 추적할 변수
const selectedMethod = ref(null); // 라디오 버튼의 선택된 값을 추적하는 변수

const paymentMethods = [
  {
    id: 'card',
    label: '카드 전자결제',
    freeInterest: '무이자 할부 지원',
    imgSrc: '',
    imgAlt: '',
  },
  {
    id: 'mobile',
    label: '휴대폰 결제',
    freeInterest: '',
    imgSrc: '',
    imgAlt: '',
  },
  { id: 'bank', label: '계좌이체', freeInterest: '', imgSrc: '', imgAlt: '' },
  {
    id: 'naver',
    label: '네이버페이',
    freeInterest: '',
    imgSrc: 'src/assets/images/ct-payment-naver.png',
    imgAlt: '네이버페이',
  },
  {
    id: 'kakao',
    label: '카카오페이',
    freeInterest: '',
    imgSrc: 'src/assets/images/ct-payment-kakao.png',
    imgAlt: '카카오페이',
  },
  {
    id: 'toss',
    label: '토스페이',
    freeInterest: '',
    imgSrc: 'src/assets/images/ct-payment-toss.png',
    imgAlt: '토스페이',
  },
];
</script>
