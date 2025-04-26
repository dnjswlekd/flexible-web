<template>
  <div class="container take-course">
    <section class="take-course">
      <div class="take-course-inner">
        <div class="cart-wrap">
          <h2 class="payment-headline">수강신청 장바구니</h2>
          <CartHeader
            :cartItems="cartItems"
            @remove-all-items="removeAllItems"
            @toggle-all-checkboxes="toggleAllCheckboxes"
          />
          <CartItems
            :cartItems="cartItems"
            @remove-cart-item="removeCartItem"
          />
          <CartEmpty :cartItems="cartItems" @go-to-main="goToMain" />
        </div>
        <Payment
          :totalPrice="totalPrice"
          :originalPrice="originalPrice"
          :discountAmount="discountAmount"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import CartHeader from '@/components/cartCourse/CartHeader.vue';
import CartItems from '@/components/cartCourse/CartItems.vue';
import CartEmpty from '@/components/cartCourse/CartEmpty.vue';
import Payment from '@/components/cartCourse/Payment.vue';

const router = useRouter();

const cartItems = ref([
  {
    id: 1,
    subject:
      '퍼블리셔 취업과 퍼블리셔 실무에서 가장 경쟁력을 위한 모바일 웹 퍼블리싱 포트폴리오 with Figma',
    mentor: '코딩웍스(Codingworks)',
    freeDuration: '평생 무료',
    discountPeriod: '할인기간 2022-11-01까지',
    discount: 30,
    originalPrice: '132,000',
    currentPrice: '92,400',
    image: '@/assets/images/beyond-class-category-cover-16.png',
    checked: false,
  },
  {
    id: 2,
    subject: 'HTML+CSS+JS 포트폴리오 실전 퍼블리싱(시즌1)',
    mentor: '코딩웍스(Codingworks)',
    freeDuration: '12개월 무료',
    discountPeriod: '할인기간 2022-10-25까지',
    discount: 20,
    originalPrice: '46,200',
    currentPrice: '36,960',
    image: '@/assets/images/beyond-class-category-cover-03.png',
    checked: false,
  },
  {
    id: 3,
    subject:
      '[2022년 출제기준] 웹디자인기능사 실기시험 완벽 가이드(HTML+CSS+JQUERY)',
    mentor: '코딩웍스(Codingworks)',
    freeDuration: '평생 무료',
    discountPeriod: '할인기간 2022-10-12까지',
    discount: 15,
    originalPrice: '166,100',
    currentPrice: '141,185',
    image: '@/assets/images/beyond-class-category-cover-01.png',
    checked: false,
  },
  {
    id: 4,
    subject: 'SCSS(SASS)+FLEX 실전 반응형 웹 포트폴리오 with Figma',
    mentor: '코딩웍스(Codingworks)',
    freeDuration: '평생 무료',
    discountPeriod: '할인기간 2022-11-01까지',
    discount: 30,
    originalPrice: '132,000',
    currentPrice: '92,400',
    image: '@/assets/images/beyond-class-category-cover-17.png',
    checked: false,
  },
]);

const removeCartItem = (index) => {
  cartItems.value.splice(index, 1);
};

const removeAllItems = () => {
  cartItems.value = [];
};

const toggleAllCheckboxes = (checked) => {
  cartItems.value.forEach((item) => {
    item.checked = checked;
  });
};

const totalPrice = computed(() => {
  return cartItems.value.reduce(
    (acc, item) =>
      acc + (item.checked ? parseInt(item.currentPrice.replace(',', '')) : 0),
    0
  );
});

const originalPrice = computed(() => {
  return cartItems.value.reduce(
    (acc, item) => acc + parseInt(item.originalPrice.replace(',', '')),
    0
  );
});

const discountAmount = computed(() => {
  return originalPrice.value - totalPrice.value;
});

const goToMain = () => {
  router.push({ name: 'home' });
};
</script>
