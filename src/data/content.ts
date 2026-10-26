// Bilingual content for the portfolio. Edit text here to update the whole site.
export type Lang = 'en' | 'zh';

export const site = {
  name: { en: 'Ka Sing (Ryan) Leung', zh: '梁家聲 (Ryan)' },
  email: 'ryanrain817@gmail.com',
  github: 'https://github.com/KSryanLEUNG',
  githubLabel: 'github.com/KSryanLEUNG',
  location: { en: 'Hong Kong', zh: '香港' },
};

export const seo = {
  title: 'Ka Sing (Ryan) Leung — AI Systems & Engineering',
  description: 'Engineering cases from Ka Sing (Ryan) Leung: traceable AI answers, evidence validation, access boundaries and bilingual web delivery.',
};

export const nav = {
  about: { en: 'About', zh: '關於' },
  projects: { en: 'Projects', zh: '專案' },
  approach: { en: 'Approach', zh: '工程方法' },
  skills: { en: 'Tools', zh: '技術工具' },
  blog: { en: 'Blog', zh: '網誌' },
  contact: { en: 'Contact', zh: '聯絡' },
};

export const hero = {
  role: { en: 'AI systems, grounded in evidence', zh: '以證據為基礎的 AI 系統' },
  tagline: {
    en: 'I work on traceable AI answers and agent workflows, with a focus on verifiable results, explicit access boundaries and safe recovery when a task goes wrong.',
    zh: '我關注可追溯的 AI 答案與 agent 工作流程，重視可驗證的結果、清晰的存取邊界，以及任務出錯後的安全恢復。',
  },
  ctaProjects: { en: 'Explore the work', zh: '查看工程案例' },
  ctaContact: { en: 'Get in Touch', zh: '聯絡我' },
};

export const about = {
  title: { en: 'About', zh: '關於我' },
  body: {
    en: [
      'I am Ka Sing (Ryan) Leung, a Computer Engineering graduate from HKUST based in Hong Kong. My focus is the engineering around AI: how an answer connects to evidence, what a tool is allowed to do, and how a workflow recovers from an uncertain outcome.',
      'I turn requirements into explicit acceptance criteria and reviewable changes, working with teammates and AI coding agents on implementation and validation. The cases below describe my contribution, shared implementation and the limits of current validation.',
      'Away from the keyboard, I enjoy exploring cities, food and landscapes. My Travel map collects some of those journeys.',
    ],
    zh: [
      '我是梁家聲（Ryan），現居香港，畢業於香港科技大學計算機工程系。我關注 AI 系統的工程問題：答案如何連結證據、工具獲准執行甚麼，以及流程面對不確定結果時如何恢復。',
      '我把需求轉化為明確的驗收條件與可審閱的修改，並與團隊及 AI coding agents 協作實作和驗證。以下案例會說明我的貢獻、共同實作的範圍，以及目前驗證的邊界。',
      '工作以外，我喜歡探索不同城市、美食與風景。你可以在「旅遊足跡」地圖上看到部分旅程。',
    ],
  },
};

export const projects = {
  title: { en: 'Selected engineering cases', zh: '精選工程案例' },
  labels: {
    problem: { en: 'Problem', zh: '問題' },
    method: { en: 'Technical approach', zh: '技術方法' },
    contribution: { en: 'My contribution', zh: '我的貢獻' },
    result: { en: 'Verified result & current limits', zh: '已驗證結果與目前邊界' },
  },
  items: [
    {
      id: 'traceable-ai-answers',
      name: { en: 'Traceable AI answers', zh: '可追溯的 AI 答案' },
      status: { en: 'Implementation under review', zh: '實作評審中' },
      problem: {
        en: 'A plausible answer can still cite the wrong evidence, misstate a calculation or expose a source after access has changed. Reliability depends on checking the claim, its evidence and the reader’s current permissions together.',
        zh: '看似合理的答案，仍可能引用錯誤證據、算錯數值，或在權限改變後繼續開啟來源。可靠性需要同時檢查主張、證據與讀者當下的存取權。',
      },
      method: {
        en: 'Bind claims to source evidence, validate calculations and use conservative citations for totals assembled from multiple sources. Keep answer decisions separate from citation repair, and recheck access when reopening historical sources.',
        zh: '把主張與來源證據綁定，驗證計算，並對跨來源加總採取保守的引用策略。答案決策與引用修復分開處理，重開歷史來源時重新檢查存取權。',
      },
      contribution: {
        en: 'I defined citation behaviour and acceptance boundaries, and requested independent reviews. Implementation, fixes and regression work were shared with teammates and AI coding agents.',
        zh: '我定義引用行為與驗收邊界，並要求獨立複查。實作、修正與回歸驗證由團隊及 AI coding agents 協作完成。',
      },
      result: {
        en: 'Recorded local regression and isolated integration runs cover citation, calculation and access scenarios. The implementation remains under review; production configuration and acceptance with real data, live models and messaging channels are still pending.',
        zh: '已有本機回歸及隔離整合測試記錄，涵蓋引用、計算與存取情境。實作仍在評審中；正式設定、真實資料與模型，以及實際通訊渠道的驗收仍待完成。',
      },
    },
    {
      id: 'bilingual-web-delivery',
      name: { en: 'Bilingual web delivery', zh: '雙語網站的內容交付' },
      status: { en: 'Supporting work · deployed foundation', zh: '次要案例 · 基礎功能已部署' },
      problem: {
        en: 'A personal site needs a repeatable way to publish writing while keeping navigation, language switching and small-screen reading consistent.',
        zh: '個人網站需要可重複的文章發佈流程，同時兼顧導覽、語言切換與小螢幕閱讀。',
      },
      method: {
        en: 'Use Astro content collections for Markdown posts, generate RSS and a sitemap, and build static pages through GitHub Actions. Check both languages and rendered text when upgrading the framework.',
        zh: '以 Astro 內容集合管理 Markdown 文章，產生 RSS 與 sitemap，並由 GitHub Actions 建置靜態頁面。框架升級時檢查中英文頁面及實際顯示的文字。',
      },
      contribution: {
        en: 'I set the requirements for the blog, site fixes and framework upgrade. An AI coding agent implemented and tested those changes.',
        zh: '我提出網誌、網站修正與框架升級的需求；相關程式與測試由 AI coding agent 完成。',
      },
      result: {
        en: 'The blog infrastructure, feed, sitemap and upgraded framework have been built and deployed. There are no published posts yet.',
        zh: '網誌基礎功能、訂閱來源、sitemap 與框架升級已有建置及部署記錄，目前尚未發佈文章。',
      },
    },
  ],
};

export const approach = {
  title: { en: 'Engineering approach', zh: '工程方法' },
  items: [
    {
      title: { en: 'Make failure states explicit', zh: '明確描述失敗狀態' },
      body: {
        en: 'An accepted request, a completed task and an uncertain delivery need different recovery paths. Define those states before choosing when to retry.',
        zh: '請求已接收、任務已完成和交付結果不明，需要不同的恢復路徑。先定義狀態，再決定何時重試。',
      },
    },
    {
      title: { en: 'Keep authority separate from generated text', zh: '把權限與生成文字分開' },
      body: {
        en: 'A model’s answer or another agent’s report is data to inspect. Tool access and source permissions need their own enforceable checks.',
        zh: '模型答案或其他 agent 的回報，是需要檢查的資料。工具授權與來源存取權，應有獨立且可執行的檢查。',
      },
    },
    {
      title: { en: 'Match the claim to the evidence', zh: '讓主張與證據相稱' },
      body: {
        en: 'Use focused regressions to check a failure mode, then validate the real configuration and workflow. A passing local test supports that test’s scope; production acceptance needs separate evidence.',
        zh: '以針對性的回歸測試檢查失敗情境，再驗證實際設定與流程。本機測試通過只支持該測試範圍，生產驗收需要另有證據。',
      },
    },
  ],
};

export const skills = {
  title: { en: 'Technical toolkit', zh: '技術工具' },
  groups: [
    {
      label: { en: 'AI application logic', zh: 'AI 應用邏輯' },
      items: ['Python'],
      body: { en: 'Evidence handling, validation and regression checks.', zh: '證據處理、驗證與回歸檢查。' },
    },
    {
      label: { en: 'Web delivery', zh: '網站交付' },
      items: ['Astro', 'TypeScript', 'GitHub Actions'],
      body: { en: 'Bilingual static pages, content publishing and automated builds.', zh: '雙語靜態頁面、內容發佈與自動建置。' },
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
    en: 'Interested in traceable AI systems, agent workflows or an engineering exchange? Feel free to get in touch.',
    zh: '歡迎交流可追溯的 AI 系統、agent 工作流程與相關工程問題。',
  },
  emailLabel: { en: 'Email', zh: '電郵' },
  githubLabel: { en: 'GitHub', zh: 'GitHub' },
};

export const footer = {
  rights: { en: 'All rights reserved', zh: '版權所有' },
};
