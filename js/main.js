/**
 * 主JavaScript文件
 * 负责根据data.js中的数据动态渲染页面内容
 */

document.addEventListener('DOMContentLoaded', function () {
    renderHeader();
    renderMainContent();
});

/**
 * 渲染页头（姓名、职位、联系方式、照片）
 */
function renderHeader() {
    const { profile, contact, interests } = personalData;

    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-title').textContent =
        `${profile.title} · ${profile.institution}`;
    document.getElementById('profile-photo').src = profile.photo;

    const contacts = [
        `<a href="mailto:${contact.email}">${contact.email}</a>`,
        `<a href="${contact.github.url}" target="_blank">GitHub</a>`,
        `<a href="${contact.linkedin.url}" target="_blank">LinkedIn</a>`,
        `<a href="${contact.googleScholar.url}" target="_blank">Google Scholar</a>`,
        `<a href="${profile.blog}" target="_blank">Blog</a>`
    ];

    document.getElementById('contact-list').innerHTML =
        contacts.join('<span class="contact-sep">|</span>');

    document.getElementById('interests-row').innerHTML =
        `<strong>Research Interests:</strong> ${interests.join(' · ')}`;
}

/**
 * 渲染主内容区
 */
function renderMainContent() {
    const { about } = personalData;

    document.getElementById('about-content').innerHTML =
        about.map(paragraph => `<p>${paragraph}</p>`).join('');

    renderNews();
    renderInternships();
    renderResearch();
    renderProjects();
    renderPublications();
}

/**
 * 渲染新闻动态
 */
function renderNews() {
    document.getElementById('news-list').innerHTML = personalData.news.map(item => `
        <li>
            <span class="news-date">[${item.date}]</span>${item.content}
        </li>
    `).join('');
}

/**
 * 渲染带标题/元信息的条目列表
 */
function renderEntries(listId, items, options) {
    const list = document.getElementById(listId);
    if (!list) return;

    list.innerHTML = items.map(item => {
        const links = item.links ? item.links.map(link =>
            `<a href="${link.url}" class="tag" target="_blank">${link.label}</a>`
        ).join('') : '';

        const linksBlock = links
            ? `<div class="entry-links">${links}</div>`
            : '';

        const descBlock = item.description
            ? `<p class="entry-desc">${item.description}</p>`
            : '';

        return `
            <li>
                <div class="entry-header">
                    <span class="entry-title">${item.title}</span>
                    <span class="entry-meta">${item.location} · ${item.period}</span>
                </div>
                ${descBlock}
                ${linksBlock}
            </li>
        `;
    }).join('');
}

function renderInternships() {
    renderEntries('internships-list', personalData.internships);
}

function renderResearch() {
    renderEntries('research-list', personalData.research);
}

function renderProjects() {
    renderEntries('projects-list', personalData.projects);
}

/**
 * 渲染论文发表
 */
function renderPublications() {
    document.getElementById('publications-list').innerHTML =
        personalData.publications.map(item => `
            <li>
                <div class="entry-header">
                    <a href="${item.url}" class="pub-title-link" target="_blank">${item.title}</a>
                </div>
                <span class="pub-authors">${item.authors}</span>
                <em class="pub-venue">${item.venue}</em>
            </li>
        `).join('');
}
