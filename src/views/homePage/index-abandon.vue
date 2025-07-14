<template>
  <div class="homepage-page">
    <header>
      <h1 class="text-shadow-hover">我的个人页面</h1>
      <nav>
        <ul>
          <li><a href="#about">关于我</a></li>
          <li><a href="#skills">技能</a></li>
          <!-- <li><a href="#projects">项目</a></li> -->
          <li>
            <RouterLink to="/projects"> 项目 </RouterLink>
          </li>
          <li><a href="#contact">联系方式</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <div class="user-info">
        <div class="user-img">
          <!-- <img src="" alt="avatar"></img> -->
        </div>
        <div class="user-name">苏余培</div>
        <div class="user-desc">
          <p>一个正在努力学习中，正在努力进步中，正在努力成长中的前端工程师。</p>
          <p>欢迎来到我的个人网站，在这里你可以看到我正在学习的项目，我的个人简历，我的联系方式等。</p>
          <p>爱好是听歌，看动漫，喜欢计算机。</p>
        </div>
      </div>
      <div class="tools">
        <div class="tool-l"></div>
        <div class="tool-r">
          <div class="terminal-window">
            <div class="terminal-output"><span>&gt; </span>欢迎来到我的个人网站</div>
            <div class="terminal-input-line">
              <span class="terminal-prompt">&gt; </span>
              <input class="terminal-input" type="text" />
            </div>
          </div>
          <!-- <textarea class="ai-task" placeholder="请输入任务"></textarea> -->
        </div>
      </div>
    </main>

    <footer>
      <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备2024306845号</a>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
// @import url(./index.less);
body {
  font-family: 'Lora', serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

header {
  background: var(--primary-xlight);
  color: var(--primary-base);
  padding: 1rem 0;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav ul li a:hover {
  color: #87cefa;
}

main {
  padding: 2rem 0;
  text-align: center;
  overflow: auto;
}

section {
  margin-bottom: 2rem;
}

footer {
  background: var(--primary-base);
  color: var(--neutral-100);
  text-align: center;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  bottom: 0;
}

footer a {
  color: #87cefa;
}

footer a:hover {
  color: #004c99;
}

@media (min-width: 600px) {
  nav ul {
    display: flex;
    justify-content: center;
  }

  nav ul li {
    margin: 0 15px;
  }
}

.homepage-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    padding-bottom: 56px;
  }
}

.user-info {
  padding: 24px;
  border-bottom: 1px solid var(--accent-cool);
}

.tools {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 400px;

  .tool-l,
  .tool-r {
    flex: 1;
    height: 100%;
  }

  .tool-r {
    background: var(--gradient-dawn);
    text-align: left;
    padding: 24px;

    /* 终端窗口 */
    .terminal-window {
      height: 400px;
      background: #000;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
    }

    /* 输出区域 */
    .terminal-output {
      padding: 15px;
      height: 350px;
      overflow-y: auto;
      color: #0f0;
      background: #000;
      white-space: pre-wrap;
    }

    /* 输入行 */
    .terminal-input-line {
      display: flex;
      padding: 10px;
      background: #1a1a1a;
      border-top: 1px solid #2f2f2f;
    }

    /* 提示符 */
    .terminal-prompt {
      color: #0f0;
      margin-right: 8px;
      user-select: none;
    }

    /* 输入框 */
    .terminal-input {
      flex: 1;
      background: transparent;
      border: none;
      color: #0f0;
      outline: none;
      font-family: inherit;
      font-size: inherit;
    }
  }

  .ai-task {
    width: 400px;
    height: 400px;
    background-color: #000;
    color: var(--accent-cool);
    font-size: 24px;
    font-weight: 500;
    resize: none;

    &::placeholder {
      color: var(--accent-cool);
    }
  }
}
</style>
