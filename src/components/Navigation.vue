<template>
  <nav class="nav-container">
    <!-- 左侧 -->
    <div class="nav-left">
      <h1 class="store-name">Newsmoothly Store</h1>
      <div class="desktop-menu">
        <a 
          v-for="(item, index) in navItems" 
          :key="index"
          :href="item.link"
          class="nav-item"
          :class="{ 'active': activeItem === index }"
          @click.prevent="setActive(index)"
        >
          {{ item.title }}
        </a>
      </div>
    </div>
    
    <!-- 右侧 -->
    <div class="nav-right">
      <SearchIcon class="nav-icon" />
      <UserIcon class="nav-icon" />
      <div class="cart-icon-container">
        <ShoppingCartIcon class="nav-icon" />
        <span 
          v-if="cartCount > 0" 
          class="cart-badge"
        >
          {{ cartCount }}
        </span>
      </div>
      <MenuIcon 
        class="mobile-menu-icon" 
        @click="toggleMobileMenu" 
      />
    </div>
  </nav>

  <!-- 移动端菜单 -->
  <div 
    v-if="mobileMenuOpen" 
    class="mobile-menu-content"
  >
    <a 
      v-for="(item, index) in navItems" 
      :key="index"
      :href="item.link"
      class="mobile-nav-item"
      :class="{ 'active': activeItem === index }"
      @click.prevent="setActive(index)"
    >
      {{ item.title }}
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Search as SearchIcon, 
  ShoppingCart as ShoppingCartIcon, 
  Menu as MenuIcon, 
  User as UserIcon 
} from 'lucide-vue-next'

// 定义props
const props = defineProps({
  cartCount: {
    type: Number,
    default: 0
  }
})

// 导航数据
const navItems = ref([
  { title: 'HOME', link: '#home' },
  { title: 'CATALOG', link: '#catalog' },
  { title: 'ABOUT US', link: '#about' },
  { title: 'PRIVACY POLICY', link: '#privacy' },
  { title: 'REFUND POLICY', link: '#refund' },
  { title: 'TERMS AND CONDITIONS', link: '#terms' }
])

// 响应式状态
const mobileMenuOpen = ref(false)
const activeItem = ref(0)

// 方法
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const setActive = (index) => {
  activeItem.value = index
  mobileMenuOpen.value = false
  // 这里可以添加路由导航逻辑
  console.log(`Navigating to: ${navItems.value[index].link}`)
}
</script>

<style scoped>
/* 基础样式 */
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.store-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

/* 桌面导航 */
.desktop-menu {
  display: none;
  gap: 1.5rem;
}

.nav-item {
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  color: #d97706;
}

/* 右侧导航图标 */
.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-icon {
  width: 20px;
  height: 20px;
  color: #6b7280;
  cursor: pointer;
  transition: color 0.2s ease;
}

.nav-icon:hover {
  color: #d97706;
}

.cart-icon-container {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #dc2626;
  color: white;
  font-size: 12px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 移动菜单 */
.mobile-menu-icon {
  display: none;
  width: 20px;
  height: 20px;
  color: #6b7280;
  cursor: pointer;
}

.mobile-menu-content {
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 1.5rem;
}

.mobile-nav-item {
  display: block;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
}

.mobile-nav-item:hover,
.mobile-nav-item.active {
  color: #d97706;
}

/* 响应式设计 */
@media (min-width: 768px) {
  .desktop-menu {
    display: flex !important;
  }
  .mobile-menu-icon {
    display: none !important;
  }
}

@media (max-width: 767px) {
  .desktop-menu {
    display: none !important;
  }
  .mobile-menu-icon {
    display: block !important;
  }
}
</style>