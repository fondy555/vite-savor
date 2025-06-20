<template>
  <div class="grid-container ">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="grid-item"
      @mouseover="currentImageIndex[index] = 1"
      @mouseleave="currentImageIndex[index] = 0"
    >
      <div class="product-image">
        <img
          :src="product.images[currentImageIndex[index]]"
          :alt="product.name"
          :class="{ 'zoom': currentImageIndex[index] === 1 }"
        />
      </div>
      <div class="product-details">
        <p class="product-name">{{ product.name }}</p>
        <p class="product-price">{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 静态导入图片（替换为你实际的路径）
import product1 from '../assets/product_1.jpg'
import product1Hover from '../assets/product_1_hover.jpg'
import product2 from '../assets/product_2.jpg'
import product2Hover from '../assets/product_2_hover.jpg'
import product3 from '../assets/product_3.jpg'
import product3Hover from '../assets/product_3_hover.jpg'
import product4 from '../assets/product_4.jpg'
import product4Hover from '../assets/product_4_hover.jpg'
import product5 from '../assets/product_5.jpg'
import product5Hover from '../assets/product_5_hover.jpg'
import product6 from '../assets/product_6.jpg'
import product6Hover from '../assets/product_6_hover.jpg'  

const products = [
  {
    name: '108 Beads Multi-Gen Dice Necklace',
    price: '$468.00 SGD',
    images: [product1, product1Hover],
  },
  {
    name: 'Blue Amber Silver Pendant',
    price: '$137.00 SGD',
    images: [product2, product2Hover],
  },
  {
    name: 'Brown-Red DIY Sweater Chain Necklace',
    price: '$535.00 SGD',
    images: [product3, product3Hover],
  },
  {
    name: 'Cave-Inspired DIY Beaded Bracelet (7mm)',
    price: '$902.00 SGD',
    images: [product4, product4Hover],
  },
  {
    name: 'Multi-Gen Dice Beads',
    price: '$137.00 SGD',
    images: [product5, product5Hover],
  },
  {
    name: 'Brownish-Red Amber DIY Sweater Necklace',
    price: '$25.00 SGD',
    images: [product6, product6Hover],
  },
]

const currentImageIndex = ref(Array(products.length).fill(0))

</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4列网格，可调整 */
  gap: 0; /* 不用间隙，用边框做分隔 */
  column-gap: 1px;
}

.grid-item {
  border-right: 1px solid white; /* 每个格子右边白线 */
  /* padding: 16px; */
  box-sizing: border-box;
}

/* 去掉每行最后一个格子的右边线 */
.grid-item:nth-child(3n) {
  border-right: none;
}

/* 響應式：平板以下使用兩列 */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 響應式：手機使用一列 */
@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}


.product-item {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.product-image {
  overflow: hidden;
  /* border-radius: 8px; */
  transition: transform 0.3s ease;
}

.product-image img {
  width: 100%;
  /* height: 100%; */
  display: block;
  transition: transform 0.3s ease;
}

.product-image img.zoom {
  transform: scale(1.05);
}

.product-details {
  /* text-align: center; */
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  /* background-color: rgba(202, 202, 202, 0.8); */

  
}

.product-name {
  font-weight: bold;
  font-size: 1rem;
  margin-block: auto;
  margin-left: 10px;
}

.product-price {
  color: #f60;
  font-size: 0.95rem;
  margin-block: auto;
  margin-right: 10px;
}
</style>
