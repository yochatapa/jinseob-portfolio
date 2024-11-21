import { createStore } from 'vuex';

interface State {
  count: number;
  about : Object;
}

export const store = createStore<State>({
  state: {
    count: 0,  // 기본 상태
    about : {
        koreanName  : "한진섭",
        englishName : "Han Jinseob",
        introduction: "SW Developer",
        imagePath   : "/src/assets/main-user-image.png" 
    },
  },
  mutations: {
    
  },
  actions: {
    
  },
  getters: {
    
  },
});