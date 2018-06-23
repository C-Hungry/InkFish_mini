export default {
  data: {},
  remove: function (name) {
    delete this.data[name];
  },
  add: function (name, value) {
    this.data[name] = value ? value : true;
    setTimeout(() => {
      delete this.data[name];
    }, 72000000);
  },
  get: function (name) {
    return this.data[name];
  }
};