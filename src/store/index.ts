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
                introduction: "<strong>프런트엔드</strong>부터 <strong>Back-end</strong>까지,<br>개발의 전체 스펙트럼을 탐구하는 개발자.",
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
                    type : "company-project",
                    date : "2024.08",
                    eventName : "핀테크산업협회 디지털경제금융연구원 홈페이지 구축",
                    eventDetail : `
                        핀테크산업협회 디지털경제금융연구원 홈페이지를 구축하는 프로젝트<br><hr/>
                        Front-end 개발 담당`,
                    evnentDetailHtml : true
                },
                {   
                    type : "company-project",
                    date : "2024.07 ~ 2024.08",
                    eventName : "롯데마트 전자저널 구축",
                    eventDetail : `
                        롯데마트에서 영수증을 조회 할 수 있는 전자저널을 재구축하는 프로젝트<br><hr/>
                        Front-end 개발 담당, 교육 담당`,
                    evnentDetailHtml : true
                },
                {
                    date : "2024.02",
                    eventName : "동국대학교 수료",
                    eventDetail : `동국대학교 컴퓨터공학부 정보통신공학전공 수료`
                },
                {   
                    type : "personal-project",
                    date : "2024.01 ~",
                    eventName : "데이터 테이블 컴포넌트 개발",
                    eventDetail : `
                        "대용량 데이터 처리" 등 다양한 기능이 들어간 데이터 테이블 컴포넌트를 제작하는 프로젝트<br><hr>
                        1인 프로젝트
                    `,
                    evnentDetailHtml : true
                },
                {   
                    type : "company-project",
                    date : "2023.12 ~ 2024.06",
                    eventName : "직페이 안전결제 개발",
                    eventDetail : `
                        대금지급 등 결제 시, 안전하게 자산을 보호받을 수 있도록 하는 안전결제 시스템 구축 프로젝트<br><hr/>
                        팀장 / 안전결제 파트, 공통 파트 개발, "대금 지급 프로세스" 등 핵심 프로세스 재설계`,
                    evnentDetailHtml : true
                },
                {   
                    type : "personal-project",
                    date : "2023.06",
                    eventName : "트리 컴포넌트 개발",
                    eventDetail : `
                        "트리 내 이동 시, 데이터 변경" 등 다양한 기능이 들어간 트리 컴포넌트를 제작하는 프로젝트<br><hr>
                        1인 프로젝트 / "전주시 의료,돌봄 통합지원 시스템 개발" 프로젝트에서 사용
                    `,
                    evnentDetailHtml : true
                },
                {   
                    type : "company-project",
                    date : "2023.03 ~ 2023.11",
                    eventName : "전주시 의료,돌봄 통합지원 시스템 개발",
                    eventDetail : `
                        전주시 노인분들의 의료,돌봄 필요도를 조사하고 지원 대상저를 선별 및 선정하여 관리하는 프로젝트<br><hr/>
                        팀장 / "지원 대상자 선별 프로세스" 등 핵심 프로세스 설계 및 개발`,
                    evnentDetailHtml : true
                },
                {   
                    type : "personal-project",
                    date : "2023.03 ~ 2023.06",
                    eventName : "캡스톤 디자인",
                    eventDetail : `
                        AI를 활용하여 웹소설 주인공 생성, 주인공 모델을 학습하여 일러스트레이션 생성하는 프로젝트<br><hr/>
                        팀장 (4인 프로젝트) / 웹페이지 전체 개발`,
                    evnentDetailHtml : true
                },
                {
                    type : "company-project",
                    date : "2022.03 ~ 2023.02",
                    eventName : "한국가스안전공사 ERP 개발",
                    eventDetail : `
                        한국가스안전공사 차세대 정보시스템 구축 프로젝트<br><hr/>
                        안전관리 파트 개발, 진단인증, 유해화학 파트 담당
                        `,
                    evnentDetailHtml : true
                },
                {
                    type : "company-project",
                    date : "2021.10 ~ 2022.02",
                    eventName : "KITRI BtoB 플랫폼 개발",
                    eventDetail : `
                        KITRI를 통해 BtoB간 프로젝트 생성 및 관리하는 플랫폼 구축<br><hr/>
                        "KITRI BtoB 지원업무 프로세스" 개발`,
                    evnentDetailHtml : true
                },
                {
                    date : "2021.07",
                    eventName : "전역",
                    eventDetail : `대한민국 육군 병장 만기 전역<br>
                    (제6보병사단)`,
                    evnentDetailHtml : true
                },
                {
                    date : "2017.03",
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