import { createStore } from 'vuex';
import userImage from "@/assets/main-user-image.png"
import schoolImage from "@/assets/dongguk-university.png"

interface State {
  count: number;
  about : {
    nameCard : {
      koreanName : string,
      englishName : string,
      introduction : string,
      introductionHtml?: boolean | undefined,
      imagePath : string | undefined,
    },
    experience : {
      mainText : string,
      mainTextHtml?: boolean | undefined
      subText : string | undefined,
      subTextHtml?: boolean | undefined,
      imagePath?: string | undefined,
      since : string
    },
    school : {
      mainText : string,
      mainTextHtml?: boolean | undefined
      subText : string | undefined,
      subTextHtml?: boolean | undefined,
      imagePath?: string | undefined
    }
  };
}

export const store = createStore<State>({
  state: {
    count: 0,  // 기본 상태
    about : {
        nameCard : {
          koreanName  : "한진섭",
          englishName : "Han Jinseob",
          introduction: "From <strong>front-end</strong> to <strong>back-end</strong>,<br>Developer exploring the full spectrum.",
          introductionHtml : true,
          imagePath   :  userImage
        },
        experience : {
          mainText : "Experience",
          subText : undefined,
          subTextHtml : true,
          since : "2021.10"
        },
        school : {
          mainText : "Dongguk University",
          mainTextHtml : false,
          subText : "Dept. of <strong>Computer Engineering</strong>",
          subTextHtml : true,
          imagePath : schoolImage
        }
    },
  },
  mutations: {
    setAge(state, monthAge ) {
      state.about.experience.subText = `${state.about.experience.since} ~ <label style="font-size:var(--Spa);">( ${monthAge.age} yr ${monthAge.month} mo )</label>`;
    },
  },
  actions: {
    calculateAgeFromBirthDate({ commit, state }) {
      const monthAge = calculateAge(state.about.experience.since);  // 생년월일로 나이 계산
      commit('setAge', monthAge);  // 계산된 나이를 state에 저장
    },
  },
  getters: {
    
  },
});

function calculateAge(birthDate:string) {
  const today = new Date();
  const birth = new Date(birthDate);
  
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
    age--;  // 생일이 지나지 않았으면 1살 차감
  }
  
  // 만 나이와 개월 수 계산
  const monthAge = today.getMonth() - birth.getMonth() + 1 + (12 * (today.getFullYear() - birth.getFullYear()));
  const month = monthAge - age * 12;
  
  return {
    age,
    month
  }
};