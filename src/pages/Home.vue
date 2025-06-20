<template>
  <section class="hero" :style="{ '--hero-min-height': heroMinHeight }">
    <div class="hero__media-wrapper">
      <img :src="heroImage" alt="hero banner" class="hero__image" />
    </div>
    <Navigation />


    <!-- 中央 SHOP NOW 按鈕（手機隱藏） -->
    <a href="/collections/all" class="hero-overlay-button">SHOP NOW</a>
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

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}




</style>
