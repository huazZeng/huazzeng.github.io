/**
 * 主JavaScript文件
 * 负责根据data.js中的数据动态渲染页面内容
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    renderSidebar();
    renderMainContent();
});

/**
 * 渲染侧边栏内容
 */
function renderSidebar() {
    const { profile, contact, interests } = personalData;

    // 设置基本信息
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-title').innerHTML = `${profile.title}<br>${profile.institution}`;
    document.getElementById('profile-photo').src = profile.photo;

    // 渲染联系方式
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = `
        <li>GitHub: <a href="${contact.github.url}" target="_blank">${contact.github.label}</a></li>
        <li>Email: <a href="mailto:${contact.email}">${contact.email}</a></li>
        <li>LinkedIn: <a href="${contact.linkedin.url}" target="_blank">${contact.linkedin.label}</a></li>
        <li>Google Scholar: <a href="${contact.googleScholar.url}" target="_blank">${contact.googleScholar.label}</a></li>
    `;

    // 渲染研究兴趣
    const interestsList = document.getElementById('interests-list');
    interestsList.innerHTML = interests.map(interest => `<li>${interest}</li>`).join('');
}

/**
 * 渲染主内容区
 */
function renderMainContent() {
    const { about, blog } = personalData;

    // 渲染About Me部分
    const aboutSection = document.getElementById('about-content');
    aboutSection.innerHTML = about.map(paragraph => `<p>${paragraph}</p>`).join('') +
        `<p>Personal Blog: <a href="${blog}" class="tag" target="_blank">huazZeng's Blog</a></p>`;

    // 渲染各个部分
    renderNews();
    renderInternships();
    renderResearch();
    renderPublications();
}

/**
 * 渲染新闻动态
 */
function renderNews() {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = personalData.news.map(item => `
        <li>
            <strong>[${item.date}]</strong> ${item.content}
        </li>
    `).join('');
}

/**
 * 渲染实习经历
 */
function renderInternships() {
    const internshipsList = document.getElementById('internships-list');
    internshipsList.innerHTML = personalData.internships.map(item => `
        <li>
            <span class="location-time">${item.location} | ${item.period}</span>
            <strong>${item.title}</strong>
            <br>
            ${item.description}
        </li>
    `).join('');
}

/**
 * 渲染研究经历
 */
function renderResearch() {
    const researchList = document.getElementById('research-list');
    researchList.innerHTML = personalData.research.map(item => {
        const links = item.links ? item.links.map(link =>
            `<a href="${link.url}" class="tag" target="_blank">${link.label}</a>`
        ).join(' ') : '';

        return `
            <li>
                <span class="location-time">${item.location} | ${item.period}</span>
                <strong>${item.title}</strong> ${links}
                <br>
                ${item.description}
            </li>
        `;
    }).join('');
}

/**
 * 渲染论文发表
 */
function renderPublications() {
    const publicationsList = document.getElementById('publications-list');
    publicationsList.innerHTML = personalData.publications.map(item => `
        <li>
            <strong><a href="${item.url}" target="_blank" style="color: #2c3e50; text-decoration: none;">${item.title}</a></strong>
            ${item.authors}
            <br>
            <em>${item.venue}</em>
        </li>
    `).join('');
}

