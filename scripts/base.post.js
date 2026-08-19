window.POSTS = window.POSTS || {};

class BasePost {
    constructor(input) {
        this.id = input.id;
        this.title = input.title;
        this.description = input.description;
        this.tags = input.tags;
        this.date = input.date;

        window.POSTS[this.id] = this;
    }

    renderTile() {
        const tagsString = this.tags.join(', ');

        return `
            <article class="post-card" onclick="Utils.navigateTo('${this.id}')">
                <header class="card-top">
                    <h3 class="card-title">${this.title}</h3>
                </header>
                <div class="card-bottom">
                    <p class="card-description">${this.description}</p>
                    ${tagsString ? `<div class="card-tags">${tagsString}</div>` : ''}
                    ${this.date ? `<div class="card-date">${this.date}</div>` : ''}
                </div>
            </article>
        `;
    }

    renderPost() {
        return `Empty Post`;
    }
}