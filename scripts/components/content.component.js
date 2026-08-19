class AppContent {
    render() {
        const postId = window.location.hash.replace("#", "");

        if (postId && window.POSTS[postId]) {
            const post = window.POSTS[postId];

            return `
                <div class="post-view">
                    <article class="back-tile" onclick="Utils.navigateTo('')">
                        <div class="back-tile-icon">←</div>
                        <div class="back-tile-content">
                            <span class="back-tile-title">Powrót do listy wpisów</span>
                            <span class="back-tile-subtitle">Przejdź na stronę główną</span>
                        </div>
                    </article>
                    ${post.renderPost()}
                </div>
            `;
        }

        const tilesHtml = Object.values(window.POSTS)
            .reverse()
            .map(post => post.renderTile())
            .join("");

        return `
            <div class="posts-grid">
                ${tilesHtml}
            </div>
        `;
    }
}