<template>
  <footer class="store-footer">
    <!-- 主要Footer內容 -->
    <div class="footer-main">
      <div class="footer-container">
        <div class="footer-grid">
          <!-- SHOP 區域 -->
          <div class="footer-section">
            <h3 class="footer-title">SHOP</h3>
            <ul class="footer-links">
              <li><a href="#" @click.prevent="handleNavigation('search')">Search</a></li>
              <li><a href="#" @click.prevent="handleNavigation('all-products')">All Products</a></li>
            </ul>
          </div>

          <!-- ASK 區域 -->
          <div class="footer-section">
            <h3 class="footer-title">ASK</h3>
            <ul class="footer-links">
              <li><a href="#" @click.prevent="handleNavigation('contact')">Contact Us</a></li>
            </ul>
          </div>

          <!-- CONNECT 區域 -->
          <div class="footer-section">
            <h3 class="footer-title">CONNECT</h3>
            <ul class="footer-links">
              <li><a href="#" @click.prevent="handleSocialLink('instagram')">Instagram</a></li>
              <li><a href="#" @click.prevent="handleSocialLink('facebook')">Facebook</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <!-- Footer底部 -->
    <div class="footer-bottom">
      <div class="footer-container">
        <div class="footer-bottom-content">
          <div class="copyright">
            <p>&copy; {{ currentYear }} {{ storeName }}. Powered by XIN SHUN RONG</p>
          </div>
          <div class="footer-bottom-links">
            <a href="#" @click.prevent="handleNavigation('privacy')">Privacy policy</a>
            <a href="#" @click.prevent="handleNavigation('refund')">Refund policy</a>
            <a href="#" @click.prevent="handleNavigation('terms')">Terms of service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

// 響應式數據
const emailAddress = ref('')
const isSubmitting = ref(false)
const subscriptionMessage = ref('')
const messageType = ref('')

// 計算屬性
const currentYear = computed(() => new Date().getFullYear())
const storeName = computed(() => 'Newsmoothly Store')

// 方法
const handleNavigation = (section) => {
  console.log(`Navigate to: ${section}`)
  // 這裡可以添加路由導航邏輯
  // router.push(`/${section}`)
}

const handleSocialLink = (platform) => {
  console.log(`Open ${platform} social media`)
  // 這裡可以添加打開社交媒體鏈接的邏輯
  const socialLinks = {
    instagram: 'https://instagram.com/techjewel',
    facebook: 'https://facebook.com/techjewel',
  }
  
  if (socialLinks[platform]) {
    window.open(socialLinks[platform], '_blank')
  }
}


const showMessage = (message, type) => {
  subscriptionMessage.value = message
  messageType.value = type
  
  // 3秒後清除消息
  setTimeout(() => {
    subscriptionMessage.value = ''
    messageType.value = ''
  }, 3000)
}
</script>

<style scoped>
.store-footer {
  background-color: #f8f8f8;
  border-top: 1px solid #e0e0e0;
  margin-top: auto;
}

.footer-main {
  padding: 60px 0 40px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #666;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.5;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #333;
}

/* 郵件訂閱區域 */
.newsletter-section {
  max-width: 300px;
}

.newsletter-description {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
}

.email-input-group {
  display: flex;
  position: relative;
  margin-bottom: 10px;
}

.email-input {
  flex: 1;
  padding: 12px 50px 12px 16px;
  border: 1px solid #d0d0d0;
  border-radius: 0;
  font-size: 14px;
  background-color: white;
  transition: border-color 0.3s ease;
}

.email-input:focus {
  outline: none;
  border-color: #333;
}

.email-input::placeholder {
  color: #999;
}

.submit-button {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 48px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: color 0.3s ease;
}

.submit-button:hover {
  color: #333;
}

.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.subscription-message {
  font-size: 12px;
  margin-top: 8px;
  padding: 8px 0;
}

.subscription-message.success {
  color: #28a745;
}

.subscription-message.error {
  color: #dc3545;
}

/* Footer底部 */
.footer-bottom {
  background-color: #f0f0f0;
  padding: 20px 0;
  border-top: 1px solid #e0e0e0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.copyright p {
  color: #666;
  font-size: 12px;
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-bottom-links a {
  color: #666;
  text-decoration: none;
  font-size: 12px;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: #333;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .footer-main {
    padding: 40px 0 30px;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .newsletter-section {
    max-width: 100%;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .footer-bottom-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 15px;
  }
  
  .footer-grid {
    gap: 25px;
  }
  
  .footer-title {
    font-size: 13px;
  }
  
  .footer-links a {
    font-size: 13px;
  }
  
  .newsletter-description {
    font-size: 13px;
  }
  
  .email-input {
    padding: 10px 45px 10px 14px;
    font-size: 13px;
  }
  
  .submit-button {
    width: 42px;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .store-footer {
    background-color: #1a1a1a;
    border-top-color: #333;
  }
  
  .footer-title {
    color: #fff;
    border-bottom-color: #333;
  }
  
  .footer-links a {
    color: #ccc;
  }
  
  .footer-links a:hover {
    color: #fff;
  }
  
  .newsletter-description {
    color: #ccc;
  }
  
  .email-input {
    background-color: #2a2a2a;
    border-color: #444;
    color: #fff;
  }
  
  .email-input::placeholder {
    color: #888;
  }
  
  .email-input:focus {
    border-color: #666;
  }
  
  .submit-button {
    color: #ccc;
  }
  
  .submit-button:hover {
    color: #fff;
  }
  
  .footer-bottom {
    background-color: #0f0f0f;
    border-top-color: #333;
  }
  
  .copyright p,
  .footer-bottom-links a {
    color: #999;
  }
  
  .footer-bottom-links a:hover {
    color: #fff;
  }
}
</style>