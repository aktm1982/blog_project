export function render(post) {
    const types = {post: 'Статьи', news: 'Новости', advert: 'Объявления'}
    const typeIndex = post['post-type']

    const favorites = JSON.parse(localStorage.getItem('favorites')) || {}
    const favoritesLink = favorites.hasOwnProperty(post['post-id']) ? 'В избранном' : 'Добавить в избранное'

    return (
        `<div class="post__item">
            <div class="post-header">
                <h2 class="post-title">${post['post-title']}</h2>
                <div class="post-type">${types[typeIndex]}</div>
            </div>
            <p class="post-content">${post['post-content']}</p>
            <div class="post-footer">
                <button class="favorites-link" data-id=${post['post-id']}>${favoritesLink}</button>
                <p class="created-at">${post['created-at']}</p>
            </div>
        </div>`
    )
}