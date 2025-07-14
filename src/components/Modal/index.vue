<template>
  <div>
    <button @click="showTerminal()">打开终端</button>
  </div>
</template>

<script lang="ts" setup>
// 创建终端弹窗
function createTerminal() {
  // 创建遮罩层
  const overlay = document.createElement('div')
  overlay.className = 'terminal-overlay'

  // 创建终端窗口
  const terminal = document.createElement('div')
  terminal.className = 'terminal-window'

  // 输出区域
  const output = document.createElement('div')
  output.className = 'terminal-output'
  output.textContent = '终端已启动\n> '

  // 输入行
  const inputLine = document.createElement('div')
  inputLine.className = 'terminal-input-line'

  const prompt = document.createElement('span')
  prompt.className = 'terminal-prompt'
  prompt.textContent = '> '

  const input = document.createElement('input')
  input.className = 'terminal-input'
  input.type = 'text'
  input.autofocus = true

  // 组件组装
  inputLine.append(prompt, input)
  terminal.append(output, inputLine)
  overlay.append(terminal)

  // 事件处理
  const history = []
  let historyIndex = 0

  input.addEventListener('keydown', (e) => {
    // 回车键处理
    if (e.key === 'Enter') {
      e.preventDefault()
      const command = input.value.trim()
      if (command) {
        history.push(command)
        historyIndex = history.length
        executeCommand(command, output)
        output.textContent += `\n> ${input.value}\n> `
        input.value = ''
      }
    }

    // 方向键处理（历史记录）
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex > 0) {
        historyIndex--
        input.value = history[historyIndex] || ''
      }
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex < history.length - 1) {
        historyIndex++
        input.value = history[historyIndex] || ''
      } else {
        historyIndex = history.length
        input.value = ''
      }
    }
  })

  // 关闭处理
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      document.body.removeChild(overlay)
    }
  })

  return overlay
}

// 命令执行器（示例）
function executeCommand(command, output) {
  const response = {
    help: '可用命令：help, clear, about',
    // clear: () => (output.textContent = ''),
    about: '仿终端窗口 v1.0\n使用原生JavaScript实现',
  }[command]

  if (typeof response === 'string') {
    output.textContent += `\n${response}\n> `
  } else if (typeof response === 'function') {
    response()
    output.textContent += '\n> '
  } else {
    output.textContent += `\n未知命令: ${command}\n> `
  }
}

// 显示终端
function showTerminal() {
  const terminal = createTerminal()
  document.body.appendChild(terminal)
}
</script>

<style lang="less" scoped>
/* 终端遮罩层 */
.terminal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  font-family: monospace;
}

/* 终端窗口 */
.terminal-window {
  width: 80%;
  max-width: 800px;
  min-height: 300px;
  background: #000;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
}

/* 输出区域 */
.terminal-output {
  padding: 15px;
  height: 250px;
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
</style>
