// Bilingual content for the portfolio. Edit text here to update the whole site.
export type Lang = 'en' | 'zh';

export const site = {
  name: { en: 'Ka Sing (Ryan) Leung', zh: '梁家聲 (Ryan)' },
  email: 'ryanrain817@gmail.com',
  phone: '+852 5222 4807',
  github: 'https://github.com/KSryanLEUNG',
  githubLabel: 'github.com/KSryanLEUNG',
  resume: 'Resume_Ryan_Tech.pdf',
  location: { en: 'Hong Kong', zh: '香港' },
};

export const nav = {
  about: { en: 'About', zh: '關於' },
  experience: { en: 'Experience', zh: '經歷' },
  projects: { en: 'Projects', zh: '專案' },
  skills: { en: 'Skills', zh: '技能' },
  contact: { en: 'Contact', zh: '聯絡' },
};

export const hero = {
  role: {
    en: 'Agentic AI Developer & Researcher',
    zh: '代理式 AI 開發者與研究員',
  },
  tagline: {
    en: 'Computer Engineering graduate from HKUST researching and building agentic AI systems and applications — with hands-on experience in regulated banking environments.',
    zh: 'HKUST 計算機工程畢業，從事代理式 AI 系統與應用的研究與開發，並具備受監管銀行環境的實戰經驗。',
  },
  ctaResume: { en: 'Download Résumé', zh: '下載履歷' },
  ctaContact: { en: 'Get in Touch', zh: '聯絡我' },
};

export const about = {
  title: { en: 'About', zh: '關於我' },
  body: {
    en: [
      'I am a Computer Engineering graduate from HKUST specializing in agentic AI development and research. At Shanghai Commercial Bank I maintain an internal LLM-powered chatbot and independently designed an agentic AI framework that became the team’s reference implementation.',
      'I enjoy turning research-grade ideas into robust, production-ready software — from agentic architectures and MCP servers to self-hosted AI agents. I value continuous learning, clean engineering, and cross-functional collaboration.',
      'Away from the keyboard, I am a travel lover — always chasing new cities, food, and views. You can trace my trips on the interactive Travel map.',
    ],
    zh: [
      '我是香港科技大學（HKUST）計算機工程畢業生，專注於代理式 AI 的開發與研究。現於上海商業銀行負責維護內部 LLM 聊天機械人，並獨立設計了一套代理式 AI 框架，成為團隊的參考實作。',
      '我擅長將研究級的構想落地為穩健、可上線的軟件——由代理式架構、MCP 伺服器，到自架 AI 代理。我重視持續學習、乾淨的工程實踐與跨部門協作。',
      '工作以外，我是個熱愛旅行的人——總在尋找新的城市、美食與風景。你可以在互動「旅遊足跡」地圖上看到我走過的地方。',
    ],
  },
};

export const experience = {
  title: { en: 'Experience', zh: '工作經歷' },
  items: [
    {
      role: { en: 'Officer, Application Development', zh: '應用開發主任' },
      org: {
        en: 'Shanghai Commercial Bank (joined as Infinite Financial Solutions Ltd, merged into SCB in Jan 2026)',
        zh: '上海商業銀行（以 Infinite Financial Solutions Ltd 加入，2026 年 1 月併入 SCB）',
      },
      period: { en: 'Jul 2025 – Present', zh: '2025 年 7 月 – 至今' },
      bullets: {
        en: [
          'Maintain and enhance the bank’s internal LLM-powered chatbot serving the PPCD department’s daily operations.',
          'Independently designed and built an agentic AI framework implementing the ReAct architecture with LangChain and LangGraph, powering the team’s AI research and prototyping.',
          'Framework adopted as the team’s reference implementation and the onboarding project for new members.',
          'Developed MCP (Model Context Protocol) servers adopted across the team; integrated foundation models via AWS Bedrock.',
          'Evaluated NVIDIA NemoClaw for secure, policy-governed agent deployment in a regulated banking environment.',
        ],
        zh: [
          '維護並優化銀行內部 LLM 聊天機械人，支援 PPCD 部門的日常運作。',
          '獨立設計並建構一套採用 ReAct 架構的代理式 AI 框架（LangChain、LangGraph），驅動團隊的 AI 研究與原型開發。',
          '該框架獲團隊採用為參考實作，並成為新成員的入職項目。',
          '開發 MCP（Model Context Protocol）伺服器並於團隊內推廣；透過 AWS Bedrock 整合基礎模型。',
          '評估 NVIDIA NemoClaw，用於受監管銀行環境下安全、合規的代理部署。',
        ],
      },
    },
    {
      role: { en: 'Full Stack Software Developer', zh: '全端軟件開發者' },
      org: { en: 'Digital Wave', zh: 'Digital Wave' },
      period: { en: 'Jun 2024 – Jul 2024', zh: '2024 年 6 月 – 7 月' },
      bullets: {
        en: [
          'Developed front-end solutions using Flutter and React.',
          'Integrated backend APIs for seamless client-server operations.',
          'Contributed to a Dating App and a Transportation Management System.',
        ],
        zh: [
          '使用 Flutter 與 React 開發前端方案。',
          '整合後端 API，實現順暢的前後端協作。',
          '參與開發交友應用程式與運輸管理系統。',
        ],
      },
    },
    {
      role: { en: 'Software Testing Assistant', zh: '軟件測試助理' },
      org: { en: 'Chinasoft', zh: 'Chinasoft' },
      period: { en: 'Dec 2023 – Jan 2024', zh: '2023 年 12 月 – 2024 年 1 月' },
      bullets: {
        en: [
          'Tested booking system functionality at Kai Tak Sports Park.',
          'Created responsive email templates with HTML, CSS, and JavaScript.',
          'Facilitated communication between front-end and back-end teams.',
        ],
        zh: [
          '測試啟德體育園預約系統功能。',
          '以 HTML、CSS、JavaScript 製作響應式電郵範本。',
          '促進前端與後端團隊之間的溝通。',
        ],
      },
    },
  ],
};

export const projects = {
  title: { en: 'Projects', zh: '專案' },
  items: [
    {
      name: { en: 'Folkbot — Self-hosted Family AI Agent', zh: 'Folkbot — 自架家庭 AI 代理' },
      period: { en: 'Apr 2026 – Present', zh: '2026 年 4 月 – 至今' },
      link: 'https://github.com/KSryanLEUNG/folkbot',
      tags: ['Rust', 'SQLite', 'MCP', 'Agentic', 'Telegram', 'LLM'],
      desc: {
        en: [
          'Designed, built, and open-sourced an always-on, self-hosted family AI agent in Rust: a single shared identity with persistent memory across household members and chat channels, shipped as a single binary backed by SQLite.',
          'Engineered a three-tier memory architecture (durable facts, periodic summaries, sliding-window history) that keeps LLM context costs bounded over long-running use.',
          'Implemented role-based access control with audited memory edits, multimodal Telegram integration (voice, photos, documents), MCP plugin extensibility, and provider-agnostic LLM support.',
        ],
        zh: [
          '以 Rust 設計、開發並開源一個常駐、自架的家庭 AI 代理：跨家庭成員與聊天頻道共用單一身份與持久記憶，並以單一執行檔（搭配 SQLite）發佈。',
          '設計三層記憶架構（持久事實、定期摘要、滑動視窗歷史），讓長期使用下的 LLM 上下文成本受控。',
          '實作具審計記錄的角色權限控制、多模態 Telegram 整合（語音、相片、文件）、MCP 外掛擴充性，以及與供應商無關的 LLM 支援。',
        ],
      },
    },
    {
      name: {
        en: 'Locally Running Personal AI Assistant',
        zh: '本地運行的個人 AI 助理',
      },
      period: { en: 'Final-year Project, 2024', zh: '畢業專題，2024' },
      link: '',
      tags: ['NLP', 'Transformers', 'RL', 'Agentic'],
      desc: {
        en: [
          'Led development of a privacy-focused, locally running AI assistant using NLP, transformers, and reinforcement learning.',
          'Pioneered an early agentic design enabling the assistant to operate the web browser autonomously — reading page content, navigating pages, and filling forms (e.g., live weather lookups) — before agentic AI became mainstream.',
        ],
        zh: [
          '帶領開發一個注重私隱、於本地運行的 AI 助理，運用 NLP、Transformer 與強化學習。',
          '率先採用早期的代理式設計，讓助理能自主操作瀏覽器——讀取頁面內容、跨頁導覽、填寫表單（例如即時天氣查詢）——早於代理式 AI 成為主流。',
        ],
      },
    },
    {
      name: {
        en: 'Typst-LLaMA — Open-source LLMs for Typst',
        zh: 'Typst-LLaMA — 為 Typst 打造的開源 LLM',
      },
      period: { en: 'Group Project, 2024', zh: '小組專案，2024' },
      link: '',
      tags: ['LLaMA', 'Fine-tuning', 'Typst'],
      desc: {
        en: [
          'Led the group to fine-tune the LLaMA LLM to comprehend and generate the new markup language Typst.',
        ],
        zh: [
          '帶領小組微調 LLaMA 大型語言模型，使其能理解並生成新興標記語言 Typst。',
        ],
      },
    },
  ],
};

export const skills = {
  title: { en: 'Skills', zh: '技能' },
  groups: [
    {
      label: { en: 'Programming', zh: '程式語言' },
      items: ['Python', 'Rust', 'C/C++', 'JavaScript', 'HTML/CSS'],
    },
    {
      label: { en: 'AI / ML', zh: 'AI／機器學習' },
      items: [
        'Large Language Models',
        'Agentic AI (ReAct, MCP)',
        'LangChain / LangGraph',
        'Deep Learning',
        'AWS Bedrock',
        'NVIDIA NemoClaw',
      ],
    },
    {
      label: { en: 'Others', zh: '其他' },
      items: ['Data Analysis', 'Database Management', 'AI-assisted Development', 'Git / GitHub'],
    },
    {
      label: { en: 'Languages', zh: '語言' },
      items: ['Cantonese (Native)', 'English (Proficient)', 'Mandarin (Proficient)'],
    },
  ],
};

export const education = {
  title: { en: 'Education', zh: '學歷' },
  items: [
    {
      school: {
        en: 'The Hong Kong University of Science and Technology',
        zh: '香港科技大學',
      },
      degree: { en: 'BEng in Computer Engineering', zh: '計算機工程學士' },
      period: { en: '2022 – 2025', zh: '2022 – 2025' },
    },
    {
      school: { en: 'Hong Kong Community College, PolyU', zh: '香港專上學院（理大）' },
      degree: { en: 'Associate in Engineering', zh: '工程副學士' },
      period: { en: '2020 – 2022', zh: '2020 – 2022' },
    },
  ],
};

export const contact = {
  title: { en: 'Contact', zh: '聯絡' },
  body: {
    en: 'Open to opportunities in agentic AI development and research. Feel free to reach out.',
    zh: '歡迎洽談代理式 AI 開發與研究相關機會，隨時與我聯絡。',
  },
  emailLabel: { en: 'Email', zh: '電郵' },
  githubLabel: { en: 'GitHub', zh: 'GitHub' },
};

export const footer = {
  rights: { en: 'All rights reserved.', zh: '版權所有。' },
};
