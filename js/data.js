/**
 * 个人信息数据配置文件
 * 所有内容都在这里集中管理，方便修改和维护
 */

const personalData = {
    // 基本信息
    profile: {
        name: "Huazheng Zeng",
        title: "Joint PhD Student, FDU & SII",
        institution: "Fudan University",
        photo: "image/me.jpeg",
        blog: "https://huazzengblog.github.io/"
    },

    // 联系方式
    contact: {
        github: {
            label: "huazZeng",
            url: "https://github.com/huazZeng"
        },
        email: "hzzeng26@m.fudan.edu.cn",
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
        "I am Huazheng Zeng. I received my Bachelor's degree in Software Engineering from <strong>Fudan University</strong>. In September 2026, I will join Fudan University and Shanghai Innovation Institute (SII) as a joint Ph.D. student in Artificial Intelligence, advised by <a href=\"https://xpqiu.github.io/\" target=\"_blank\">Prof. Xipeng Qiu</a>.",
        "My research interests lie in <strong>Vision-Language Models</strong>, <strong>Multi-Modal Learning</strong>, <strong>Open Source Software</strong>, and <strong>AI-driven Systems</strong>.",
        "I am particularly interested in advancing multimodal understanding and bridging the gap between visual perception and language reasoning."
    ],

    // 新闻动态
    news: [
        {
            date: "2026.07",
            content: "OpenMOSS open-sourced <a href=\"https://github.com/OpenMOSS/MOSS-VL/\" target=\"_blank\">MOSS-VL-Realtime</a> for real-time video understanding, alongside updated Base and Instruct models with improved OCR/document performance (OmniDocBench v1.6 SOTA). <a href=\"https://openmoss.github.io/MOSS-VL\" target=\"_blank\">Blog</a>"
        },
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
            description: "Led the end-to-end development of OCR-related capabilities for the open-source vision-language model <a href=\"https://github.com/OpenMOSS/MOSS-VL/\" target=\"_blank\">MOSS-VL</a>, including text recognition, document understanding, text localization, document parsing, and chart understanding. Primarily responsible for OCR foundational data and document parsing data, and participated in multiple full-cycle model iterations covering data construction, training, evaluation, error analysis, inference, and release preparation. Drove iterative upgrades of the data pipeline, improving data quality, coverage, filtering rules, grounding annotations, and benchmark-oriented data distribution to continuously enhance OCR/document performance. Played a key role in building the team's engineering infrastructure, optimizing large-scale data production and grounding pipelines."
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
            description: "Leading the OCR and Document capabilities for <a href=\"https://github.com/OpenMOSS/MOSS-VL/\" target=\"_blank\">MOSS-VL</a>. Built and iteratively upgraded a complete data pipeline producing 200M high-quality pre-training data, covering data sourcing, cleaning, filtering, annotation, quality inspection, and distribution adjustment. Participated in multiple end-to-end model iterations from data construction to training, evaluation, error analysis, inference validation, and benchmark-driven refinement. Achieved a 10+ point improvement on OCR/Document benchmarks compared to the previous version.",
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
            title: "MOSS-Video-Preview: Toward Real-Time Video Understanding via Cross-Attention",
            authors: "Pengyu Wang, Chenkun Tan, Shaojun Zhou, Wei Huang, Qirui Zhou, Zhan Huang, Zhen Ye, Jijun Cheng, Xiaomeng Qian, Yanxin Chen, Xingyang He, <u>Huazheng Zeng</u>, Chenghao Wang, Pengfei Wang, Hongkai Wang, Shanqing Gao, Yixian Tian, Chenghao Liu, Xinghao Wang, Botian Jiang, Xipeng Qiu",
            venue: "arXiv preprint arXiv:2606.07639, 2026",
            url: "https://arxiv.org/abs/2606.07639"
        },
        {
            title: "Your 'Notice' Is Missing: Detecting and Fixing Violations of Modification Terms in Open Source Licenses during Forking",
            authors: "Kaifeng Huang, Yingfeng Xia, Bihuan Chen, Siyang He, <u>Huazheng Zeng</u>, Zhuotong Zhou, Jin Guo, Xin Peng",
            venue: "ISSTA 2024 - ACM SIGSOFT International Symposium on Software Testing and Analysis",
            url: "https://dl.acm.org/doi/10.1145/3650212.3680339"
        }
    ]
};
