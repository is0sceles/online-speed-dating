import temp from './appTemp.vue';

var app = {
  template: temp.template,
  data: function() {
    return { 
      msg: 'Hello from vue-loader!'
    };
  }
};

console.log(app);

export default app;