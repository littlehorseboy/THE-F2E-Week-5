const Header = Vue.component('Header', {
  template: '#Header',
  props: {
    nightMode: Boolean,
  },
});

const Home = Vue.component('Home', {
  template: '#Home',
});

const Reading = {
  template: '#Reading',
  data() {
    return {
      // 單元及頁數
      chapterSelected: '1',
      pageSelected: '1',
      // 夜間模式
      nightMode: false, 
    };
  },
  computed: {
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
      this.pageSelected = this.pagesLength.min;

      router.push({ path: `/reading/${this.chapterSelected}/${this.pageSelected}` });
    },
    pageSelectedOnChange(newPageId) {
      if (newPageId) {
        if (newPageId > this.pagesLength.max) {
          alert('已經是最後一頁了!');
          return false;
        } else if (newPageId < this.pagesLength.min) {
          alert('目前在第一頁!');
          return false;
        }
        this.pageSelected = newPageId;
      }
      router.push({ path: `/reading/${this.chapterSelected}/${this.pageSelected}` });
    },
  },
  watch: {
    page() {
      this.$nextTick(() => {
        if (!this.$el) {
          return false;
        }
        const target = this.$el.querySelector('.hoverBorder');
        if (!target) {
          return false;
        }
        const horizontalImgs = this.$el.querySelector('.horizontal-imgs');
        horizontalImgs.scrollLeft = target.offsetLeft - horizontalImgs.offsetWidth / 2 + target.offsetWidth / 2;
      });
    },
  },
  mounted() {
    this.chapterSelected = this.$route.params.chapterId;
    this.pageSelected = this.$route.params.pageId;

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
