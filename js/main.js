document.addEventListener('DOMContentLoaded', function () {
    renderHeader();
    renderMainContent();
    initNavigation();
    initHeaderScroll();
});

function externalLink(url, label, className = '') {
    return `<a href="${url}" class="${className}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

function renderHeader() {
    const { profile, contact } = personalData;

    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-title').textContent = profile.title;
    document.getElementById('profile-institution').textContent = `${profile.institution} × SII`;
    document.getElementById('profile-photo').src = profile.photo;
    document.getElementById('profile-photo').alt = `Portrait of ${profile.name}`;

    const contacts = [
        `<a href="mailto:${contact.email}">Email <span aria-hidden="true">↗</span></a>`,
        externalLink(contact.github.url, 'GitHub <span aria-hidden="true">↗</span>'),
        externalLink(contact.linkedin.url, 'LinkedIn <span aria-hidden="true">↗</span>'),
        externalLink(contact.googleScholar.url, 'Google Scholar <span aria-hidden="true">↗</span>'),
        externalLink(profile.blog, 'Blog <span aria-hidden="true">↗</span>')
    ];

    document.getElementById('contact-list').innerHTML = contacts.join('');
    document.getElementById('footer-email').href = `mailto:${contact.email}`;
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

function renderMainContent() {
    const { about, interests } = personalData;

    document.getElementById('about-content').innerHTML =
        about.map(paragraph => `<p>${paragraph}</p>`).join('');
    document.getElementById('interests-row').innerHTML =
        interests.map(interest => `<span class="interest-tag">${interest}</span>`).join('');

    renderNews();
    renderEntries('internships-list', personalData.internships);
    renderEntries('research-list', personalData.research);
    renderProjects();
    renderPublications();
}

function renderNews() {
    document.getElementById('news-list').innerHTML = personalData.news.map(item => `
        <li>
            <time class="news-date">${item.date}</time>
            <div class="news-content">${item.content}</div>
        </li>
    `).join('');
}

function renderEntries(listId, items) {
    const list = document.getElementById(listId);
    if (!list) return;

    list.innerHTML = items.map(item => `
        <li>
            <div class="entry-main">
                <span class="entry-title">${item.title}</span>
                <span class="entry-location">${item.location}</span>
            </div>
            <span class="entry-meta">${item.period}</span>
            ${item.description ? `<p class="entry-desc">${item.description}</p>` : ''}
        </li>
    `).join('');
}

function renderProjects() {
    document.getElementById('projects-list').innerHTML = personalData.projects.map((item, index) => {
        const links = item.links ? item.links.map(link =>
            externalLink(link.url, link.label, 'tag')
        ).join('') : '';

        return `
            <li>
                <span class="project-index">${String(index + 1).padStart(2, '0')}</span>
                <div class="project-content">
                    <div class="project-heading">
                        <div>
                            <span class="entry-title">${item.title}</span>
                            <span class="entry-location">${item.location}</span>
                        </div>
                        <span class="entry-meta">${item.period}</span>
                    </div>
                    <p class="entry-desc">${item.description}</p>
                    ${links ? `<div class="entry-links">${links}</div>` : ''}
                </div>
            </li>
        `;
    }).join('');
}

function renderPublications() {
    document.getElementById('publications-list').innerHTML =
        personalData.publications.map((item, index) => {
            const links = item.links ? item.links.map(link =>
                externalLink(link.url, link.label)
            ).join('') : '';
            const authorTitle = item.authors.replace(/<[^>]*>/g, '');

            return `
                <li>
                    <span class="pub-number">[${index + 1}]</span>
                    <div>
                        ${externalLink(item.url, item.title, 'pub-title-link')}
                        <span class="pub-authors" title="${authorTitle}">${item.authors}</span>
                        <div class="pub-meta">
                            <em class="pub-venue">${item.venue}</em>
                            ${links ? `<span class="pub-links">${links}</span>` : ''}
                        </div>
                    </div>
                    <span class="pub-arrow" aria-hidden="true">↗</span>
                </li>
            `;
        }).join('');
}

function initNavigation() {
    const header = document.getElementById('site-header');
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('site-nav');
    const navLinks = [...nav.querySelectorAll('a[data-section]')];

    function closeMenu() {
        header.classList.remove('is-open');
        document.body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
    }

    toggle.addEventListener('click', function () {
        const isOpen = header.classList.toggle('is-open');
        document.body.classList.toggle('menu-open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    navLinks.forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeMenu();
            toggle.focus();
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 760) closeMenu();
    });

    const sections = navLinks
        .map(link => document.getElementById(link.dataset.section))
        .filter(Boolean);
    let ticking = false;

    function updateActiveSection() {
        const readingLine = window.scrollY + header.offsetHeight + 120;
        let currentSection = window.scrollY < sections[0].offsetTop - header.offsetHeight - 120
            ? null
            : sections[0];

        sections.forEach(section => {
            if (section.offsetTop <= readingLine) currentSection = section;
        });

        navLinks.forEach(link => {
            const active = currentSection && link.dataset.section === currentSection.id;
            link.classList.toggle('is-active', Boolean(active));
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(updateActiveSection);
            ticking = true;
        }
    }, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();
}

function initHeaderScroll() {
    const header = document.getElementById('site-header');

    function update() {
        header.classList.toggle('is-scrolled', window.scrollY > 20);
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
}
