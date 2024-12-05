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
        lang : 'ko' | 'en',
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
                welcomeMainText : {
                    ko : "안녕하세요",
                    en : "Hello"
                },
                welcomeSubText : {
                    ko : "웹 개발자 한진섭입니다!",
                    en : "I'm Web Developer Jinseob!"
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
                            Front-end 개발 담당, DB 설계`,
                        en : `
                            A project to develop the DEFI website
                            <br><hr/>
                            Responsible for Front-end Development, Design the Database`,
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
                            대금지급, 포인트 사용 등 결제 시, 안전하게 자산을 보호받을 수 있도록 하는 안전결제 시스템 구축 프로젝트<br><hr/>
                            안전결제 파트, 공통 파트 개발, "대금 지급 프로세스" 등 핵심 프로세스 재설계`,
                        en : `
                            A project to build a secure payment system that protects assets during transactions, such as payment disbursements and point usage
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
                        안전관리, 공통 파트 개발, 진단인증, 유해화학 파트 담당
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
                    ko : "한국가스안전공사 차세대 정보시스템 구축를 구축하는 프로젝트입니다. 총 9개의 개발 파트(안전관리, 진단인증, 사고점검, 유해화학, 연구개발, 안전교육, 인사, 회계, 공통) 중 진단인증, 유해화학 파트를 메인으로 담당하였으며, 안전관리, 공통 파트에서도 일부 핵심 기능(업소/시설 관리, 간이결재, 파일첨부 등)을 개발하였습니다.",
                    en : `This project involved the development of the next-generation information system for the Korea Gas Safety Corporation. 
                        Among a total of 9 development areas (Safety Management, Diagnostic Certification, Accident Inspection, Hazardous Chemicals, R&D, Safety Education, HR, Accounting, and Common Functions), I primarily handled the Diagnostic Certification and Hazardous Chemicals modules. 
                        Additionally, I contributed to key features in the Safety Management and Common Functions modules, including business/facility management, simplified approval, and file attachment functionality.`,
                },
                role : {
                    ko : "진단인증, 유해화학 파트 담당 / 안전관리, 공통 파트 개발",
                    en : "Responsible for the Certification and Diagnosis and Hazardous Chemicals parts / Developed the Safety Management and Common parts",
                },
                type : "company-project",
                imagePath : gasLogo,
                skills : ['Javascript',"ORACLE","JAVA","Spring Framework",'Nexacro','OZ Report','SVN'],
                tasks : [
                    {
                        ko: "진단인증 파트 담당 - 안전진단결과관리, 송유관 검사, 안전관리자 관리, SMS 업소 관리 등",
                        en: "Responsible for the Certification and Diagnosis part - Safety inspection results management, pipeline inspection, safety manager management, SMS business management, etc.",
                    },
                    {
                        ko: "유해화학 파트 담당 - 유해화학 업소/시설 관리, 유해화학 검사원 배정 및 검사일정관리 등",
                        en: "Responsible for the Hazardous Chemicals part - Hazardous chemical business/facility management, hazardous chemical inspector assignment and inspection schedule management, etc.",
                    },
                    {
                        ko: "안전관리 파트 개발 - 업소/시설 관리, 인증서 관리, 검사원 배정 및 검사일정관리 등",
                        en: "Developed the Safety Management part - Business/facility management, certificate management, inspector assignment and inspection schedule management, etc.",
                    },
                    {
                        ko: "공통 파트 개발 - 간이 결재, 공통 코드 관리, 권한별 메뉴관리 등",
                        en: "Developed the Common part - Simplified approval, common code management, menu management by permissions, etc.",
                    },
                    {
                        ko: `AS-IS 테이블명,컬럼명을 TO-BE 테이블명,컬럼명으로 변경해주는 "테이블, 컬럼명 변환기" 개발`,
                        en: `Developed a "Table & Column Name Converter" to change AS-IS table and column names to TO-BE table and column names.`,
                    },
                    {
                        ko: "새로운 사용해보는 툴(Nexacro)에 맞는 다양한 공통 컴포넌트 개발 (아코디언, 멀티선택 콤보박스 등)",
                        en: "Developed various common components compatible with a new tool (Nexacro) such as accordion and multi-select combo boxes.",
                    },
                ],
                problemSolvings : [
                    {
                        problem: {
                            ko: "AS-IS의 테이블명과 컬럼명이 TO-BE에서 완전히 바뀌어서 많은 어려움이 있었습니다.",
                            en: "The table and column names in AS-IS were completely changed in TO-BE, which caused significant challenges."
                        },
                        solution: {
                            ko: "AS-IS 테이블명,컬럼명을 TO-BE 테이블명,컬럼명으로 변경해주는 \"테이블, 컬럼명 변환기\" 개발하여 불필요한 개발 공수를 단축시켰습니다. AS-IS 쿼리를 파싱하여 테이블명과 컬럼명을 구분한 뒤 TO-BE 테이블명, 컬럼명을 매칭시켜 치환해주었습니다. 치환 성공률은 80% 이상되었으며, AS-IS 컬럼명이 TO-BE 컬럼명과 1:1로 매칭되지 않는 일부 경우에서는 치환이 잘못되는 경우가 일부 존재하였습니다.",
                            en: "Developed a 'Table and Column Name Converter' to transform AS-IS table and column names into TO-BE equivalents, significantly reducing unnecessary development effort. The tool parses AS-IS queries, identifies table and column names, and replaces them with TO-BE counterparts. The replacement success rate exceeded 80%. However, in some cases where AS-IS column names did not have a 1:1 match with TO-BE column names, replacement errors occurred."
                        }
                    },
                    {
                        problem: {
                            ko: "처음 사용하는 툴(Nexacro, OZ Report Tool)이 익숙치 않아서 개발 공수가 많이 들어갑니다.",
                            en: "Significant development effort was required due to unfamiliarity with new tools (Nexacro, OZ Report Tool)."
                        },
                        solution: {
                            ko: "공통으로 사용할 수 있는 컴포넌트(아코디언, 멀티 콤보박스 등)를 만들어서 불필요한 개발을 하지 않도록 도왔습니다.",
                            en: "Created reusable components (e.g., accordion, multi-combo box) to eliminate redundant development efforts."
                        }
                    },
                    {
                        problem: {
                            ko: "현업에서 순환근무로 인해 사용하던 프로세스 외의 전체적인 프로세스에 대해서 모르는 경우가 있습니다.",
                            en: "Due to rotational shifts in business operations, users often lacked understanding of the overall process outside their specific tasks."
                        },
                        solution: {
                            ko: "현업 부서에 직접 방문하여 다양한 사용자를 인터뷰하였고, 이를 종합하여 AS-IS와 대비하여 분석하였습니다. 제가 맡은 진단인증과 유해화학 파트는 개발 전 요구사항의 100% 이상을 수용하여 개발 완료하였습니다.",
                            en: "Visited business departments to conduct interviews with various users and synthesized the findings to analyze them against AS-IS processes. For the Diagnostic Certification and Hazardous Chemicals parts that I handled, over 100% of the requirements were incorporated and successfully developed."
                        }
                    }
                ],
                impressions : [
                    {
                        ko: "현업이 업무에 사용하는 정보시스템인만큼 사용자의 요구사항을 정확히 파악하고 개발을 해야한다는 것을 느꼈습니다.",
                        en: "I realized the importance of accurately understanding and addressing user requirements when developing an information system used directly by business users."
                    },
                    {
                        ko: "불필요한 개발과정을 최대한 줄이고자 다양한 방법들을 고민하고 이를 구현하기 위해 노력하였습니다.",
                        en: "I explored and implemented various methods to minimize unnecessary development processes."
                    },
                    {
                        ko: "차세대 프로젝트인 경우, AS-IS에서 기개발된 내용을 정확히 분석하고 개발된 이유를 명확히 인지하는 것이 중요하다는 것을 느꼈습니다.",
                        en: "In next-generation projects, I recognized the importance of thoroughly analyzing AS-IS developments and clearly understanding the rationale behind them."
                    },
                    {
                        ko: "추후 유지보수를 위해 개발 내용을 문서로 명확히 남기는 것이 중요하다는 것을 느꼈습니다.",
                        en: "I realized the importance of documenting development details clearly for future maintenance."
                    }
                ] 
            },
            {
                id : "pjt_02",
                name : {
                    ko : "전주시 의료,돌봄 통합지원 시스템",
                    en : "Integrated Medical&Care Support System",
                },
                description : {
                    ko : `전주시에 거주하는 노인분들의 의료,돌봄 필요도를 조사하고 지원 대상자를 선별 및 선정하여 관리하는 프로젝트입니다. 
                        국민건강보험공단과 보건복지부, 전주시의 지침에 따라서 노인분들의 건강, 복지욕구 등을 조사하여 상황에 맞는 의료,돌봄 대상자를 선별, 관리하는 프로그램입니다.
                        대상자 선별, 조사, 선정, 관리, 서비스 지원의 의료,돌봄 전 프로세스를 관리하는 프로그램입니다.`,
                    en : `This project involves assessing the medical and care needs of elderly residents in Jeonju, selecting and managing eligible recipients for support. 
                        The program adheres to the guidelines of the National Health Insurance Service, the Ministry of Health and Welfare, and Jeonju City to survey the health and welfare needs of elderly individuals, selecting and managing recipients for appropriate medical and care services.
                        It is a comprehensive program that manages the entire process of medical and care services, including recipient selection, surveys, approval, management, and service provision.`,
                },
                role : {
                    ko : `프론트엔드 개발, 백엔드 개발, DB 설계, 화면 설계`,
                    en : `Frontend Development, Backend Development, Database Design`,
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
                    ko : "직페이 안전결제 시스템",
                    en : "ZIKPAY Secure Payment System",
                },
                description : {
                    ko : `대금지급, 포인트 사용 등 결제 시, 안전하게 자산을 보호받을 수 있도록 하는 안전결제 시스템 구축 프로젝트입니다. 
                        AS-IS는 대금지급에 특화되어 있는 프로세스였으나, TO-BE에서는 실시간 결제, 토큰 종류 추가, 토큰 변환 등의 새로운 프로세스가 추가되며 대금지급 뿐만이 아니라 다양한 결제에서 사용될 수 있도록 개발하였습니다.
                        다양한 결제 상황에서 사용하기 용이하도록 UI/UX와 DB를 모두 재설계하였습니다.`,
                    en : `This project involved building a secure payment system to protect assets during transactions such as payment disbursements and point usage. 
                        While the AS-IS system was specialized for payment disbursements, the TO-BE system introduced new processes such as real-time payments, additional token types and token conversion, expanding its functionality to support various payment scenarios.
                        To accommodate diverse payment situations, the UI/UX and database were entirely redesigned for improved usability and flexibility.`,
                },
                role : {
                    ko : `프로젝트 리더 / 프론트엔드 개발, 백엔드 개발, DB 재설계, 화면 재설계`,
                    en : `Project Leader / Frontend Development, Backend Development, Database Redesign, UI Redesign`,
                },
                type : "personal-project",
                imagePath : zikpayLogo,
                skills : ['Javascript','HTML5',"CSS3","Vue.js","MySQL","JAVA","Spring Framework","Vuex","jQuery","PDFBox"],
                tasks : [
                    {
                        ko : "AS-IS 데이터를 유지한 상태로, TO-BE 요구사항(실시간 결제, 토큰 종류 추가, 지급승인 등)에 적합하도록 프로세스 재설계",
                        en : "Redesigned processes to align with TO-BE requirements (real-time payments, additional token types and token conversion, etc.) while maintaining AS-IS data",
                    },
                    {
                        ko : "일별 토큰/요청 현황, 안전결제 정보 등 결제 현황이 우선시 되는 UI/UX로 변경",
                        en : "Redesigned the UI/UX to prioritize payment status information, such as daily token/request status and secure payment details",
                    },
                    {
                        ko : "실시간으로 사용약정 체결, 토큰 지급, 토큰 변환, 사용약정 금액 증액, 사용약정 금액 감액 처리",
                        en : "Real-time processing of user agreements, token disbursement, token conversion, agreement amount increase, and agreement amount decrease",
                    },
                    {
                        ko : "은행과의 REST API 통신을 통해 가상계좌 발급, 출금 요청, 입출금 확인, 거래내역 대사 기능 구현",
                        en : "Implemented functionalities such as virtual account issuance, withdrawal requests, deposit/withdrawal verification, and transaction reconciliation through REST API communication with the bank.",
                    },
                    {
                        ko : "결제 진행 시, 감사추적인증서 발급",
                        en : "Issuance of audit trail certificates during the payment process",
                    },
                    {
                        ko : "계약서 첨부 후, 전자 서명 오류 수정",
                        en : "Fixed electronic signature errors after attaching the contract document",
                    },
                    {
                        ko : "사용자 관리, 코드 관리 등 관리자 메뉴 개발",
                        en : "Develop Admin Menu for User Management, Code Management, and Other Features",
                    },
                    {
                        ko : "프로젝트 WBS 작성 및 개발 일정 관리",
                        en : "Project WBS creation and development schedule management.",
                    },
                ],
                problemSolvings : [
                    {
                        problem : {
                            ko : "대금 결제만 가능한 현 시스템은 자유로운 결제가 불가능합니다.",
                            en : "The current system, which only supports payment disbursements, does not allow for flexible payments.",
                        },
                        solution : {
                            ko : `"승인토큰"이라는 새로운 종류의 결제 토큰을 추가하여, AS-IS의 대금지급 프로세스는 살리되, 실시간 토큰 지급, 변환, 증액, 감액 등 다양한 결제 기능들을 가능하도록 재설계했습니다.`,
                            en : `By adding a new type of payment token called "Approval Token," I redesigned the system to retain the existing payment disbursement process (AS-IS) while enabling various payment functions such as real-time token disbursement, conversion, increase, and decrease.`,
                        },
                    },
                    {
                        problem : {
                            ko : "AS-IS 시스템은 조건에 따라 숨겨진 화면 구성이 많고 일관성이 없어서 사용자가 시스템을 사용하는데 어려움을 겪습니다.",
                            en : "The AS-IS system has many hidden screen elements based on conditions and lacks consistency, making it difficult for users to navigate the system effectively.",
                        },
                        solution : {
                            ko : `시스템이 메인이 되는 사용약정을 중심으로, 현재 내가 대금 지급인인지 대금 수령인인지 명확하게 표시하였습니다. 결제 진행 시, 알림 기능을 적극 활용하여 사용자가 결제정보에 대해서 놓치지 않도록 하였습니다. 현재 잔액, 미지급액, 거래량 등을 그래프를 포함하여 사용자가 이해하기 쉽도록 개발하였습니다.`,
                            en : `The system clearly indicates whether the user is the payer or the payee, focusing on the user agreement as the central element. During the payment process, the notification feature is actively utilized to ensure users do not miss any payment information. I also developed the system to display current balance, unpaid amounts, transaction volume, etc., in an easy-to-understand format, including graphs.`,
                        },
                    },
                    {
                        problem : {
                            ko : "AS-IS 결제 데이터가 존재하기 때문에 AS-IS 데이터는 유지시켜야 합니다.",
                            en : "Since the AS-IS payment data exists, it is important to preserve the AS-IS data.",
                        },
                        solution : {
                            ko : `AS-IS 테이블과 컬럼은 최소한으로 수정하여 TO-BE 시스템으로 마이그래이션 시 변화를 최소화하였습니다.`,
                            en : `The AS-IS tables and columns were minimally modified to minimize changes during the migration to the TO-BE system.`,
                        },
                    },
                    {
                        problem : {
                            ko : "AS-IS 시스템에서는 대금 결제 지급이 하루에 한 번만 가능합니다.",
                            en : "In the AS-IS system, payment disbursements can only be processed once a day.",
                        },
                        solution : {
                            ko : `입출금 배치의 시간 1분으로 줄여서 실시간에 가깝도록 구현하였고, 하루에 한번 은행과 결제내역 대사를 진행하여 오차가 발생하지 않도록 처리하였습니다.`,
                            en : `The deposit and withdrawal batch time was reduced to one minute, making it nearly real-time. Additionally, daily reconciliation with the bank was implemented to ensure no discrepancies occur in the payment records.`,
                        },
                    },
                ],
                impressions : [
                    {
                        ko : "프로젝트 리더로서 기간 내 성공적으로 프로젝트를 완수 하기위해 WBS를 작성하여 일정관리를 하였고, 팀원들의 역량과 능력을 고려하여 업무 분장을 하였습니다.",
                        en : "As the project leader, I created a Work Breakdown Structure (WBS) to manage the schedule and ensure the successful completion of the project within the given timeframe. I also efficiently delegated tasks, considering the strengths and capabilities of each team member.",
                    },
                    {
                        ko : "고객의 요구사항을 유연하게 대응하되, 개발 방향에 맞지 않는 요구사항은 적절한 대안을 제시하거나 조정하여 프로젝트 목표와 일관성을 유지했습니다. 프로젝트 초기에 요구사항 정의 과정의 중요성에 대해 느끼는 계기가 되었습니다.",
                        en : "I responded flexibly to customer requirements, but for those that didn't align with the development direction, I suggested appropriate alternatives or adjustments to maintain consistency with the project goals. This experience reinforced the importance of the requirements definition phase at the start of a project.",
                    },
                    {
                        ko : "은행과의 REST API 통신을 통해 다양한 금융 기능을 구현하면서, 결제 보안 및 트랜잭션 관리에 대한 깊은 이해를 쌓았습니다.",
                        en : "By implementing various financial functions through REST API communication with the bank, I developed a deep understanding of payment security and transaction management.",
                    },
                    {
                        ko : "불특정 다수의 사용자를 대상으로 하는 서비스를 구현하기 위해 다양한 페르소나를 설정하고, 각 페르소나의 요구사항을 도출하여 분석한 후, 이를 반영하여 UI/UX를 설계하고 구현했습니다.",
                        en : "To implement a service for an unspecified number of users, I defined various personas, derived and analyzed their requirements, and then reflected these insights to design and implement the UI/UX.",
                    },
                ] 
            },
            {
                id : "pjt_04",
                name : {
                    ko : "KITRI BtoB 플랫폼",
                    en : "KITRI BtoB Platform",
                },
                description : {
                    ko : `KITRI를 통해 BtoB간의 프로젝트 생성 및 관리하는 플랫폼 구축하는 프로젝트입니다. 프로젝트 신청 -> 심사 -> 선정 과정을 거쳐 프로젝트를 생성하고, 각 프로젝트에 맞는 전문가를 모집, 선정하여 프로젝트를 진행합니다.
                        프로젝트 진행과정과 결과물까지 관리하는 종합 프로젝트 관리 플랫폼입니다.`,
                    en : `This project involves building a platform for creating and managing B2B projects through KITRI. 
                        The platform facilitates project creation through the process of application, review, and selection. It also enables the recruitment and selection of experts tailored to each project, ensuring smooth project execution. 
                        The platform serves as a comprehensive project management tool, covering the entire process from project execution to managing deliverables.`,
                },
                role : {
                    ko : `서비스 개발`,
                    en : "Service Development",
                },
                type : "company-project",
                imagePath : kitriLogo,
                skills : ['Javascript','HTML5',"CSS3","MySQL","JAVA","Spring Framework","jQuery"],
                tasks: [
                    {
                      ko: "전문가 등록 개발",
                      en: "Developed expert registration functionality"
                    },
                    {
                      ko: "장비/시설 사용 개발",
                      en: "Developed equipment and facility usage functionality"
                    },
                    {
                      ko: "커뮤니티 기능 개발 (댓글, 대댓글 등)",
                      en: "Developed community features (comments, replies, etc.)"
                    },
                    {
                      ko: "시스템 코드 관리 등 공통 기능 개발",
                      en: "Developed common features such as system code management"
                    }
                ],
                problemSolvings: [
                    {
                      problem: {
                        ko: "프로젝트 참여 시간과 전문가 가능 시간을 비교하기가 어렵습니다.",
                        en: "It is difficult to compare project participation time with expert availability."
                      },
                      solution: {
                        ko: "프로젝트 참여 시간과 전문가 가능 시간을 시각적으로 쉽게 비교할 수 있도록 시각화 하여 표출하였으며, 중복되는 시간을 %로 나타내어 직관적으로 인지할 수 있도록 하였습니다.",
                        en: "Visualized project participation time and expert availability for easier comparison, and displayed overlapping times as a percentage for intuitive understanding."
                      }
                    },
                    {
                      problem: {
                        ko: "장비/시설 예약 시, 캘린더를 통해 사용 일자를 선택하고 싶습니다.",
                        en: "Users want to select usage dates through a calendar when reserving equipment or facilities."
                      },
                      solution: {
                        ko: "캘린더 라이브러리를 활용하여, 사용자가 드래그를 통해 원하는 일자를 선택할 수 있도록 개발하였습니다.",
                        en: "Implemented a calendar library allowing users to select desired dates through drag-and-drop functionality."
                      }
                    }
                ],
                impressions: [
                    {
                      ko: "시스템 코드를 활용하여 하드코딩을 줄이는 것을 배웠습니다.",
                      en: "Learned how to reduce hardcoding by utilizing system codes."
                    },
                    {
                      ko: "계층형 쿼리를 활용해 댓글, 대댓글 구현을 하였습니다.",
                      en: "Implemented comments and replies using hierarchical queries."
                    }
                ]
            },
            {
                id : "pjt_05",
                name :{
                    ko : "롯데마트 전자저널",
                    en : "Lotte Mart Electronic Journal",
                },
                description : {
                    ko : `롯데마트에서 영수증을 조회 할 수 있는 전자저널을 재구축하는 프로젝트입니다.
                        20년 가까이 된 오래된 AS-IS 시스템을 재구축하고, 영수증 검색, 데이터 필터 기능 등 편의 기능을 추가하였습니다.
                        솔루션 POC로 진행된 프로젝트여서 개발에 사용된 솔루션을 롯데마트, 롯데이노베이트 직원에게 교육을 진행하였습니다.`,
                    en : `This project involved rebuilding the electronic journal system for Lotte Mart, enabling receipt inquiries. 
                        The project modernized the nearly 20-year-old AS-IS system, adding convenience features such as receipt search and data filtering. 
                        As this was a proof-of-concept (POC) project, training on the solution used for development was provided to Lotte Mart and Lotte Innovate employees.`,
                },
                role : {
                    ko : "프론트엔드 개발, 솔루션 교육",
                    en : "",
                },
                type : "company-project",
                imagePath : lotteMartLogo,
                skills : ['Javascript','HTML5',"CSS3","MS SQL","JAVA","Spring Framework"],
                tasks: [
                    {
                        ko: "솔루션 교육",
                        en: "Solution training"
                    },
                    {
                        ko: "대용량 데이터 처리",
                        en: "Large-scale data processing"
                    },
                    {
                        ko: "데이터 필터 기능 추가",
                        en: "Added data filtering functionality"
                    }
                ],
                problemSolvings: [
                    {
                        problem: {
                        ko: "AS-IS에서 영수증을 조회하면 화면이동이 되어서 영수증 목록과 영수증 상세 화면을 한번에 볼 수 없습니다.",
                        en: "In the AS-IS system, viewing receipts requires screen transitions, making it impossible to see both the receipt list and detailed view simultaneously."
                        },
                        solution: {
                        ko: "TO-BE에서 영수증 목록과 영수증 상세를 하나의 화면에 배치하고, 영수증 목록에서 키보드로 이동이 가능하게 만들어서 사용자 경험을 향상시켰습니다.",
                        en: "In the TO-BE system, placed the receipt list and details on the same screen, and enabled keyboard navigation for an improved user experience."
                        }
                    },
                    {
                        problem: {
                        ko: "많은 데이터를 조회하면 화면에 표출하지 못하고 브라우저가 멈춥니다.",
                        en: "When querying a large volume of data, the browser freezes and cannot display all the data."
                        },
                        solution: {
                        ko: "DB에서 받아온 대용량 데이터를 브라우저가 모두 표출시킬 수 없어서 발생한 문제로, virtual scrolling을 구현하여 대용량 데이터도 표출될 수 있도록 조치하였습니다.",
                        en: "Implemented virtual scrolling to handle the issue of the browser freezing when displaying large-scale data fetched from the database."
                        }
                    }
                ],
                impressions: [
                    {
                        ko: "시니어 개발자 30명을 대상으로 한 솔루션 교육을 위해 발표 준비를 하며, 프레젠테이션에 대한 연습과 경험을 쌓을 수 있었습니다.",
                        en: "Prepared and delivered a presentation for solution training to 30 senior developers, gaining experience and practice in presentation skills."
                    },
                    {
                        ko: "대용량 데이터 처리를 통해, virtual scrolling 기능에 대해 익힐 수 있었습니다.",
                        en: "Learned about implementing virtual scrolling through large-scale data processing."
                    }
                ]
            },
            {
                id : "pjt_06",
                name : {
                    ko : "디지털 경제금융연구원 홈페이지",
                    en : "DEFI Hompage",
                },
                description : {
                    ko : `핀테크산업협회 디지털경제금융연구원 홈페이지를 구축하는 프로젝트입니다. 간단한 협회소개 홈페이지이나, 옵션 선택만으로 원하는 게시판을 생성 할 수 있도록 설계하였습니다.`,
                    en : `This project involved building the Fintech Industry Association's Digital Economy and Finance Research Institute website. 
                        Although a simple introductory website for the association, it was designed to allow users to create desired bulletin boards through simple option selections.`,
                },
                role : {
                    ko : `Front-end 개발, Database 설계`,
                    en : `Front-end Development, Design the Database`,
                },
                type : "company-project",
                imagePath : defiLogo,
                skills : ['Javascript','HTML5',"CSS3","MySQL","JAVA","Spring Framework"],
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
                    ko : "미니 리눅스",
                    en : "Mini Linux",
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
        async setLang(state, newLang){
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