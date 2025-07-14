module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // 0=禁用，1=警告，2=错误（阻止提交）
      'always',
      [
        'feat', // 新增功能（Feature）
        'fix', // 修复 Bug
        'docs', // 文档更新（Documentation）
        'style', // 代码格式化、空格、分号等（不影响代码逻辑）
        'refactor', // 代码重构（非功能或 Bug 修复）
        'perf', // 性能优化
        'test', // 添加/修改测试用例
        'build', // 构建系统或外部依赖变更
        'ci', // 持续集成/部署配置更新
        'chore', // 构建流程、依赖管理、包配置等（不影响代码或测试）
        'revert', // 回滚某个提交
      ],
    ],
    'type-case': [2, 'always', 'lower-case'], // type 必须小写
    'subject-full-stop': [0, 'never'], // 允许 subject 以句号结尾
  },
}
