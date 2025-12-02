/**
 * 个人信息数据配置文件
 * 所有内容都在这里集中管理，方便修改和维护
 */

const personalData = {
    // 基本信息
    profile: {
        name: "Huazheng Zeng",
        title: "Undergraduate Student / Incoming PhD Student",
        institution: "Fudan University",
        photo: "image/image.png",
        blog: "https://huazzengblog.github.io/"
    },

    // 联系方式
    contact: {
        github: {
            label: "huazZeng",
            url: "https://github.com/huazZeng"
        },
        email: "hzceng22@m.fudan.edu.cn",
        linkedin: {
            label: "Huazheng Zeng",
            url: "https://www.linkedin.com/in/huazheng-zeng-2750a3372/"
        },
        googleScholar: {
            label: "Huazheng Zeng",
            url: "https://scholar.google.cz/citations?hl=zh-CN&pli=1&user=tCOHRhgAAAAJ"
        }
    },

    // 研究兴趣
    interests: [
        "Vision-Language Models",
        "Multi-Modal Learning",
        "Open Source Software",
        "AI-driven Systems"
    ],

    // About Me 描述
    about: [
        "I am an final-year undergraduate student at <strong>Fudan University</strong>, majoring in Software Engineering. Incoming PhD student at Fudan University.",
        "My research interests focus on <strong>Vision-Language Models</strong>, <strong>Multi-Modal Learning</strong>, <strong>Open Source Software</strong>, and <strong>AI-driven Systems</strong>.",
        "I am passionate about bridging the gap between vision and language, exploring innovative approaches to multi-modal understanding."
    ],

    // 新闻动态
    news: [
        {
            date: "2025.11",
            content : "Started a new internship at FNLP, embarking on an exciting new adventure!"
        },
        
        {
            date: "2025.11",
            content : "Concluded my internship at Shanghai AI Lab, where I greatly enjoyed working alongside talented colleagues."
        },
        {
            date: "2025.07",
            content: "Started internship at Shanghai AI Lab, working on vision-language models for document parsing."
        }
    ],

    // 实习经历
    internships: [
        {
            title: "Vision-Language Research Intern",
            location: "Shanghai AI Lab",
            period: "July 2025 - November 2025",
            description: "Working on post-training of vision-language models. Adapted document parsing models to downstream professional domains and contributed code to the open-source project <a href='https://github.com/opendatalab/MinerU/' target='_blank'>MinerU</a>."
        }
    ],

    // 研究经历
    research: [
        {
            title: "Collaborative Researcher, Xiyuan Project",
            location: "Fudan University",
            period: "May 2024 - February 2025",
            description: "Conducted research focused on detecting conflicts in open-source licenses using large language models. Developed an automated system to identify and analyze license compatibility issues in software dependencies.",
            links: [
                { label: "Code", url: "https://github.com/huazZeng/license_llm_public" },
                { label: "Report", url: "https://github.com/huazZeng/license_llm_public/blob/main/report.pdf" }
            ]
        },
        {
            title: "Research Assistant, Software Engineering Lab",
            location: "Fudan University",
            period: "October 2023 - March 2024",
            description: "Worked on open-source license violation detection tools, contributing to research published at ISSTA 2024. Participated in developing novel methods for detecting and fixing violations of modification terms during software forking.",
            links: [
                { label: "Paper", url: "https://dl.acm.org/doi/10.1145/3650212.3680339" }
            ]
        },
        {
            title: "Research Assistant, Natural Language Processing Lab",
            location: "Fudan University",
            period: "June 2023 - September 2023",
            description: "Contributed to the LLM-EVAL project by handling data cleaning, dataset construction, and model comparisons. Assisted in evaluating and benchmarking various large language models."
        }
    ],

    // 论文发表
    publications: [
        {
            title: "Your 'Notice' Is Missing: Detecting and Fixing Violations of Modification Terms in Open Source Licenses during Forking",
            authors: "Kaifeng Huang, Yingfeng Xia, Bihuan Chen, Siyang He, <u>Huazheng Zeng</u>, Zhuotong Zhou, Jin Guo, Xin Peng",
            venue: "ISSTA 2024 - ACM SIGSOFT International Symposium on Software Testing and Analysis",
            url: "https://dl.acm.org/doi/10.1145/3650212.3680339"
        }
    ]
};

