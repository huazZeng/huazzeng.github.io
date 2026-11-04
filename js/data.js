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
        "Multimodal Learning",
        "Document & Scientific Intelligence",
        "Open-source AI Systems"
    ],

    // About Me 描述
    about: [
        "I am a joint Ph.D. student in Artificial Intelligence at <strong>Fudan University</strong> and <strong>Shanghai Innovation Institute (SII)</strong>, advised by <a href=\"https://xpqiu.github.io/\" target=\"_blank\">Prof. Xipeng Qiu</a>. I received my Bachelor's degree in Software Engineering from Fudan University.",
        "My research focuses on <strong>vision-language models</strong> and <strong>multimodal learning</strong>, particularly document understanding, scientific information extraction, and real-time video understanding. I am also interested in building open-source, AI-driven systems."
    ],

    // 新闻动态
    news: [
        {
            date: "2026.09",
            content: "<a href=\"https://arxiv.org/abs/2609.06703\" target=\"_blank\">DianShi-RxnDB</a>, the main project I took part in during my internship at <strong>Shanghai AI Lab</strong> from July to November 2025, has been released. I’m grateful to have been part of it."
        },
        {
            date: "2026.08",
            content: "We released the <a href=\"https://arxiv.org/abs/2608.15045\" target=\"_blank\">MOSS-VL Technical Report</a>, covering offline and real-time vision-language understanding."
        },
        {
            date: "2026.07",
            content: "OpenMOSS released <a href=\"https://github.com/OpenMOSS/MOSS-VL/\" target=\"_blank\">MOSS-VL-Realtime</a> with improved OCR/document performance. <a href=\"https://openmoss.github.io/MOSS-VL\" target=\"_blank\">Blog</a>"
        },
        {
            date: "2026.06",
            content: "We released <a href=\"https://arxiv.org/abs/2606.07639\" target=\"_blank\">MOSS-Video-Preview</a>, exploring real-time video understanding through cross-attention."
        },
        {
            date: "2026.04",
            content: "We released <a href=\"https://github.com/OpenMOSS/MOSS-VL/\" target=\"_blank\">MOSS-VL</a>, including both the Instruct and Base models."
        }
    ],

    // 实习经历
    internships: [
        {
            title: "VLM Pre-training Algorithm Intern",
            location: "OpenMOSS Team",
            period: "December 2025 - Present",
            description: "Contributing to OCR and document understanding for <a href=\"https://github.com/OpenMOSS/MOSS-VL/\" target=\"_blank\">MOSS-VL</a>, focusing on large-scale data construction, model training, evaluation, and inference."
        },
        {
            title: "Vision-Language Model Algorithm Intern",
            location: "Shanghai AI Lab",
            period: "July 2025 - November 2025",
            description: "Worked on vision-language models for chemical document parsing and fine-grained grounding. Contributed to <a href=\"https://github.com/opendatalab/MinerU\" target=\"_blank\">MinerU</a>, large-scale data production, and VLM inference infrastructure."
        }
    ],

    // 研究经历
    research: [
        {
            title: "Research Assistant, NLP lab",
            location: "Fudan University",
            period: "June 2023 - September 2023",
            description: "Contributed to LLM-EVAL through data cleaning, dataset construction, and comparative evaluation of large language models."
        }
    ],

    // 项目经历
    projects: [
        {
            title: "MOSS-VL: Open-Source Vision-Language Model",
            location: "OpenMOSS Team",
            period: "December 2025 - Present",
            description: "Leading OCR and document understanding for <a href=\"https://github.com/OpenMOSS/MOSS-VL/\" target=\"_blank\">MOSS-VL</a>. Built a 200M-scale pre-training data pipeline and contributed to end-to-end model development, improving OCR/document benchmarks by 10+ points over the previous version.",
            links: [
                { label: "GitHub", url: "https://github.com/OpenMOSS/MOSS-VL" },
                { label: "MOSS-VL Tech Report", url: "https://arxiv.org/abs/2608.15045" },
                { label: "MOSS-Video Tech Report", url: "https://arxiv.org/abs/2606.07639" }
            ]
        },
        {
            title: "MinerU: Document Parsing Engine",
            location: "Shanghai AI Lab",
            period: "July 2025 - November 2025",
            description: "Improved <a href=\"https://github.com/opendatalab/MinerU\" target=\"_blank\">MinerU</a>'s post-processing algorithms for complex document layouts, increasing extraction accuracy and robustness.",
       
            links: [
                { label: "GitHub", url: "https://github.com/opendatalab/MinerU" }
            ]
        },
        {
            title: "Collaborative Researcher, Xiyuan Project",
            location: "Fudan University",
            period: "May 2024 - February 2025",
            description: "Developed an LLM-based system to detect and analyze open-source license conflicts and compatibility issues in software dependencies.",
            links: [
                { label: "Code", url: "https://github.com/huazZeng/license_llm_public" },
                { label: "Paper", url: "https://dl.acm.org/doi/10.1145/3650212.3680339" },
                { label: "Report", url: "https://github.com/huazZeng/license_llm_public/blob/main/report.pdf" }
            ]
        },
        
    ],

    // 论文发表
    publications: [
        {
            title: "MOSS-VL Technical Report",
            authors: "Pengyu Wang, Chenkun Tan, Shaojun Zhou, Qirui Zhou, Yanxin Chen, Xingyang He, <u>Huazheng Zeng</u>, Jijun Cheng, Chenghao Wang, Xiaomeng Qian, Pengfei Wang, Zhan Huang, Shanqing Gao, Wei Huang, Longjun Cao, Wu Ran, Jie Liu, Changtai Zhu, Hongkai Wang, Yixian Tian, Chenghao Liu, Zhen Ye, Xinghao Wang, Botian Jiang, Guoguo Feng, Zhaoye Fei, Ruixiao Li, Mingshu Chen, Yang Gao, Qinyuan Cheng, Shimin Li, Xipeng Qiu",
            venue: "arXiv preprint arXiv:2608.15045, 2026",
            url: "https://arxiv.org/abs/2608.15045",
            links: [
                { label: "GitHub", url: "https://github.com/OpenMOSS/MOSS-VL" },
                { label: "Hugging Face", url: "https://huggingface.co/OpenMOSS-Team" },
                { label: "Website", url: "https://openmoss.github.io/MOSS-VL" }
            ]
        },
        {
            title: "MOSS-Video-Preview: Toward Real-Time Video Understanding via Cross-Attention",
            authors: "Pengyu Wang, Chenkun Tan, Shaojun Zhou, Wei Huang, Qirui Zhou, Zhan Huang, Zhen Ye, Jijun Cheng, Xiaomeng Qian, Yanxin Chen, Xingyang He, <u>Huazheng Zeng</u>, Chenghao Wang, Pengfei Wang, Hongkai Wang, Shanqing Gao, Yixian Tian, Chenghao Liu, Xinghao Wang, Botian Jiang, Xipeng Qiu",
            venue: "arXiv preprint arXiv:2606.07639, 2026",
            url: "https://arxiv.org/abs/2606.07639",
            links: [
                { label: "GitHub", url: "https://github.com/OpenMOSS/MOSS-Video-Preview" },
                { label: "Hugging Face", url: "https://huggingface.co/collections/OpenMOSS-Team/moss-video-preview" }
            ]
        },
        {
            title: "RxnExBench: Benchmarking Vision-Language Models for Structured Chemical Reaction Extraction from Scientific Literature",
            authors: "Jiaxing Sun, Junyuan Gao, Ruikang Zhang, Hao Zheng, Lingli Ge, Xiao An, Jiang Wu, <u>Huazheng Zeng</u>, Jiahe Song, Chen Zhu, Haote Yang, Jingchao Wang, Lu Chen, Yuanyuan Cao, Ruijie Zhang, Shengxin Lu, Weijia Li, Lijun Wu, Conghui He",
            venue: "Findings of the Association for Computational Linguistics: EMNLP 2026",
            url: "https://arxiv.org/abs/2610.32221"
        },
        {
            title: "DianShi-RxnDB: A Large-Scale, Fine-Grained Organic Reaction Data Platform Built via a Fully Automated Pipeline for Researchers and AI Agents",
            authors: "Yubin Wang, Xingjian Wei, Jiang Wu, Yinfan Wang, Boyu Zhu, Lin Zhang, Jianing Yu, <u>Huazheng Zeng</u>, Ruiyi Ding, Junyuan Gao, Jiaxing Sun, Lingli Ge, Haote Yang, Jingchao Wang, Aijia Guo, Qian Jiang, Yurui Zhao, Wenjian Zhang, Chen Zhu, Lijun Wu, Xiaolei Yang, Haodong Chen, Junjie Yuan, Zichao Ye, Shaowei Hou, Jing Ye, Jia Yu, Shan Wang, Lijun Wu, Jiantao Qiu, Chao Xu, Yuqiang Li, Guangyu Wang, Bowen Zhou, Dahua Lin, Conghui He",
            venue: "arXiv preprint arXiv:2609.06703, 2026",
            url: "https://arxiv.org/abs/2609.06703",
            links: [
                { label: "Website", url: "https://dianshi.opendatalab.org.cn/" }
            ]
        },
        {
            title: "Your 'Notice' Is Missing: Detecting and Fixing Violations of Modification Terms in Open Source Licenses during Forking",
            authors: "Kaifeng Huang, Yingfeng Xia, Bihuan Chen, Siyang He, <u>Huazheng Zeng</u>, Zhuotong Zhou, Jin Guo, Xin Peng",
            venue: "ISSTA 2024 - ACM SIGSOFT International Symposium on Software Testing and Analysis",
            url: "https://dl.acm.org/doi/10.1145/3650212.3680339"
        }
    ]
};
