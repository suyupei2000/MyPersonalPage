// module.exports = {
//   defaultSeverity: 'error',
//   extends: ['stylelint-config-prettier'],
//   plugins: ['stylelint-less'],
// }
module.exports = {
  defaultSeverity: 'error',
  extends: [
    'stylelint-config-prettier', // 关闭与 Prettier 冲突的规则（可选）
  ],
  plugins: ['stylelint-less'],
  rules: {
    // // 自定义规则（覆盖或新增）
    // 'selector-class-pattern': null, // 关闭类名命名规范检查
    // indentation: 2, // 强制2空格缩进
    // 'no-descending-specificity': null, // 关闭特异性降序警告
  },
}
