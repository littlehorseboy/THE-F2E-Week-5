const Home = Vue.component('Home', {
  template: '#Home',
  data() {
    return {
      
    };
  },
});

const Reading = {
  template: '#Reading',
  computed: {
    product() {
      // return this.$store.getters.getProductById(this.$route.params.id);
    },
  },
  mounted() {
    window.sr = ScrollReveal();
    sr.reveal('.image-Container');

    const pageBtn = document.querySelectorAll('.horizontal-control > div');

    tippy(pageBtn, {
      delay: 100,
      arrow: true,
      arrowType: 'round',
      size: 'large',
      duration: 500,
      animation: 'scale',
    });
  },
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/reading/:id',
    name: 'reading',
    component: Reading,
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

const app = new Vue({
  el: '#app',
  router,
  store,
});
