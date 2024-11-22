import { createStore } from 'vuex';
import userImage from "@/assets/main-user-image.png"
import experienceImage from "@/assets/work-experience.png"
import schoolImage from "@/assets/dongguk-university.png"

interface State {
    userInfo : {
        koreanName  : string,
        englishName : string,
        expDate : string
    },
    system : {
        lang : "ko" | "en"
    },
    ko : About,
    en : About
}

interface About {
    about : {
        nameCard : {
            introduction : string,
            introductionHtml?: boolean | undefined,
            imagePath : string | undefined,
        },
        experience : InterfaceBasic1X1,
        school : InterfaceBasic1X1,
        personality : InterfaceBasic1X1
        devPhilosophy : InterfaceBasic1X1
    };
}

interface InterfaceBasic1X1 {
    mainText : string | undefined,
    mainTextHtml?: boolean | undefined
    subText : string | undefined,
    subTextHtml?: boolean | undefined,
    imagePath?: string | undefined
}

export const store = createStore<State>({
  state: {
    userInfo : {
        koreanName  : "한진섭",
        englishName : "Han Jinseob",
        expDate : "2021.10"
    },
    system : {
        lang : "en"
    },
    ko : {
        about : {
            nameCard : {
                introduction: "<strong>프런트엔드</strong>부터 <strong>백엔드</strong>까지,<br>개발의 전체 스펙트럼을 탐구하는 개발자.",
                introductionHtml : true,
                imagePath   :  userImage
            },
            experience : {
                mainText : undefined,
                subText : "2021.10 부터 개발 중",
                subTextHtml : true,
                imagePath : experienceImage
            },
            school : {
                mainText : "동국대학교",
                mainTextHtml : false,
                subText : "컴퓨터공학부 정보통신공학전공",
                subTextHtml : true,
                imagePath : schoolImage
            },
            personality : {
                mainText : "문제 해결사",
                mainTextHtml : false,
                subText : "문제를 분석적으로 접근하여 효율적인 솔루션을 찾습니다.",
                subTextHtml : true,
                //imagePath : schoolImage
            },
            devPhilosophy : {
                mainText : "목적이 있는 코딩",
                mainTextHtml : false,
                subText : "명확하고 유지 관리 가능한 코드를 작성하기 위해 노력합니다.",
                subTextHtml : true,
                //imagePath : schoolImage
            }
        },
    },
    en : {
        about : {
            nameCard : {
                introduction: "From <strong>front-end</strong> to <strong>back-end</strong>,<br>Developer exploring the full spectrum.",
                introductionHtml : true,
                imagePath   :  userImage
            },
            experience : {
                mainText : undefined,
                subText : "Development career since 2021.10",
                subTextHtml : true,
                imagePath : experienceImage
            },
            school : {
                mainText : "Dongguk University",
                mainTextHtml : false,
                subText : "Dept. of <strong>Computer Engineering</strong>",
                subTextHtml : true,
                imagePath : schoolImage
            },
            personality : {
                mainText : "Problem solver",
                mainTextHtml : false,
                subText : "Approach challenges analytically to find efficient solutions.",
                subTextHtml : true,
                //imagePath : schoolImage
            },
            devPhilosophy : {
                mainText : "Code with purpose",
                mainTextHtml : false,
                subText : "Always focused on delivering value through clear, maintainable code.",
                subTextHtml : true,
                //imagePath : schoolImage
            }
        },
    }
  },
  mutations: {
    setExperience(state, monthAge ) {
        state.en.about.experience.mainText = `${monthAge.age} year${monthAge.age!==1?"s":""}  ${monthAge.month} month${monthAge.month!==1?"s":""}`;
        state.ko.about.experience.mainText = `${monthAge.age} 년  ${monthAge.month} 개월`;
    },
  },
  actions: {
    calculateAgeFromBirthDate({ commit, state }) {
        const monthAge = calculateAge(state.userInfo.expDate);  // 생년월일로 나이 계산
        commit('setExperience', monthAge);  // 계산된 나이를 state에 저장
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
    const month = monthAge - age * 12 - 1;

    return {
        age,
        month
    }
};