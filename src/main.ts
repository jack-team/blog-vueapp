import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = true;

Vue.directive(`test`, {
    inserted: (el: HTMLElement) => {
        el.style.fontSize = `14px`;
    },
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount(`#app`);

