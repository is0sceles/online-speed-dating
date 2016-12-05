

var app = {
  template: '<div class="message">{{ msg }}</div>',
  data: function() {
    return {
      msg: 'Hello from vue-loader!'
    }
  }
}

console.log(app)

export default app;