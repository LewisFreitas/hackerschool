var _port = 8080;

module.exports = {
  port : _port,
  server: {
    baseDir : ["./src"]
  },
  notify: false,
  files : "./src/**/*.{js, html, css}",
  scrollProportionally: false,
  open: false,
  ui: false,
  ghostMode: false
}
