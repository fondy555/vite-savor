<template>
  <section class="hero" :style="{ '--hero-min-height': heroMinHeight }">
    <div class="hero__media-wrapper">
      <img :src="heroImage" alt="hero banner" class="hero__image" />
      <div class="hero__overlay"></div>
    </div>
    <Navigation />


    <!-- 中央 SHOP NOW 按鈕（手機隱藏） -->
    <!-- <a href="https://pay.airwallex.com/hkh9ais79bop" class="hero-overlay-button">FACEBOOK 直播付款</a> -->
    <div class="pay-section">
      <!-- <h1>欢迎来到我们的支付页面</h1> -->
      <!-- <p>点击下面的按钮进行付款：</p> -->
      <button class="button" @click.prevent="payNow()">立即付款</button>
    </div>

  </section>
  <section>
    <ProductGrid />
  </section>
  <section>
    <Footer />
  </section>
</template>

<script setup>
import Navigation from '../components/Navigation.vue';
const heroImage = new URL('../assets/background.png', import.meta.url).href
import ProductGrid from '../components/ProductGrid.vue';
import Footer from '../components/Footer.vue';

const heroMinHeight = '600px'


// 方法
const payNow = () => {
  window.location.href = "https://pay.airwallex.com/hkh9ais79bop"; 
}



</script>

<style scoped>
.hero {
  position: relative;
  min-height: var(--hero-min-height);
  overflow: hidden;
}

.hero__media-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(134, 134, 134, 0.5); /* 黑色半透明蒙版 */
  z-index: 1; /* 保证蒙版在背景图之上 */
}


.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.pay-section {
  position: absolute;
  top: 70%;
  left: 21.5%;
  /* transform: translate(0%, -70%); */
  z-index: 1;
}


.button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 32px;
    cursor: pointer;
    border-radius: 5px;
}
.button:hover {
    background-color: #45a049;
}


@media (max-width: 768px) {
  .pay-section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    .button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        font-size: 32px;
        cursor: pointer;
        border-radius: 5px;
    }
  }
}




</style>
