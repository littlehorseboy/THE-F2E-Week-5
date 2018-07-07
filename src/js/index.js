const Home = Vue.component('Home', {
  template: '#Home',
});

const Reading = {
  template: '#Reading',
  computed: {
    chapterSelected() {
      return this.$route.params.chapterId;
    },
    pageSelected() {
      return this.$route.params.pageId;
    },

    // Vuex
    chapters() {
      return this.$store.getters.getChapters;
    },
    chapter() {
      return this.$store.getters.getChapterById(this.$route.params.chapterId);
    },
    page() {
      return this.$store.getters.getPageById(this.$route.params.chapterId, this.$route.params.pageId);
    },

    //
    pagesLength() {
      const pagesArray = [];
      this.chapter.pages.forEach(page => {
        pagesArray.push(page.pageId);
      });
      return {
        min: _.min(pagesArray),
        max: _.max(pagesArray),
      };
    },
  },
  methods: {
    chapterSelectedOnChange(e) {
      router.push({ path: `/reading/${e.target.value}/${this.pageSelected}` });
    },
    pageSelectedOnChange(e) {
      router.push({ path: `/reading/${this.chapterSelected}/${e.target.value}` });
    },
  },
  mounted() {
    // window.sr = ScrollReveal();
    // sr.reveal('.image-Container');

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
    path: '/reading/:chapterId',
    name: 'reading',
    component: Reading,
  },
  {
    path: '/reading/:chapterId/:pageId',
    name: 'reading',
    component: Reading,
  },
];

const router = new VueRouter({
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // },
});

const app = new Vue({
  el: '#app',
  router,
  store,
});
