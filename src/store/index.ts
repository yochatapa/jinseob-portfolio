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

import gasLogo from "@/assets/projects/gas-logo.svg"
import lotteMartLogo from "@/assets/projects/lotte-mart-logo.png"
import jeonjuLogo from "@/assets/projects/jeonju-logo.png"
import kitriLogo from "@/assets/projects/KITRI-logo.svg"
import defiLogo from "@/assets/projects/defi-logo.svg"
import zikpayLogo from "@/assets/projects/zikpay-logo.svg"
import treeComponent from "@/assets/projects/tree-component.svg"
import gridComponent from "@/assets/projects/grid-component.svg"
import novaiLogo from "@/assets/projects/NOVAI.svg"
import miniLinux from "@/assets/projects/mini-linux.svg"
import textEditor from "@/assets/projects/text-editor.svg"

import htmlLogo from "@/assets/skills/html-logo.svg"
import jsLogo from "@/assets/skills/js-logo.png"
import cssLogo from "@/assets/skills/css-logo.png"
import vueLogo from "@/assets/skills/vue-logo.png"
import vuexLogo from "@/assets/skills/vuex-logo.png"
import jqueryLogo from "@/assets/skills/jquery-logo.png"
import tsLogo from "@/assets/skills/ts-logo.svg"
import javaLogo from "@/assets/skills/java-logo.png"
import springLogo from "@/assets/skills/spring-logo.png"
import pythonLogo from "@/assets/skills/python-logo.png"
import flaskLogo from "@/assets/skills/flask-logo.png"
import mysqlLogo from "@/assets/skills/mysql-logo.svg"
import oracleLogo from "@/assets/skills/oracle-logo.png"
import gitLogo from "@/assets/skills/git-logo.png"
import vsCodeLogo from "@/assets/skills/vs-code-logo.png"
import figmaLogo from "@/assets/skills/figma-logo.png"
import cLangLogo from "@/assets/skills/c-language-logo.svg"
import vuepressLogo from "@/assets/skills/vuepress-logo.png"
import dockerLogo from "@/assets/skills/docker-logo.png"

interface State {
    userInfo : {
        koreanName  : string,
        englishName : string,
        expDate : string
    },
    system : {
        lang : "ko" | "en",
        message : Object,
    },
    about : About,
    timeline : Timeline,
    projects : Array<Projects>,
    skills : Array<SkillsData>
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

export interface Projects {
    id : string,
    name : string | langObject,
    description : string | langObject
    role : string | langObject
    type : string,
    imagePath : string,
    skills : Array<string>,
    tasks : Array<string | langObject>,
    problemSolvings : Array<ProblemSolving>,
    impressions : Array<string | langObject>,
}

export interface SkillsData {
    name : string,
    proficiency : number,
    type : string,
    important?: boolean,
    imagePath : string
}

interface langObject{
    ko : string | boolean | undefined,
    en : string | boolean | undefined
}

interface ProblemSolving{
    problem : string | langObject,
    solution : string | langObject,
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
            lang : "en",
            message : {
                loading : {
                    ko : "로딩중입니다...",
                    en : "Loading..."
                },
                pageNotFound : {
                    ko : "페이지를 찾을 수 없습니다.",
                    en : "Page Not Found."
                },
            }
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
                    en : "Coding with purpose"
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
                        I enjoy <strong>creative problem-solution</strong> and take pride in my <strong>attention to detail</strong> and <strong>passion for continuous learning</strong>.<br>
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
        projects :[
            {
                id : "pjt_01",
                name : {
                    ko : "한국가스안전공사 차세대 정보시스템",
                    en : "KGS Next-Generation Information System",
                },
                description : {
                    ko : "",
                    en : "",
                },
                role : {
                    ko : "",
                    en : "",
                },
                type : "company-project",
                imagePath : gasLogo,
                skills : [],
                tasks : [],
                problemSolvings : [],
                impressions : [] 
            },
            {
                id : "pjt_02",
                name : {
                    ko : "전주시 의료,돌봄 통합지원 시스템",
                    en : "Integrated Medical&Care Support System",
                },
                description : {
                    ko : `전주시에 거주하는 노인분들의 의료,돌봄 필요도를 조사하고 지원 대상자를 선별 및 선정하여 관리하는 프로젝트입니다.`,
                    en : `This is a project to assess the healthcare and care needs of senior residents in Jeonju City, identify and select eligible support recipients, and manage their information.`,
                },
                role : {
                    ko : `DB 설계, 프론트엔드 개발, 백엔드 개발`,
                    en : `Database Design, Frontend Development, Backend Development`,
                },
                type : "personal-project",
                imagePath : jeonjuLogo,
                skills : ['Javascript','HTML5',"CSS3","MySQL","JAVA","Spring Framework",'Docker'],
                tasks : [
                    {
                        ko : "프로세스와 기능에 맞는 데이터 베이스 설계",
                        en : "Design the Database According to the Processes and Functions",
                    },
                    {
                        ko : "통합지원회의를 통한 지원 대상자 선별 프로세스 설계 및 개발",
                        en : "Design and Develop the Support Recipient Selection Process through Integrated Support Meetings",
                    },
                    {
                        ko : "필요도 조사 등 다양한 설문지를 동적으로 만들 수 있도록 설계 및 개발",
                        en : "Design and Develop a System to Dynamically Create Various Questionnaires, Including Needs Assessments",
                    },
                    {
                        ko : "사용자 관리, 코드 관리 등 관리자 메뉴 개발",
                        en : "Develop Admin Menu for User Management, Code Management, and Other Features",
                    },
                    {
                        ko : "메일, 카카오톡 알림 기능을 통한 알림 전송",
                        en : "Send Notifications via Email and KakaoTalk Alert Features",
                    },
                    {
                        ko : "Docker를 활용하여 개발,운영환경 세팅",
                        en : "Set Up Development and Production Environments Using Docker",
                    },
                ],
                problemSolvings : [
                    {
                        problem : {
                            ko : "잦은 조사지 변경으로 인해, 데이터 수집 및 관리의 어려움이 있습니다.",
                            en : "There are difficulties in data collection and management due to frequent changes in the survey questionnaire.",
                        },
                        solution : {
                            ko : "관리자가 조사지 항목을 조합하여 동적으로 조사지를 생성할 수 있도록 기능을 개발하였습니다. 이로 인해, 기존 18개의 조사지와 향후 추가 될 조사지도 대응가능하도록 개발했습니다.",
                            en : "I developed a feature that allows administrators to dynamically create surveys by combining survey question items. As a result, it was designed to accommodate the existing 18 surveys as well as any future surveys that may be added.",
                        },
                    },
                    {
                        problem : {
                            ko : "상위 기관에서 승인하지 않았으나, 하위 기관에서 정보가 누락되어 지원 대상자가 아닌 사람을 지원하는 경우가 있습니다.",
                            en : "There are cases where individuals who are not eligible for support are mistakenly supported by lower-level institutions, even though the upper-level institution did not approve them.",
                        },
                        solution : {
                            ko : "상위 기관의 통합지원회의에서 미승인 되었을 경우, 하위 기관에서 지원 대상자에게 지원할 수 없도록 데이터 처리를 했습니다.",
                            en : "I handled the data processing to prevent lower-level institutions from providing support to ineligible individuals when they were not approved in the integrated support meeting of the upper-level institution.",
                        },
                    },
                    {
                        problem : {
                            ko : "조사자들이 일정을 잊어버려서 조사를 하지 못하는 경우가 많습니다.",
                            en : "There are many cases where surveyors forget the schedule and fail to conduct the survey.",
                        },
                        solution : {
                            ko : "메일, 카카오톡 알림 기능을 통해 조사일 하루 전, 알림 발송이 되도록 기능 개발을 했습니다. 또한, 조사자가 로그인 시, 메인화면에 달력 컴포넌트를 배치하고 알림이 왔음을 띄워주며 조사자가 일정을 잊지 않도록 했습니다.",
                            en : "I developed a notification feature that sends reminders one day before the survey through email and KakaoTalk alert functions. Additionally, when surveyors log in, a calendar component is placed on the main screen, and notifications are displayed to remind them, ensuring that they do not forget their schedules.",
                        },
                    },
                    {
                        problem : {
                            ko : "조사자는 태블릿을 사용하기 때문에 각 카드의 크기를 터치로 자유롭게 수정할 수 있었으면 좋겠습니다.",
                            en : "Since the surveyors use tablets, they would like to be able to freely adjust the size of each card by touch.",
                        },
                        solution : {
                            ko : "각 카드는 상하 또는 좌우로 배치하고 각 카드 중간에는 크기 조절을 위한 핸들러를 배치하여 핸들러 이동을 통해 각 카드의 크기를 조절할 수 있도록 했습니다.",
                            en : "Each card is arranged vertically or horizontally, and a handler is placed in the center of each card. By moving the handler, the size of each card can be adjusted.",
                        },
                    },
                    // {
                    //     problem : {
                    //         ko : "상위 기관에서 사용하는 테이블, 컬럼 구조 일부는 그대로 맞추어주었으면 함",
                    //         en : "Since the surveyors use tablets, they would like to be able to freely adjust the size of each card by touch.",
                    //     },
                    //     solution : {
                    //         ko : "각 카드는 상하 또는 좌우로 배치하고 각 카드 중간에는 크기 조절을 위한 핸들러를 배치하여 핸들러 이동을 통해 각 카드의 크기를 조절할 수 있도록 함",
                    //         en : "Each card is arranged vertically or horizontally, and a handler is placed in the center of each card. By moving the handler, the size of each card can be adjusted.",
                    //     },
                    // },
                ],
                impressions : [
                    {
                        ko : "다양한 사용자(공무원, 조사자, 서비스 제공자 등)가 사용하는 시스템이고, 다양한 기기(PC, 태블릿)로 접속하는 업무 시스템이기 때문에 각 상황에서 자연스럽게 화면이 표출되도록 개발하면서 다양한 환경을 고려하며 개발하는 것의 중요성을 느꼈습니다.",
                        en : "The system is used by various users (such as government officials, surveyors, service providers, etc.) and accessed from different devices (PCs, tablets). Therefore, it was developed to ensure that the screen is displayed naturally in each situation.",
                    },
                    {
                        ko : "Docker를 사용해 개발, 검증, 운영 서버를 구성하면서 각 환경을 일관되게 유지할 수 있어 환경 차이로 인한 문제를 줄일 수 있었습니다. 이를 통해 빠른 배포와 효율적인 자원 관리의 중요성을 깨달았습니다.",
                        en : "By using Docker to set up development, testing, and production servers, I was able to maintain consistency across environments and reduce issues caused by environmental differences. This made me realize the importance of fast deployment and efficient resource management.",
                    },
                ]
            },
            {
                id : "pjt_03",
                name : {
                    ko : "직페이 안전결제",
                    en : "ZIKPAY",
                },
                description : {
                    ko : "",
                    en : "",
                },
                role : {
                    ko : "",
                    en : "",
                },
                type : "personal-project",
                imagePath : zikpayLogo,
                skills : [],
                tasks : [],
                problemSolvings : [],
                impressions : [] 
            },
            {
                id : "pjt_04",
                name : {
                    ko : "KITRI BtoB 플랫폼",
                    en : "KITRI BtoB Platform",
                },
                description : {
                    ko : "",
                    en : "",
                },
                role : {
                    ko : "",
                    en : "",
                },
                type : "company-project",
                imagePath : kitriLogo,
                skills : [],
                tasks : [],
                problemSolvings : [],
                impressions : [] 
            },
            {
                id : "pjt_05",
                name :{
                    ko : "롯데마트 전자저널",
                    en : "Lotte Mart Electronic Journal",
                },
                description : {
                    ko : "",
                    en : "",
                },
                role : {
                    ko : "",
                    en : "",
                },
                type : "company-project",
                imagePath : lotteMartLogo,
                skills : [],
                tasks : [],
                problemSolvings : [],
                impressions : [] 
            },
            {
                id : "pjt_06",
                name : {
                    ko : "디지털 경제금융연구원 홈페이지",
                    en : "DEFI Hompage",
                },
                description : {
                    ko : "",
                    en : "",
                },
                role : {
                    ko : "",
                    en : "",
                },
                type : "company-project",
                imagePath : defiLogo,
                skills : [],
                tasks : [],
                problemSolvings : [],
                impressions : [] 
            },
            {
                id : "pjt_07",
                name : {
                    ko : "트리 컴포넌트",
                    en : "Tree Component",
                },
                description : {
                    ko : "",
                    en : "",
                },
                role : {
                    ko : "",
                    en : "",
                },
                type : "personal-project",
                imagePath : treeComponent,
                skills : [],
                tasks : [],
                problemSolvings : [],
                impressions : [] 
            },
            {
                id : "pjt_08",
                name : {
                    ko : "그리드 컴포넌트",
                    en : "Grid Component",
                },
                description : {
                    ko : "",
                    en : "",
                },
                role : {
                    ko : "",
                    en : "",
                },
                type : "personal-project",
                imagePath : gridComponent,
                skills : [],
                tasks : [],
                problemSolvings : [],
                impressions : [] 
            },
            {
                id : "pjt_09",
                name : {
                    ko : "캡스톤 디자인",
                    en : "Capstone Design",
                },
                description : {
                    ko : "",
                    en : "",
                },
                role : {
                    ko : "",
                    en : "",
                },
                type : "personal-project",
                imagePath : novaiLogo,
                skills : [],
                tasks : [],
                problemSolvings : [],
                impressions : [] 
            },
            {
                id : "pjt_10",
                name : {
                    ko : "미니 OS 시스템",
                    en : "Mini OS System",
                },
                description : {
                    ko : "",
                    en : "",
                },
                role : {
                    ko : "",
                    en : "",
                },
                type : "personal-project",
                imagePath : miniLinux,
                skills : [],
                tasks : [],
                problemSolvings : [],
                impressions : [] 
            },
            {
                id : "pjt_11",
                name : {
                    ko : "텍스트 에디터",
                    en : "Text Editor",
                },
                description : {
                    ko : "",
                    en : "",
                },
                role : {
                    ko : "",
                    en : "",
                },
                type : "personal-project",
                imagePath : textEditor,
                skills : [],
                tasks : [],
                problemSolvings : [],
                impressions : [] 
            }
        ],
        skills : [
            {
                name : "HTML5",
                proficiency : 5,
                type : "frontend",
                imagePath : htmlLogo,
            },
            {
                name : "Javascript",
                proficiency : 5,
                type : "frontend",
                important : true,
                imagePath : jsLogo,
            },
            {
                name : "CSS3",
                proficiency : 5,
                type : "frontend",
                important : true,
                imagePath : cssLogo,
            },
            {
                name : "Vue.js",
                proficiency : 4,
                type : "frontend",
                important : true,
                imagePath : vueLogo,
            },
            {
                name : "Vuex",
                proficiency : 4,
                type : "frontend",
                imagePath : vuexLogo,
            },
            {
                name : "typescript",
                proficiency : 4,
                type : "frontend",
                imagePath : tsLogo,
            },
            {
                name : "jQuery",
                proficiency : 5,
                type : "frontend",
                important : true,
                imagePath : jqueryLogo,
            },
            {
                name : "MySQL",
                proficiency : 5,
                type : "backend",
                important : true,
                imagePath : mysqlLogo,
            },
            {
                name : "ORACLE",
                proficiency : 4,
                type : "backend",
                important : true,
                imagePath : oracleLogo,
            },
            {
                name : "JAVA",
                proficiency : 4,
                type : "backend",
                imagePath : javaLogo,
            },
            {
                name : "Spring Framework",
                proficiency : 3,
                type : "backend",
                imagePath : springLogo,
            },
            {
                name : "Python",
                proficiency :3,
                type : "backend",
                imagePath : pythonLogo,
            },
            {
                name : "Flask",
                proficiency : 2,
                type : "backend",
                imagePath : flaskLogo,
            },
            {
                name : "Git",
                proficiency : 4,
                type : "etc",
                important : true,
                imagePath : gitLogo,
            },
            {
                name : "Docker",
                proficiency : 3,
                type : "etc",
                imagePath : dockerLogo,
            },
            {
                name : "VS Code",
                proficiency : 5,
                type : "etc",
                imagePath : vsCodeLogo,
            },
            {
                name : "figma",
                proficiency : 3,
                type : "etc",
                imagePath : figmaLogo,
            },
            {
                name : "C",
                proficiency : 4,
                type : "etc",
                imagePath : cLangLogo,
            },
            {
                name : "vuepress",
                proficiency : 4,
                type : "etc",
                imagePath : vuepressLogo,
            },
        ]
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