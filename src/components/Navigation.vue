<template>
<!-- 桌面端導航 -->
    <nav class="nav-overlay">
      <div class="nav-left">
        <h1 class="store-name">Newsmoothly Store</h1>
        <!-- <div class="desktop-menu">
          <a
            v-for="(item, index) in navItems"
            :key="index"
            :href="item.link"
            class="nav-item"
            :class="{ active: activeItem === index }"
            @click.prevent="setActive(index)"
          >
            {{ item.title }}
          </a>
        </div> -->
      </div>
      <div class="nav-right">
        <!-- <SearchIcon class="nav-icon" />
        <UserIcon class="nav-icon" />
        <div class="relative">
          <ShoppingCartIcon class="nav-icon" />
        </div> -->
        <div class="relative">
          <!-- <PhoneIcon class="nav-icon" /> -->
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="nav-icon" />
          <span class="ml-2">Whatsapp: +852 65051022</span>
        </div>
      </div>
    </nav>

    <!-- 移动端漢堡選單按鈕 -->
    <button class="mobile-menu-button" @click="toggleMobileNav" aria-label="Toggle menu">
      <MenuIcon v-if="!isMobileNavOpen" />
      <CloseIcon v-else />
    </button>

    <!-- 移动端中间商店名 -->
    <div class="mobile-nav-center">
      <h1 class="store-name">Newsmoothly Store</h1>
    </div>

    <!-- 移动端右上角圖標 -->
    <div class="mobile-nav-icons">
      <!-- <SearchIcon class="nav-icon" />
      <UserIcon class="nav-icon" />
      <div class="relative">
        <ShoppingCartIcon class="nav-icon" />
      </div> -->

    </div>

    <!-- 移动端側邊抽屜導航 -->
    <nav class="mobile-nav-drawer" :class="{ open: isMobileNavOpen }">
      <div>
        <a  
          class="nav-item"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
          <span style="align-items: center;">Whatsapp: +852 65051022</span>
        </a>
        <!-- <a
          v-for="(item, index) in navItems"
          :key="index"
          :href="item.link"
          class="nav-item"
          :class="{ active: activeItem === index }"
          @click.prevent="setActive(index); toggleMobileNav()"
        >
          {{ item.title }}
        </a> -->
      </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  User as UserIcon,
  Menu as MenuIcon,
  X as CloseIcon,
  Phone as PhoneIcon
} from 'lucide-vue-next'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; // 导入 FontAwesome 图标



const navItems = ref([
  // { title: 'HOME', link: '#home' },
  // { title: 'CATALOG', link: '#catalog' },
  // { title: 'ABOUT', link: '#about' },
  // { title: 'CONTACT', link: '#contact' }
])

const activeItem = ref(0)
const setActive = (index) => {
  activeItem.value = index
}

// 控制手機導航抽屜開關
const isMobileNavOpen = ref(false)
const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}

</script>

<style>
.nav-overlay {
  height: 30px;
  position: relative;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
}

.nav-overlay:hover {
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(6px);
}


.nav-left {
  display: flex;
  align-items: center;
}

.store-name {
  color: rgba(255, 255, 255, 1);
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.5px;
  margin-right: 0.5rem;
}

.nav-item {
  margin-left: 1rem;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
  font-size: 1.25rem;
  letter-spacing: 0.8px;
  text-decoration: none;
  z-index: 2;

}

.nav-item.active {
  color: rgba(255, 255, 255, 1);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-icon {
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 1);
}

.nav-overlay:hover .nav-item, .nav-overlay:hover .store-name {
  color: rgba(0, 0, 0, 0.7);
}

.nav-overlay:hover .nav-item.active {
  color: rgba(0, 0, 0, 1);
}

.nav-overlay:hover .nav-icon {
  color: rgba(0, 0, 0, 0.7);
}


/* 購物車數量氣泡 */
/* .cart-badge {
  position: absolute;
  top: -6px;
  right: -10px;
  width: 18px;
  height: 18px;
  background-color: white;
  color: #4A3B2A;
  border-radius: 50%;
  font-size: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
} */

.hero-overlay-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-182%, 120%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 329px;
  height: 90px;
  font-size: 43px;
  font-weight: 400;
  color: #4A3B2A;
  background-color: transparent;
  border: 2px solid #4A3B2A;
  border-radius: 31px;
  text-decoration: none;
  z-index: 3;
  transition: transform 0.3s ease;
}

.hero-overlay-button:hover {
  transform: translate(-182%, 120%) scale(1.05);
}

/* 響應式處理 */
@media (max-width: 768px) {
  .hero-overlay-button {
    display: none;
  }

  .nav-overlay {
    display: none;
  }

  .mobile-menu-button {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 20;
    width: 28px;
    height: 28px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .mobile-nav-drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(6px);
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
    padding: 2rem 1rem;
    z-index: 10;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .mobile-nav-drawer.open {
    transform: translateX(0);
  }

  .mobile-nav-drawer .nav-item {
    display: block;
    margin: 1rem 0;
    font-size: 0.8rem;
    color: #333;
    text-decoration: none;
  }

  .mobile-nav-drawer .nav-item.active {
    color: #d97706;
  }

  .mobile-nav-icons {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .mobile-nav-center {
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  .mobile-nav-center .store-name {
    font-size: 0.8rem;
    font-weight: 700;
    color: #4A3B2A;
    margin: 0;
  }
}
</style>