import { createStore } from 'vuex';
import userImage from "@/assets/main-user-image.png"
import experienceImage from "@/assets/work-experience.png"
import schoolImage from "@/assets/dongguk-university.png"
import personalityImage from "@/assets/personality-problem-solve.png"
import devPhilosophyImage from "@/assets/clean-code.png"

interface State {
    userInfo : {
        koreanName  : string,
        englishName : string,
        expDate : string
    },
    system : {
        lang : "ko" | "en"
    },
    ko : {
        about : About,
        timeline : Timeline
    },
    en : {
        about : About,
        timeline : Timeline
    }
}

interface About {
    nameCard : {
        introduction : string,
        introductionHtml?: boolean | undefined,
        imagePath : string | undefined,
    },
    experience : InterfaceBasic1X1,
    school : InterfaceBasic1X1,
    personality : InterfaceBasic1X1
    devPhilosophy : InterfaceBasic1X1
    selfIntroduction : InterfaceBasic1X1
}

interface Timeline {
    data : Array<Object>,

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
                imagePath   :  userImage,
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
                mainText : "문제 해결 능력",
                mainTextHtml : false,
                subText : "문제를 분석적으로 접근하여 효율적인 솔루션을 찾습니다.",
                subTextHtml : true,
                imagePath : personalityImage
            },
            devPhilosophy : {
                mainText : "목적이 있는 코딩",
                mainTextHtml : false,
                subText : "명확하고 유지 관리 가능한 코드를 작성하기 위해 노력합니다.",
                subTextHtml : true,
                imagePath : devPhilosophyImage
            },
            selfIntroduction : {
              mainText : "자기 소개",
                mainTextHtml : false,
                subText : `<label style="display: inline-block;text-align:start;line-height: var(--Spacer-5);">안녕하세요. <br>
                컴퓨터공학을 전공하고 3년 이상의 다양한 SI 개발 경력을 보유한 개발자 <strong>한진섭</strong>입니다.<br>
                저는 <strong>사용자 친화적</strong>이고 <strong>프로세스를 철저히 준수</strong>하고 정확한 프로그래밍을 통해 <strong>안정적</strong>이고 <strong>신뢰</strong>할 수 있는 결과물을 개발하는 데 집중하는 편이며, <strong>공통화</strong>와 <strong>표준화</strong>를 통해 <strong>효율성</strong>을 높이는 것에 강점을 가지고 있습니다. 
                세부 사항에 대한 <strong>꼼꼼함</strong>과 <strong>지속적인 학습에 대한 열정</strong>을 바탕으로 <strong>창의적인 문제 해결</strong>을 즐깁니다.<br>
                앞으로도 의미 있는 프로젝트에 기여하며 개발자로서 성장하는 것을 목표로 하고 있습니다. 감사합니다.</label>`,
                subTextHtml : true
            }
        },
        timeline : {
            data : [
                
            ]
        }
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
                imagePath : personalityImage
            },
            devPhilosophy : {
                mainText : "Code with purpose",
                mainTextHtml : false,
                subText : "Always focused on delivering value through clear, maintainable code.",
                subTextHtml : true,
                imagePath : devPhilosophyImage
            },
            selfIntroduction : {
              mainText : "Self introduction",
                mainTextHtml : false,
                subText : `<label style="display: inline-block; text-align: start; line-height: var(--Spacer-5);">
                    Hello, <br>
                    I am <strong>Jinseob Han</strong>, a developer with a major in computer engineering and over 3 years of diverse experience in SI development.<br>
                    I focus on creating <strong>user-friendly</strong> and <strong>reliable</strong> solutions by adhering to <strong>rigorous processes</strong> and ensuring <strong>accurate programming</strong>. I excel at enhancing <strong>efficiency</strong> through <strong>standardization</strong> and <strong>unification</strong>. 
                    I enjoy <strong>creative problem-solving</strong> and take pride in my <strong>attention to detail</strong> and <strong>passion for continuous learning</strong>.<br>
                    My goal is to contribute to meaningful projects and continue growing as a developer. Thank you.
                </label>
                `,
                subTextHtml : true
            }
        },
        timeline : {
            data : [
                {
                    date : "2025.02",
                    eventName : "동국대학교 졸업",
                    eventDetail : `동국대학교 컴퓨터공학부 정보통신공학전공 졸업`
                },
                {
                    date : "2017.01",
                    eventName : "동국대학교 입학",
                    eventDetail : `동국대학교 컴퓨터공학부 정보통신공학전공 입학`
                }
            ]
        }
    }
  },
  mutations: {
    setExperience(state, monthAge ) {
        state.en.about.experience.mainText = `${monthAge.age} year${monthAge.age!==1?"s":""}  ${monthAge.month} month${monthAge.month!==1?"s":""}`;
        state.ko.about.experience.mainText = `${monthAge.age} 년  ${monthAge.month} 개월`;
    },
    setLang(state, newLang){
        store.state.system.lang = newLang;
    }
  },
  actions: {
    calculateAgeFromBirthDate({ commit, state }) {
        const monthAge = calculateAge(state.userInfo.expDate);  // 생년월일로 나이 계산
        commit('setExperience', monthAge);  // 계산된 나이를 state에 저장
    },
    changeLanguage({ commit, state },payload){
        commit('setLang',payload.lang);  // 계산된 나이를 state에 저장
    }
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