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
        "I am a final-year undergraduate student at <strong>Fudan University</strong>, majoring in Software Engineering. I will be joining Fudan University as a PhD student in Computer Science and Technology in September 2026, advised by Prof. Xipeng Qiu.",
        "My research interests focus on <strong>Vision-Language Models</strong>, <strong>Multi-Modal Learning</strong>, <strong>Open Source Software</strong>, and <strong>AI-driven Systems</strong>.",
        "I am passionate about bridging the gap between vision and language, exploring innovative approaches to multi-modal understanding."
    ],

    // 新闻动态
    news: [
        {
            date: "2025.12",
            content : "Started a new internship at Fudan University OpenMOSS Team, embarking on an exciting new adventure!"
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
            description: "Participated in the development of the open-source vision-language model <strong>MOSS-VL</strong>, leading the <strong>OCR and Document</strong> capabilities. Deeply involved in the <strong>pre-training process</strong> and constructed the complete data pipeline, producing <strong>200M</strong> high-quality pre-training data through data synthesis and knowledge distillation. Designed large-scale data production pipelines, optimized Grounding data pipelines, and achieved a <strong>2x speedup</strong> through distributed scheduling. Built a <strong>data task management platform</strong> and contributed a <strong>distributed deployment demo</strong>."
        },
        {
            title: "Vision-Language Model Algorithm Intern",
            location: "Shanghai AI Lab",
            period: "July 2025 - November 2025",
            description: "Participated in the development of <strong>document parsing tools</strong> and <strong>vision-language models</strong> for the chemistry domain. Explored the <strong>fine-grained grounding</strong> capabilities of general VLMs and improved the extraction accuracy of molecular spectra through supervised fine-tuning. Participated in a <strong>10-million scale</strong> data production project, implementing distributed deployment and task scheduling based on <strong>Ray</strong>. Optimized the core algorithm of <strong>MinerU</strong> (GitHub 59k+ stars) and fixed multiple parsing errors in complex layouts, with PRs merged into the main repository. Designed and implemented a <strong>unified VLM online/offline inference framework</strong> supporting multiple backends like vLLM."
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
            description: "Leading the OCR and Document capabilities for MOSS-VL. Built a complete data pipeline producing 200M high-quality pre-training data. Achieved a 10+ point improvement on OCR/Document benchmarks compared to the previous version.",
            links: [
                { label: "GitHub", url: "https://github.com/OpenMOSS/MOSS-VL" }
            ]
        },
        {
            title: "MinerU: Document Parsing Engine",
            location: "Shanghai AI Lab",
            period: "July 2025 - November 2025",
            description: "Optimized and enhanced MinerU’s post-processing algorithm, significantly improving extraction accuracy and robustness for complex document layouts.",
       
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

