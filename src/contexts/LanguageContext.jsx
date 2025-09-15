import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the language context
const LanguageContext = createContext();

// English translations (default)
const translations = {
  en: {
    // Home page
    aiResearcher: 'Artificial Intelligence & Mathematics',
    bio: 'Incoming student at Institut Polytechnique de Paris (M1 Data & AI) / Based in Switzerland / B.S. in Computer Science from KAIST',
    learnAbout: 'Learn About',
    me: 'Me',
    discoverMore:
      'Discover more about my background, research interests, and projects.',
    learnAboutMeBtn: 'Learn About Me',
    recommendation: 'Recommendation',

    // About page
    aboutMe: 'About Me',
    education: 'Education',
    experience: 'Experience',
    awards: 'Awards',
    skills: 'Skills',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    technical: 'Technical',
    aiVision: 'AI & Vision',
    language: 'Language',
    communicationCollaboration: 'Communication & Collaboration',
    programmingLanguages: 'Programming Languages',
    librariesTools: 'Libraries & Tools',
    fullName: 'Kanghyeon Zahner',

    // About page - detailed content
    citizenInfo: 'South Korean citizen / Swiss work (B) permit holder',
    currentAddress: 'Palaiseau, France',
    bsComputing: 'B.S. in Computing',
    msDataAI: 'Master Year 1 Data and Artificial Intelligence',
    daejeonKorea: 'Daejeon, South Korea',
    palaiseauFrance: 'Palaiseau, France',
    busanKorea: 'Busan, South Korea',
    undergradResearcher: 'Undergraduate Researcher',
    sergeant: 'Sergeant',
    koreanNative: 'Korean: Native',
    englishLevel: 'English: Full Professional (IELTS: 8.0/9.0)',
    otherLanguages: 'German & French: Elementary',
    communicationSkills:
      'Leadership, Group Projects, Presentations, Meeting, and Technical Writing',
    aiSkills:
      'Deep Learning, Computer Vision, Natural Language Processing, Model Optimization',

    // Experience details
    exp1Point1:
      'Designed and implemented architectural modifications to large language models (LLMs) to improve efficiency and performance.',
    exp1Point2:
      'Led software prototyping and testing for two research projects:',
    exp1Project1: '"Autocomplete Algorithm for Language Models"',
    exp1Project2: '"FERT: Fixed Error Rate Training for Language Models"',
    exp1Point3:
      'Strengthened scientific communication through weekly meetings, report writing, and collaborative discussions.',

    exp2Point1:
      'Served as squad leader, overseeing and coordinating operations for a team of 8 soldiers.',
    exp2Point2:
      'Acted as assistant to the company commander, taking charge of drill preparation and logistics—contributing to the successful execution of multiple training exercises.',
    exp2Point3:
      'Honed leadership, planning, and organizational skills in high-pressure, team-oriented environments.',
    exp2Point4: 'Honorably discharged with the rank of Sergeant.',

    // Awards details
    award1Title:
      '2024 Winter/Spring Undergraduate Research Program (URP) Award',
    award1Desc:
      'Awarded for excellence in undergraduate research titled "Autocomplete Algorithm for Language Models"',
    award2Title: "Dean's List",
    award2Desc: 'GPA in the top 2% of the entire freshman class at KAIST',

    // Name explanation
    nameExplanation:
      'Note: As a Korean citizen, my legal name is 김강현 (Kanghyeon Kim, as shown on my passport). In Switzerland, I am registered under the name Kanghyeon Zahner.',
  },
  de: {
    // Home page
    aiResearcher: 'Künstliche Intelligenz & Mathematik',
    bio: 'Kommender Student am Institut Polytechnique de Paris (M1 Data & AI) / wohnhaft in der Schweiz / B.S. in Informatik von der KAIST',
    learnAbout: 'Mehr über',
    me: 'mich',
    discoverMore:
      'Erfahren Sie mehr über meinen Hintergrund, Forschungsinteressen und Projekte.',
    learnAboutMeBtn: 'Mehr über mich',
    recommendation: 'Empfehlung',

    // About page
    aboutMe: 'Über Mich',
    education: 'Ausbildung',
    experience: 'Erfahrung',
    awards: 'Auszeichnungen',
    skills: 'Fähigkeiten',
    phone: 'Telefon',
    email: 'E-Mail',
    address: 'Adresse',
    technical: 'Technisch',
    aiVision: 'KI & Vision',
    language: 'Sprache',
    communicationCollaboration: 'Kommunikation & Zusammenarbeit',
    programmingLanguages: 'Programmiersprachen',
    librariesTools: 'Bibliotheken & Tools',
    fullName: 'Kanghyeon Zahner',

    // About page - detailed content
    citizenInfo: 'Südkoreanischer Staatsbürger / Schweizer B-Bewilligung',
    currentAddress: 'Palaiseau, Frankreich',
    bsComputing: 'B.S. in Informatik',
    msDataAI: 'Master Year 1 Data and Artificial Intelligence',
    daejeonKorea: 'Daejeon, Südkorea',
    palaiseauFrance: 'Palaiseau, Frankreich',
    busanKorea: 'Busan, Südkorea',
    undergradResearcher: 'Undergraduate Forscher',
    sergeant: 'Feldwebel',
    koreanNative: 'Koreanisch: Muttersprache',
    englishLevel: 'Englisch: Professionell (IELTS: 8.0/9.0)',
    otherLanguages: 'Deutsch & Französisch: Grundkenntnisse',
    communicationSkills:
      'Führung, Gruppenprojekte, Präsentationen, Meetings und technisches Schreiben',
    aiSkills:
      'Deep Learning, Computer Vision, Natural Language Processing, Modelloptimierung',

    // Experience details
    exp1Point1:
      'Entwurf und Implementierung von Architekturmodifikationen für große Sprachmodelle (LLMs) zur Verbesserung von Effizienz und Leistung.',
    exp1Point2:
      'Leitung von Softwareprototyping und Tests für zwei Forschungsprojekte:',
    exp1Project1: '"Autocomplete-Algorithmus für Sprachmodelle"',
    exp1Project2: '"FERT: Fixed Error Rate Training für Sprachmodelle"',
    exp1Point3:
      'Stärkung der wissenschaftlichen Kommunikation durch wöchentliche Meetings, Berichtserstellung und kollaborative Diskussionen.',

    exp2Point1:
      'Tätigkeit als Gruppenführer, Überwachung und Koordination der Operationen für ein Team von 8 Soldaten.',
    exp2Point2:
      'Als Assistent des Kompaniechefs verantwortlich für Drill-Vorbereitung und Logistik—Beitrag zur erfolgreichen Durchführung mehrerer Trainingsübungen.',
    exp2Point3:
      'Verbesserung von Führungs-, Planungs- und Organisationsfähigkeiten in Hochdruckumgebungen mit Teamorientierung.',
    exp2Point4: 'Ehrenhaft entlassen mit dem Rang eines Feldwebels.',

    // Awards details
    award1Title:
      '2024 Winter/Frühling Undergraduate Research Program (URP) Auszeichnung',
    award1Desc:
      'Ausgezeichnet für hervorragende Undergraduate-Forschung mit dem Titel "Autocomplete-Algorithmus für Sprachmodelle"',
    award2Title: 'Dekansliste',
    award2Desc:
      'GPA in den oberen 2% der gesamten Erstsemester-Klasse an der KAIST',

    // Name explanation
    nameExplanation:
      'Hinweis: Als südkoreanischer Staatsbürger ist mein offizieller Name 김강현 (Kanghyeon Kim, wie in meinem Pass angegeben). In der Schweiz bin ich unter dem Namen Kanghyeon Zahner registriert.',
  },
  ko: {
    // Home page
    aiResearcher: '인공지능, 수학',
    bio: 'Institut Polytechnique de Paris (M1 Data & AI) 진학 예정 / 스위스 거주 / KAIST 전산학 학사',
    learnAbout: '더',
    me: '알아보기',
    discoverMore: '제 배경, 연구 관심사 및 프로젝트에 대해 자세히 알아보세요.',
    learnAboutMeBtn: 'About',
    recommendation: '추천',

    // About page
    aboutMe: '소개',
    education: '학력',
    experience: '경력',
    awards: '수상 경력',
    skills: '기술',
    phone: '전화번호',
    email: '이메일',
    address: '주소',
    technical: '기술적',
    aiVision: 'AI & 비전',
    language: '언어',
    communicationCollaboration: '커뮤니케이션 & 협업',
    programmingLanguages: '프로그래밍 언어',
    librariesTools: '라이브러리 & 도구',
    fullName: '김강현',

    // About page - detailed content
    citizenInfo: '대한민국 국적 / 스위스 B 체류허가증 소지자',
    currentAddress: '프랑스 팔레조',
    bsComputing: '전산학 학사',
    msDataAI: 'Master Year 1 Data and Artificial Intelligence',
    daejeonKorea: '대한민국 대전',
    palaiseauFrance: '프랑스 팔레조',
    busanKorea: '대한민국 부산',
    undergradResearcher: '학부 연구원',
    sergeant: '병장',
    koreanNative: '한국어: 모국어',
    englishLevel: '영어: 고급 (IELTS: 8.0/9.0)',
    otherLanguages: '독일어 & 프랑스어: 초보',
    communicationSkills:
      '리더십, 그룹 프로젝트, 프레젠테이션, 회의 및 기술 문서 작성',
    aiSkills: '딥 러닝, 컴퓨터 비전, 자연어 처리, 모델 최적화',

    // Experience details
    exp1Point1:
      '대형 언어 모델(LLM)의 효율성과 성능을 높이기 위해 아키텍처 수정 및 구현',
    exp1Point2: '두 개의 연구 프로젝트 소프트웨어 프로토타이핑 및 테스트 주도:',
    exp1Project1: '"Autocomplete Algorithm for Language Models"',
    exp1Project2: '"FERT: Fixed Error Rate Training for Language Models"',
    exp1Point3:
      '주간 회의, 보고서 작성, 협업적 토론을 통해 과학적 의사소통 능력 강화',

    exp2Point1: '8명 병사 분대 운영 및 지휘',
    exp2Point2: '중대 행정병으로 훈련 준비 및 물류 담당, 성공적 훈련 기여',
    exp2Point3: '고압적 팀 환경에서 리더십, 계획 및 조직 기술 향상',
    exp2Point4: '병장 계급 전역',

    // Awards details
    award1Title: '2024 겨울/봄 학부생 연구 프로그램(URP) 상',
    award1Desc: '"Autocomplete Algorithm for Language Models" 학부 연구상 수상',
    award2Title: "Dean's List",
    award2Desc: 'KAIST 전체 1학년 중 상위 2%의 평점',

    // Name explanation
    nameExplanation:
      '참고: 저의 법적 이름은 김강현(여권상 Kanghyeon Kim)입니다. 스위스에서는 Kanghyeon Zahner로 등록되어 있습니다.',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check if user has a saved preference
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language');
      // Return saved language or default to English
      return savedLang || 'en';
    }
    return 'en';
  });

  // Apply language whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
