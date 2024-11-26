import { markRaw, type Component } from 'vue';
import { createStore } from 'vuex';
import modal from './modal';

import NameCard from '@/components/card/NameCard.vue';
import Basic1X1 from '@/components/card/Basic1X1.vue';
import FlipCard from '@/components/card/FlipCard.vue';

import userImage from "@/assets/main-user-image.png"
import experienceImage from "@/assets/work-experience.png"
import schoolImage from "@/assets/dongguk-university.png"
import personalityImage from "@/assets/personality-problem-solve.png"
import devPhilosophyImage from "@/assets/clean-code.png"
import gasLogo from "@/assets/gas-logo.svg"
import lotteMartLogo from "@/assets/lotte-mart-logo.png"
import jeonjuLogo from "@/assets/jeonju-logo.png"
import kitriLogo from "@/assets/KITRI-logo.svg"
import defiLogo from "@/assets/defi-logo.svg"
import zikpayLogo from "@/assets/zikpay-logo.svg"
import treeComponent from "@/assets/tree-component.svg"
import gridComponent from "@/assets/grid-component.svg"
import novaiLogo from "@/assets/NOVAI.svg"
import miniLinux from "@/assets/mini-linux.svg"
import textEditor from "@/assets/text-editor.svg"

interface State {
    userInfo : {
        koreanName  : string,
        englishName : string,
        expDate : string
    },
    system : {
        lang : "ko" | "en"
    },
    about : About,
    timeline : Timeline,
    projects : Projects,
    skills : Skills
}

interface About {
    nameCard : {
        introduction : langObject | string,
        introductionHtml?: langObject | boolean | undefined,
        imagePath : langObject | string | undefined,
        colspan : number,
        rowspan : number,
        template : Component
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

interface Projects {
    data : Array<Object>,
}

interface Skills {
    advanced : Array<Object>,
    intermediate : Array<Object>,
    beginner : Array<Object>,
}

interface langObject{
    ko : string | boolean | undefined,
    en : string | boolean | undefined
}

interface InterfaceBasic1X1 {
    mainText : langObject | string | undefined,
    mainTextHtml?: langObject | boolean | undefined
    subText : langObject | string | undefined,
    subTextHtml?: langObject | boolean | undefined,
    imagePath?: langObject | string | undefined,
    colspan : number,
    rowspan : number,
    template : Component,
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
        about : {
            nameCard : {
                introduction: {
                    ko : "<strong>프런트엔드</strong>부터 <strong>Back-end</strong>까지,<br>개발의 전체 스펙트럼을 탐구하는 개발자.",
                    en : "From <strong>front-end</strong> to <strong>back-end</strong>,<br>Developer exploring the full spectrum.",
                },
                introductionHtml : {
                    ko : true,
                    en : true
                },
                imagePath   :  userImage,
                colspan : 1,
                rowspan : 2,
                template : markRaw(NameCard)
            },
            experience : {
                mainText : {
                    ko : undefined,
                    en : undefined
                },
                subText : {
                    ko : "2021.10 부터 개발 중",
                    en : "Development career since 2021.10"
                },
                imagePath : experienceImage,
                colspan : 1,
                rowspan : 1,
                template : markRaw(Basic1X1),
            },
            school : {
                mainText : {
                    ko : "동국대학교",
                    en : "Dongguk University"
                },
                subText : {
                    ko : "컴퓨터공학부 정보통신공학전공",
                    en : "Dept. of <strong>Computer Engineering</strong>"
                },
                subTextHtml : {
                    ko : false,
                    en : true
                },
                imagePath : schoolImage,
                colspan : 1,
                rowspan : 1,
                template : markRaw(Basic1X1),
            },
            personality : {
                mainText : {
                    ko : "문제 해결 능력",
                    en : "Problem solver"
                },
                subText : {
                    ko : "문제를 분석적으로 접근하여 효율적인 솔루션을 찾습니다.",
                    en : "Approach challenges analytically to find efficient solutions."
                },
                imagePath : personalityImage,
                colspan : 1,
                rowspan : 1,
                template : markRaw(Basic1X1),
            },
            devPhilosophy : {
                mainText : {
                    ko : "목적이 있는 코딩",
                    en : "Problem solver"
                },
                subText : {
                    ko : "명확하고 유지 관리 가능한 코드를 작성하기 위해 노력합니다.",
                    en : "Always focused on delivering value through clear, maintainable code."
                },
                imagePath : devPhilosophyImage,
                colspan : 1,
                rowspan : 1,
                template : markRaw(Basic1X1),
            },
            selfIntroduction : {
                mainText : {
                    ko : "자기 소개",
                    en : "Self Introduction"
                },
                subText : {
                    ko : `<label style="display: inline-block;text-align:start;line-height: var(--Spacer-5);">
                        안녕하세요. <br>
                        컴퓨터공학을 전공하고 3년 이상의 다양한 SI 개발 경력을 보유한 개발자 <strong>한진섭</strong>입니다.<br>
                        저는 <strong>사용자 친화적</strong>이고 <strong>프로세스를 철저히 준수</strong>하고 정확한 프로그래밍을 통해 <strong>안정적</strong>이고 <strong>신뢰</strong>할 수 있는 결과물을 개발하는 데 집중하는 편이며, <strong>공통화</strong>와 <strong>표준화</strong>를 통해 <strong>효율성</strong>을 높이는 것에 강점을 가지고 있습니다. 
                        세부 사항에 대한 <strong>꼼꼼함</strong>과 <strong>지속적인 학습에 대한 열정</strong>을 바탕으로 <strong>창의적인 문제 해결</strong>을 즐깁니다.<br>
                        앞으로도 의미 있는 프로젝트에 기여하며 개발자로서 성장하는 것을 목표로 하고 있습니다. 감사합니다.
                    </label>`,
                    en : `<label style="display: inline-block; text-align: start; line-height: var(--Spacer-5);">
                        Hello, <br>
                        I am <strong>Jinseob Han</strong>, a developer with a major in computer engineering and over 3 years of diverse experience in SI development.<br>
                        I focus on creating <strong>user-friendly</strong> and <strong>reliable</strong> solutions by adhering to <strong>rigorous processes</strong> and ensuring <strong>accurate programming</strong>. I excel at enhancing <strong>efficiency</strong> through <strong>standardization</strong> and <strong>unification</strong>. 
                        I enjoy <strong>creative problem-solving</strong> and take pride in my <strong>attention to detail</strong> and <strong>passion for continuous learning</strong>.<br>
                        My goal is to contribute to meaningful projects and continue growing as a developer. Thank you.
                    </label>
                    `
                },
                subTextHtml : {
                    ko : true,
                    en : true
                },
                colspan : 3,
                rowspan : 1,
                template : markRaw(Basic1X1),
            }
        },
        timeline : {
            data : [
                {
                    date : "2025.02",
                    eventName : {
                        ko : "동국대학교 졸업",
                        en : "Graduated from Dongguk University",
                    },
                    eventDetail : {
                        ko : `동국대학교 컴퓨터공학부 정보통신공학전공 졸업`,
                        en : `Graduated from Dongguk University, Department of Computer Science and Engineering, Major in Information and Communication Engineering`
                    }
                },
                {   
                    type : "company-project",
                    date : "2024.08",
                    eventName : {
                        ko : "핀테크산업협회 디지털경제금융연구원 홈페이지 구축",
                        en : "Building the DEFI Website",
                    },
                    eventDetail : {
                        ko : `
                            핀테크산업협회 디지털경제금융연구원 홈페이지를 구축하는 프로젝트<br><hr/>
                            Front-end 개발 담당`,
                        en : `
                            A project to develop the DEFI website
                            <br><hr/>
                            Responsible for Front-end Development`,
                    },
                    evnentDetailHtml : {
                        ko : true,
                        en : true
                    }
                },
                {   
                    type : "company-project",
                    date : "2024.07 ~ 2024.08",
                    eventName : {
                        ko : "롯데마트 전자저널 구축",
                        en : "Lotte Mart Electronic Journal Development"
                    },
                    eventDetail : {
                        ko : `
                            롯데마트에서 영수증을 조회 할 수 있는 전자저널을 재구축하는 프로젝트<br><hr/>
                            Front-end 개발 담당, 교육 담당`,
                        en : `A project to rebuild the electronic journal system for retrieving receipts at Lotte Mart
                            <br><hr/>
                            Responsible for Front-end Development and Training`
                    },
                    evnentDetailHtml : {
                        ko : true,
                        en : true
                    }
                },
                {
                    date : "2024.02",
                    eventName : {
                        ko : "동국대학교 수료",
                        en : "Completed coursework at Dongguk University"
                    },
                    eventDetail : {
                        ko : `동국대학교 컴퓨터공학부 정보통신공학전공 수료`,
                        en : `Completed coursework at Dongguk University, Department of Computer Science and Engineering, Major in Information and Communication Engineering`
                    }
                },
                {   
                    type : "personal-project",
                    date : "2024.01 ~",
                    eventName : {
                        ko : "그리드 컴포넌트 개발",
                        en : "Grid Component Development"
                    },
                    eventDetail : {
                        ko : `
                            "대용량 데이터 처리" 등 다양한 기능이 들어간 그리드 컴포넌트를 제작하는 프로젝트<br><hr>
                            1인 프로젝트
                        `,
                        en : `
                            A project to create a grid component with various features such as "large-scale data processing"
                            <br><hr/>
                            Solo Project
                        `
                    },
                    evnentDetailHtml : {
                        ko : true,
                        en : true
                    }
                },
                {   
                    type : "company-project",
                    date : "2023.12 ~ 2024.06",
                    eventName : {
                        ko : "직페이 안전결제 개발",
                        en : "ZIKPAY Secure Payment Development"
                    },
                    eventDetail : {
                        ko : `
                            대금지급 등 결제 시, 안전하게 자산을 보호받을 수 있도록 하는 안전결제 시스템 구축 프로젝트<br><hr/>
                            안전결제 파트, 공통 파트 개발, "대금 지급 프로세스" 등 핵심 프로세스 재설계`,
                        en : `
                            A project to build a secure payment system ensuring asset protection during transactions such as payments and settlements
                            <br><hr/>
                            Responsible for developing the Secure Payment and Common Modules, including redesigning core processes like the "Payment Settlement Process`
                    },
                    evnentDetailHtml : {
                        ko : true,
                        en : true
                    }
                },
                {   
                    type : "personal-project",
                    date : "2023.06",
                    eventName : {
                        ko : "트리 컴포넌트 개발",
                        en : "Tree Component Development"
                    },
                    eventDetail : {
                        ko : `
                            "트리 내 이동 시, 데이터 변경" 등 다양한 기능이 들어간 트리 컴포넌트를 제작하는 프로젝트<br><hr>
                            1인 프로젝트 / "전주시 의료,돌봄 통합지원 시스템 개발" 프로젝트에서 사용
                        `,
                        en : `
                            A project to create a tree component with various features, such as "data modification during node movement within the tree"
                            <br><hr/>
                            Solo Project / Used in the "Jeonju City Integrated Healthcare and Care Support System Development" project
                        `
                    },
                    evnentDetailHtml : {
                        ko : true,
                        en : true
                    }
                },
                {   
                    type : "company-project",
                    date : "2023.03 ~ 2023.11",
                    eventName : {
                        ko : "전주시 의료,돌봄 통합지원 시스템 개발",
                        en : "Jeonju City Integrated Healthcare and Care Support System Development"
                    },
                    eventDetail : {
                        ko : `
                            전주시 노인분들의 의료,돌봄 필요도를 조사하고 지원 대상저를 선별 및 선정하여 관리하는 프로젝트<br><hr/>
                            "지원 대상자 선별 프로세스" 등 핵심 프로세스 설계 및 개발`,
                        en : `
                            A project to assess the healthcare and care needs of seniors in Jeonju City, select and manage eligible support recipients
                            <br><hr/>
                            Responsible for designing and developing core processes, including the "Support Recipient Selection Process"`
                    },
                    evnentDetailHtml : {
                        ko : true,
                        en : true
                    }
                },
                {   
                    type : "personal-project",
                    date : "2023.03 ~ 2023.06",
                    eventName : {
                        ko : "캡스톤 디자인",
                        en : "Capstone Design"
                    },
                    eventDetail : {
                        ko : `
                            AI를 활용하여 웹소설 주인공 생성, 주인공 모델을 학습하여 일러스트레이션 생성하는 프로젝트<br><hr/>
                            팀장 (4인 프로젝트) / 웹페이지 전체 개발`,
                        en : `
                            A project to create web novel protagonists using AI and generate illustrations by training protagonist models
                            <br><hr/>
                            Team Leader (4-member project) / Full development of the web page`
                    },
                    evnentDetailHtml : {
                        ko : true,
                        en : true
                    }
                },
                {
                    type : "company-project",
                    date : "2022.03 ~ 2023.02",
                    eventName : {
                        ko : "한국가스안전공사 차세대 정보시스템 개발",
                        en : "KGS Next-Generation Information System Development"
                    },
                    eventDetail : {
                        ko : `
                        한국가스안전공사 차세대 정보시스템 구축 프로젝트<br><hr/>
                        안전관리 파트 개발, 진단인증, 유해화학 파트 담당
                        `,
                        en : `
                        KGS Next-Generation Information System Development
                        <br><hr/>
                        Responsible for the Safety Management Module Development, Diagnostics and Certification, and Hazardous Chemicals Modules
                        `
                    },
                    evnentDetailHtml : {
                        ko : true,
                        en : true
                    }
                },
                {
                    type : "company-project",
                    date : "2021.10 ~ 2022.02",
                    eventName : {
                        ko : "KITRI BtoB 플랫폼 개발",
                        en : "KITRI BtoB Platform Development"
                    },
                    eventDetail : {
                        ko : `
                        KITRI를 통해 BtoB간 프로젝트 생성 및 관리하는 플랫폼 구축<br><hr/>
                        "KITRI BtoB 지원업무 프로세스" 개발`,
                        en : `
                        Building a Platform for Creating and Managing BtoB Projects through KITRI
                        <br><hr/>
                        Developed the "KITRI BtoB Support Workflow"`
                    },
                    evnentDetailHtml : {
                        ko : true,
                        en : true
                    }
                },
                {
                    date : "2021.07",
                    eventName : {
                        ko : "전역",
                        en : "Discharged from Military Service"
                    },
                    eventDetail : {
                        ko : `대한민국 육군 병장 만기 전역<br>
                            (제6보병사단)`,
                        en : `Completed mandatory service as a Sergeant in the Republic of Korea Army
                            <br>
                            (6th Infantry Division)`
                    },
                    evnentDetailHtml : {
                        ko : true,
                        en : true
                    }
                },
                {   
                    type : "personal-project",
                    date : "2019.03 ~ 2019.06",
                    eventName : {
                        ko : "Mini Operating System 구현",
                        en : "Mini Operating System Development"
                    },
                    eventDetail : {
                        ko : `
                        리눅스의 기본 동작 구조와 체계를 이해하고 동일하게 작동 가능한 시스템을 구현하는 프로젝트<br><hr/>
                        팀장 (4인 프로젝트) / 미니리눅스 기능 구현 (전체)`,
                        en : `
                        A project to understand the basic operating structure and system of Linux and implement a system with similar functionality
                        <br><hr/>
                        Team Leader (4-member project) / Implementation of Mini-Linux functionality (entire system)`
                    },
                    evnentDetailHtml : {
                        ko : true,
                        en : true
                    }
                },
                {   
                    type : "personal-project",
                    date : "2017.09 ~ 2017.12",
                    eventName : {
                        ko : "텍스트 에디터 구현",
                        en : "Text Editor Development"
                    },
                    eventDetail : {
                        ko : `
                        자동 저장, 색상 변경 등 다양한 기능이 들어간 텍스트 에디터 구현<br><hr/>
                        1인 프로젝트`,
                        en : `
                        A project to develop a text editor with features such as auto-save, color change, and more
                        <br><hr/>
                        Solo Project`
                    },
                    evnentDetailHtml : {
                        ko : true,
                        en : true
                    }
                },
                {
                    date : "2017.03",
                    eventName : {
                        ko : "동국대학교 입학",
                        en : "Enrolled at Dongguk University"
                    },
                    eventDetail : {
                        ko : `동국대학교 컴퓨터공학부 정보통신공학전공 입학`,
                        en : `Enrolled at Dongguk University, Department of Computer Science and Engineering, Major in Information and Communication Engineering`
                    }
                }
            ]
        },
        projects : {
            data : [
                {
                    mainText : {
                        ko : "한국가스안전공사 차세대 정보시스템",
                        en : "KGS Next-Generation Information System",
                    },
                    type : "company-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : gasLogo,
                },
                {
                    mainText : {
                        ko : "전주시 의료,돌봄 통합지원 시스템",
                        en : "Integrated Medical&Care Support System",
                    },
                    type : "personal-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : jeonjuLogo
                },
                {
                    mainText : {
                        ko : "직페이 안전결제",
                        en : "ZIKPAY",
                    },
                    type : "personal-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : zikpayLogo
                },
                {
                    mainText : {
                        ko : "KITRI BtoB 플랫폼",
                        en : "KITRI BtoB Platform",
                    },
                    type : "company-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : kitriLogo
                },
                {
                    mainText :{
                        ko : "롯데마트 전자저널",
                        en : "Lotte Mart Electronic Journal",
                    },
                    type : "company-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : lotteMartLogo
                },
                {
                    mainText : {
                        ko : "디지털 경제금융연구원 홈페이지",
                        en : "DEFI Hompage",
                    },
                    type : "company-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : defiLogo
                },
                {
                    mainText : {
                        ko : "트리 컴포넌트",
                        en : "Tree Component",
                    },
                    type : "personal-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : treeComponent
                },
                {
                    mainText : {
                        ko : "그리드 컴포넌트",
                        en : "Grid Component",
                    },
                    type : "personal-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : gridComponent
                },
                {
                    mainText : {
                        ko : "캡스톤 디자인",
                        en : "Capstone Design",
                    },
                    type : "personal-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : novaiLogo
                },
                {
                    mainText : {
                        ko : "미니 OS 시스템",
                        en : "Mini OS System",
                    },
                    type : "personal-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : miniLinux
                },
                {
                    mainText : {
                        ko : "텍스트 에디터",
                        en : "Text Editor",
                    },
                    type : "personal-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : textEditor
                }
            ]
        },
        skills : {
            advanced : [
                {
                    mainText : {
                        ko : "한국가스안전공사 차세대 정보시스템",
                        en : "KGS Next-Generation Information System",
                    },
                    type : "company-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : gasLogo,
                },
                {
                    mainText : {
                        ko : "한국가스안전공사 차세대 정보시스템",
                        en : "KGS Next-Generation Information System",
                    },
                    type : "company-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : gasLogo,
                },
                {
                    mainText : {
                        ko : "한국가스안전공사 차세대 정보시스템",
                        en : "KGS Next-Generation Information System",
                    },
                    type : "company-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : gasLogo,
                },
                {
                    mainText : {
                        ko : "한국가스안전공사 차세대 정보시스템",
                        en : "KGS Next-Generation Information System",
                    },
                    type : "company-project",
                    colspan : 1,
                    rowspan : 1,
                    template : markRaw(FlipCard),
                    fileName : 'ProjectsKitri',
                    imagePath : gasLogo,
                },
            ],
            intermediate : [

            ],
            beginner : [

            ]
        }
    },
    mutations: {
        setExperience(state, monthAge ) {
            if(state.about.experience.mainText && typeof state.about.experience.mainText !== "string"){
                state.about.experience.mainText.en = `${monthAge.age} year${monthAge.age!==1?"s":""}  ${monthAge.month} month${monthAge.month!==1?"s":""}`;
                state.about.experience.mainText.ko = `${monthAge.age} 년  ${monthAge.month} 개월`;
            }
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
        getLang(state): 'ko' | 'en' {
            return state.system.lang;
        }
    },
    modules: {
        modal, // 모달 모듈 등록
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