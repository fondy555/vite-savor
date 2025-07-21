import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// 将 WhatsApp 图标添加到图标库
library.add(faWhatsapp);

createApp(App).
    component('font-awesome-icon', FontAwesomeIcon). // 注册 FontAwesomeIcon 组件
    mount('#app')
