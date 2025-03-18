<template>
  <footer>
    <div class="footer-inner">
      <div class="lnb-wrap">
        <div class="footer-slogan">
          <h2>
            트렌드 그 이상의 클래스,<br />
            비욘드 인사이트
          </h2>
        </div>
        <div class="lnb">
          <LinkItem title="비욘드 클래스" :links="beyondClassLinks" />
          <LinkItem title="클래스 공유자 지원" :links="classSupportLinks" />
          <LinkItem title="고객센터" :links="customerServiceLinks" />
          <LinkItem title="CONTACT" :links="contactInfo" isContactInfo />
        </div>
      </div>
      <div class="copyright-wrap">
        <b class="company-info-trigger">(주)비욘드클래스 사업자 정보</b>
        <address>
          <p>
            (주)비욘드클래스<br />
            사업자번호 : 123-45-67890 | 대표자 : 홍길동 | 개인정보책임관리자 :
            홍길동 | 통신판매업신고번호 : 제 2022-서울마포-1234호<br />
            (12345) 서울특별시 서대문구 신촌로 123, 3층
          </p>
          <p>Copyright © Beyond Class. All rights reserved.</p>
        </address>
        <div class="sns">
          <a href="#none"><i class="bi bi-facebook"></i></a>
          <a href="#none"><i class="bi bi-instagram"></i></a>
          <a href="#none"><i class="bi bi-twitter"></i></a>
          <a href="#none"><i class="bi bi-youtube"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LinkItem from '@/components/LinkItem.vue';

const beyondClassLinks = [
  { text: '앱 다운로드', url: '#none' },
  { text: '코드 교환', url: '#none' },
  { text: '브랜드', url: '#none' },
  { text: '단체 교육', url: '#none' },
  { text: '공지사항', url: '#none' },
  { text: '채용안내', url: '#none' },
];

const classSupportLinks = [
  { text: '클래스 개설', url: '#none' },
  { text: '스튜디오 대여', url: '#none' },
  { text: '클래스 개설 소개 자료', url: '#none' },
  { text: '멘토 교육 지원', url: '#none' },
];

const customerServiceLinks = [
  { text: '공지사항', url: '#none' },
  { text: '이용약관', url: '#none' },
  { text: '개인정보처리방침', url: '#none' },
  { text: 'FAQ', url: '#none' },
  { text: '환불규정', url: '#none' },
];

const contactInfo = `
  환불문의: refund@beyond-i.com<br>
  기타문의: help@beyond-i.com<br>
  고객센터: 02-555-5555<br>
  (주중 10시~18시 / 주말 및 공휴일 제외)
`;
</script>

<style scoped></style>
