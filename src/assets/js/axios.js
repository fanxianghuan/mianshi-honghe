import Axios from 'axios';
var myaxios = {};
myaxios.install = function(vue) {
  var instance = Axios.create({
    baseURL: 'http://api.haomo-studio.com/org/swagger-ui.html#/'
  });
  instance.interceptors.request.use(function (config) {
    if (config.url !== 'login') {
      config.headers.Authorization = window.localStorage.getItem('token');
    }
    // console.log(config.url);
    return config;
  }, function(error) {
    return Promise.reject(error);
  });
  vue.prototype.$http = instance;
};
export default myaxios;
