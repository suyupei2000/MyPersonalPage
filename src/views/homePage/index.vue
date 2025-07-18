<template>
  <div class="home-page min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <code class="h-6 w-6 text-blue-600" />
            <span class="font-bold text-xl text-gray-900">苏余培</span>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors">关于我</a>
            <a href="#skills" class="text-gray-700 hover:text-blue-600 transition-colors">技能</a>
            <a href="#projects" class="text-gray-700 hover:text-blue-600 transition-colors">项目</a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors">联系</a>
          </div>
          <button class="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600" @click="toggleMobileMenu">
            <menu class="h-6 w-6" />
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="showMobileMenu" class="md:hidden py-4 border-t">
          <div class="flex flex-col space-y-4">
            <a href="#about" class="text-gray-700 hover:text-blue-600" @click="closeMobileMenu">关于我</a>

            <a href="#skills" class="text-gray-700 hover:text-blue-600" @click="closeMobileMenu">技能</a>

            <a href="#projects" class="text-gray-700 hover:text-blue-600" @click="closeMobileMenu">项目</a>

            <a href="#contact" class="text-gray-700 hover:text-blue-600" @click="closeMobileMenu">联系</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="space-y-4">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              你好，我是
              <span class="text-blue-600">苏余培</span>
            </h1>
            <p class="text-xl text-gray-600 leading-relaxed">
              一名充满热情的前端开发工程师，专注于创建优雅、高效的用户界面和用户体验。 拥有 {{ experience }}
              年的前端开发经验，熟练掌握现代前端技术栈。
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <button
              class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <!-- <download class="h-5 w-5" /> -->
              下载简历
            </button>
            <a
              href="#contact"
              class="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
            >
              联系我
            </a>
          </div>

          <div class="flex items-center space-x-4 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              class="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <!-- <github class="h-6 w-6" /> -->
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              class="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <!-- <linkedin class="h-6 w-6" /> -->
            </a>
            <a href="mailto:1940505542@qq.com" class="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <!-- <mail class="h-6 w-6" /> -->
            </a>
          </div>
        </div>

        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"
            ></div>
            <img
              src=""
              alt="个人照片"
              class="relative w-80 h-80 rounded-full border-4 border-white shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">关于我</h2>
          <p class="text-xl text-gray-600">了解我的背景、经验和专业技能</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-gray-900">我的故事</h3>
            <div class="space-y-4 text-gray-600">
              <p>
                我是一名热爱技术的前端开发工程师，毕业于计算机科学专业。在过去的几年里，
                我专注于现代前端技术的学习和实践，包括 React、Vue.js、Next.js 等主流框架。
              </p>
              <p>
                我相信优秀的用户界面不仅要美观，更要实用。我致力于创建既美观又高效的 Web 应用，
                为用户提供卓越的数字体验。
              </p>
            </div>
          </div>
          <div class="space-y-8">
            <div class="space-y-4">
              <div class="flex items-center gap-3 text-gray-700">
                <!-- <map-pin class="h-5 w-5 text-blue-600" /> -->
                <span>广东省深圳市</span>
              </div>
              <div class="flex items-center gap-3 text-gray-700">
                <!-- <mail class="h-5 w-5 text-blue-600" /> -->
                <span>1940505542@qq.com</span>
              </div>
              <!-- <div class="flex items-center gap-3 text-gray-700">
                <phone class="h-5 w-5 text-blue-600" />
                <span>+86 138 0000 0000</span>
              </div> -->
            </div>
            <div class="space-y-4">
              <h4 class="font-semibold text-gray-900">专业领域</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="area in expertiseAreas"
                  :key="area.name"
                  class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  <component :is="area.icon" class="h-3 w-3" />
                  {{ area.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">技能专长</h2>
          <p class="text-xl text-gray-600">我掌握的技术栈和工具</p>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="skill in skills" :key="skill.name" class="space-y-2">
            <div class="flex justify-between items-center">
              <span class="font-medium text-gray-900">{{ skill.name }}</span>
              <span class="text-sm text-gray-600">{{ skill.level }}%</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000 ease-out rounded-full"
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">项目作品</h2>
          <p class="text-xl text-gray-600">展示我个人平时开发学习的一些项目和作品</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in projects"
            :key="project.title"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div class="aspect-video relative overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="flex gap-3">
                <a
                  :href="project.github"
                  target="_blank"
                  class="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <!-- <github class="h-4 w-4" /> -->
                  <span class="text-sm">代码</span>
                </a>
                <a
                  :href="project.demo"
                  target="_blank"
                  class="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <!-- <external-link class="h-4 w-4" /> -->
                  <span class="text-sm">演示</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">联系我</h2>
          <p class="text-xl text-gray-600">有项目合作或工作机会？欢迎与我联系</p>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="contact in contactMethods"
            :key="contact.title"
            class="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <component :is="contact.icon" class="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ contact.title }}</h3>
            <p class="text-gray-600 mb-4">{{ contact.value }}</p>
            <a
              :href="contact.link"
              class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {{ contact.action }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="gap-2">
            <div class="h-6 w-6 text-blue-600" />
            <a class="beian" href="https://beian.miit.gov.cn" target="_blank"> 粤ICP备2024306845号 </a>
            <div class="text-gray-600">© 2025 苏余培. 保留所有权利.</div>
          </div>

          <div class="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" class="text-gray-600 hover:text-blue-600 transition-colors">
              <!-- <github class="h-5 w-5" /> -->
            </a>

            <a href="https://linkedin.com" target="_blank" class="text-gray-600 hover:text-blue-600 transition-colors">
              <!-- <linkedin class="h-5 w-5" /> -->
            </a>

            <a href="mailto:1940505542@qq.com" class="text-gray-600 hover:text-blue-600 transition-colors">
              <!-- <mail class="h-5 w-5" /> -->
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ContactMethod, ExpertiseArea, Project, Skill } from './type'

// 响应式数据
const experience = ref<number>(3)
const showMobileMenu = ref<boolean>(false)
const skills = reactive<Skill[]>([
  { name: 'Vue.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Next.js', level: 75 },
  { name: 'Node.js', level: 70 },
])

const expertiseAreas = reactive<ExpertiseArea[]>([
  { name: 'Web 开发', icon: null },
  { name: '移动端开发', icon: null },
  { name: '前端架构', icon: null },
])

const projects = reactive<Project[]>([
  // {
  //   title: '电商平台',
  //   description: '基于 Vue 3 和 TypeScript 开发的现代化电商平台，包含购物车、支付集成和用户管理功能。',
  //   tech: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Pinia'],
  //   image: '/placeholder.svg?height=200&width=300',
  //   github: '#',
  //   demo: '#',
  // },
  // {
  //   title: '任务管理应用',
  //   description: '响应式的任务管理工具，支持拖拽排序、团队协作和实时同步功能。',
  //   tech: ['Vue 3', 'Vuex', 'Element Plus', 'Socket.io'],
  //   image: '/placeholder.svg?height=200&width=300',
  //   github: '#',
  //   demo: '#',
  // },
  // {
  //   title: '数据可视化仪表板',
  //   description: '企业级数据可视化平台，提供多种图表类型和实时数据更新功能。',
  //   tech: ['Vue 3', 'D3.js', 'Chart.js', 'Express'],
  //   image: '/placeholder.svg?height=200&width=300',
  //   github: '#',
  //   demo: '#',
  // },
])

const contactMethods = reactive<ContactMethod[]>([
  {
    title: '邮箱',
    value: '1940505542@qq.com',
    link: 'mailto:1940505542@qq.com',
    action: '发送邮件',
    icon: null,
  },
  // {
  //   title: '电话',
  //   value: '+86 138 0000 0000',
  //   link: 'tel:+8613800000000',
  //   action: '立即拨打',
  //   icon: null,
  // },
  {
    title: '位置',
    value: '广东省深圳市',
    link: '#',
    action: '查看地图',
    icon: null,
  },
])

// 方法
const toggleMobileMenu = (): void => {
  showMobileMenu.value = !showMobileMenu.value
}
const closeMobileMenu = (): void => {
  showMobileMenu.value = false
}
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
