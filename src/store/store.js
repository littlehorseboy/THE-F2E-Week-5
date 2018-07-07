const store = new Vuex.Store({
  state: {
    chapters: [
      {
        chapterId: 1,
        pages: [
          {
            pageId: 1,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-1.png',
          },
          {
            pageId: 2,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-2.png',
          },
          {
            pageId: 3,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-3.png',
          },
          {
            pageId: 4,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-4.png',
          },
          {
            pageId: 5,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-5.png',
          },
          {
            pageId: 6,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-6.png',
          },
          {
            pageId: 7,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-7.png',
          },
          {
            pageId: 8,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-8.png',
          },
          {
            pageId: 9,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-9.png',
          },
          {
            pageId: 10,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-10.png',
          },
          {
            pageId: 11,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-11.png',
          },
          {
            pageId: 12,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-12.png',
          },
        ],
      },
      {
        chapterId: 2,
        pages: [
          {
            pageId: 1,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-1.png',
          },
          {
            pageId: 2,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-2.png',
          },
          {
            pageId: 3,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-3.png',
          },
          {
            pageId: 4,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-4.png',
          },
          {
            pageId: 5,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-5.png',
          },
          {
            pageId: 6,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-6.png',
          },
          {
            pageId: 7,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-7.png',
          },
          {
            pageId: 8,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-8.png',
          },
          {
            pageId: 9,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-9.png',
          },
          {
            pageId: 10,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-10.png',
          },
          {
            pageId: 11,
            imgSrc: 'https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-11.png',
          },
        ],
      },
    ],
  },
  getters: {
    getChapters: (state) => {
      return state.chapters;
    },
    getChapterById: (state) => (chapterId) => {
      return state.chapters.find(chapter => chapter.chapterId == chapterId);
    },
    getPageById: (state) => (chapterId, pageId) => {
      return state.chapters.find(chapter => chapter.chapterId == chapterId)
        .pages.find(page => page.pageId == pageId);
    },
  },
  actions: {
    
  },
  mutations: {
    
  },
});
