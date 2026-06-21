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
        "I am a final-year undergraduate student majoring in Software Engineering at <strong>Fudan University</strong>. In September 2026, I will be a joint Ph.D. student in Artificial Intelligence at Fudan University and Shanghai Innovation Institute (SII), advised by <a href=\"https://xpqiu.github.io/\" target=\"_blank\">Prof. Xipeng Qiu</a>.",
        "My research interests focus on <strong>Vision-Language Models</strong>, <strong>Multi-Modal Learning</strong>, <strong>Open Source Software</strong>, and <strong>AI-driven Systems</strong>.",
        "I am passionate about bridging the gap between vision and language, exploring innovative approaches to multi-modal understanding."
    ],

    // 新闻动态
    news: [
        {
            date: "2026.04",
            content: "We released <a href=\"https://github.com/OpenMOSS/MOSS-VL/\" target=\"_blank\">MOSS-VL</a>, including both the Instruct and Base models! Check out the open-source release."
        },
        {
            date: "2025.12",
            content : "Started a new internship at OpenMOSS Team, embarking on an exciting new adventure!"
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
            title: "VLM Pre-training Algorithm Intern",
            location: "OpenMOSS Team",
            period: "December 2025 - Present",
            description: "Led the end-to-end development of OCR-related capabilities for the open-source vision-language model <a href=\"https://github.com/OpenMOSS/MOSS-VL/\" target=\"_blank\">MOSS-VL</a>, including text recognition, document understanding, text localization, document parsing, and chart understanding. Primarily responsible for OCR foundational data and document parsing data, with deep involvement in model training, evaluation, and inference. Played a key role in building the team's engineering infrastructure, optimizing large-scale data production and grounding pipelines."
        },
        {
            title: "Vision-Language Model Algorithm Intern",
            location: "Shanghai AI Lab",
            period: "July 2025 - November 2025",
            description: "Developed vision-language models and document parsing tools for the chemistry domain, pursuing fine-grained grounding through supervised fine-tuning to improve molecular spectra extraction. Deeply involved in a 10-million-scale data production pipeline, contributing to distributed deployment and Ray-based task scheduling. Optimized the core algorithm of <a href=\"https://github.com/opendatalab/MinerU\" target=\"_blank\">MinerU</a> (59k+ GitHub stars), fixing complex layout parsing errors with PRs merged into the main repository. Built a unified VLM inference framework supporting online and offline serving with backends including vLLM."
        }
    ],

    // 研究经历
    research: [
        {
            title: "Research Assistant, Natural Language Processing Lab",
            location: "Fudan University",
            period: "June 2023 - September 2023",
            description: "Contributed to the LLM-EVAL project by handling data cleaning, dataset construction, and model comparisons. Assisted in evaluating and benchmarking various large language models."
        }
    ],

    // 项目经历
    projects: [
        {
            title: "MOSS-VL: Open-Source Vision-Language Model",
            location: "Fudan University",
            period: "December 2025 - Present",
            description: "Leading the OCR and Document capabilities for <a href=\"https://github.com/OpenMOSS/MOSS-VL/\" target=\"_blank\">MOSS-VL</a>. Built a complete data pipeline producing 200M high-quality pre-training data. Achieved a 10+ point improvement on OCR/Document benchmarks compared to the previous version.",
            links: [
                { label: "GitHub", url: "https://github.com/OpenMOSS/MOSS-VL" }
            ]
        },
        {
            title: "MinerU: Document Parsing Engine",
            location: "Shanghai AI Lab",
            period: "July 2025 - November 2025",
            description: "Optimized and enhanced <a href=\"https://github.com/opendatalab/MinerU\" target=\"_blank\">MinerU</a>'s post-processing algorithm, significantly improving extraction accuracy and robustness for complex document layouts.",
       
            links: [
                { label: "GitHub", url: "https://github.com/opendatalab/MinerU" }
            ]
        },
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

