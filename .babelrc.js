module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-runtime'] //비동기 처리를 위해서 설치
  ]
}