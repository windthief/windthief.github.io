document.addEventListener('DOMContentLoaded', function () {
    // 获取动态id
    function getQueryId() {
        const params = new URLSearchParams(window.location.search);
        return parseInt(params.get('id'));
    }
    const dynamicId = getQueryId();
    const dynamic = window.dynamicList ? window.dynamicList.find(d => d.id === dynamicId) : null;
    if (!dynamic) return;

    // 本地存储点赞状态和数量
    function getLikeState(id) {
        const data = JSON.parse(localStorage.getItem('likeState') || '{}');
        return data[id] || { liked: false, like: dynamic.like };
    }
    function setLikeState(id, liked, like) {
        const data = JSON.parse(localStorage.getItem('likeState') || '{}');
        data[id] = { liked, like };
        localStorage.setItem('likeState', JSON.stringify(data));
    }
    // 渲染动态详情
    const likeState = getLikeState(dynamic.id);
    const detailCard = document.querySelector('.dynamic-detail-card');
    if (detailCard) {
        detailCard.innerHTML = `
            <div class="dynamic-header">
                <div class="user-avatar">${dynamic.user.avatar}</div>
                <div class="user-info">
                    <div class="username">${dynamic.user.name}</div>
                    <div class="timestamp">${dynamic.user.college} • ${dynamic.time}</div>
                </div>
                <button class="btn btn-outline btn-small">关注</button>
            </div>
            <div class="dynamic-content">
                <div class="dynamic-text">
                    ${dynamic.text}
                    <div class="hashtag">${dynamic.hashtag}</div>
                </div>
                <div class="dynamic-image">
                    ${dynamic.image ? `<img src='${dynamic.image}' alt='动态图片'>` : ''}
                </div>
                <div class="dynamic-stats">
                    <div class="stat-item"><span>🔥</span> ${dynamic.views}次浏览</div>
                    <div class="stat-item"><span>📍</span> ${dynamic.location || ''}</div>
                </div>
                <div class="dynamic-actions">
                    <button class="action-btn like-btn${likeState.liked ? ' liked' : ''}">
                        <span class="like-icon">${likeState.liked ? `<svg viewBox='0 0 24 24' width='20' height='20' fill='#e6004c' stroke='#e6004c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z'></path></svg>` : `<svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='#e6004c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z'></path></svg>`}</span>
                        <span class="count">${likeState.like}</span>
                    </button>
                    <button class="action-btn"><span>↗️</span> 转发</button>
                    <button class="action-btn"><span>⭐</span> 收藏</button>
                </div>
            </div>
        `;
    }
    // 渲染评论
    function renderComments(comments, container) {
        if (!comments || !container) return;
        container.innerHTML = comments.map(comment => `
            <div class="comment-item">
                <div class="user-avatar">${comment.user.avatar}</div>
                <div class="comment-content">
                    <div class="comment-header">
                        <div class="username">${comment.user.name}</div>
                        <div class="timestamp">${comment.time}</div>
                    </div>
                    <div class="comment-text">${comment.text}</div>
                    <div class="comment-actions">
                        <button class="btn-link">👍 ${comment.like || 0}</button>
                        <button class="btn-link">回复</button>
                    </div>
                    ${comment.replies && comment.replies.length > 0 ? `<div class='comment-reply'>${renderCommentsHtml(comment.replies)}</div>` : ''}
                </div>
            </div>
        `).join('');
    }
    function renderCommentsHtml(comments) {
        return comments.map(comment => `
            <div class=\"comment-item\">\n                <div class=\"user-avatar\">${comment.user.avatar}</div>\n                <div class=\"comment-content\">\n                    <div class=\"comment-header\">\n                        <div class=\"username\">${comment.user.name}</div>\n                        <div class=\"timestamp\">${comment.time}</div>\n                    </div>\n                    <div class=\"comment-text\">${comment.text}</div>\n                    <div class=\"comment-actions\">\n                        <button class=\"btn-link\">👍 ${comment.like || 0}</button>\n                        <button class=\"btn-link\">回复</button>\n                    </div>\n                </div>\n            </div>\n        `).join('');
    }
    const commentsList = document.querySelector('.comments-list');
    renderComments(dynamic.comments, commentsList);
    // 更新评论数
    const commentTitle = document.querySelector('.section-title');
    if (commentTitle) {
        commentTitle.textContent = `评论 (${dynamic.comment})`;
    }

    // 评论功能
    const commentInput = document.querySelector('.comment-input');
    const commentBtn = document.querySelector('.comment-editor .btn');

    // 评论功能权限控制
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        if (commentInput) {
            commentInput.disabled = true;
            commentInput.placeholder = '请先登录后再评论';
            commentInput.style.background = '#f5f5f5';
            commentInput.style.cursor = 'not-allowed';
        }
        if (commentBtn) {
            commentBtn.addEventListener('click', function () {
                if (confirm('评论功能需要登录，是否前往登录？')) {
                    window.location.href = 'login.html';
                }
            });
        }
    }

    if (commentBtn) {
        commentBtn.addEventListener('click', function () {
            const commentText = commentInput.value.trim();
            if (!commentText) return;

            // 模拟添加评论
            const newComment = document.createElement('div');
            newComment.className = 'comment-item';
            newComment.innerHTML = `
                <div class="user-avatar">张</div>
                <div class="comment-content">
                    <div class="comment-header">
                        <div class="username">张同学</div>
                        <div class="timestamp">刚刚</div>
                    </div>
                    <div class="comment-text">${commentText}</div>
                    <div class="comment-actions">
                        <button class="btn-link">👍 0</button>
                        <button class="btn-link">回复</button>
                    </div>
                </div>
            `;

            // 添加到评论列表顶部
            document.querySelector('.comments-list').prepend(newComment);
            commentInput.value = '';

            // 更新评论数
            const commentTitle = document.querySelector('.section-title');
            const countMatch = commentTitle.textContent.match(/\d+/);
            if (countMatch) {
                const count = parseInt(countMatch[0]) + 1;
                commentTitle.textContent = commentTitle.textContent.replace(/\d+/, count);
            }
        });
    }

    // 评论输入框回车提交
    if (commentInput) {
        commentInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                commentBtn.click();
            }
        });
    }

    // 点赞交互
    const likeBtn = document.querySelector('.dynamic-detail-card .like-btn');
    if (likeBtn) {
        likeBtn.addEventListener('click', function() {
            let state = getLikeState(dynamic.id);
            state.liked = !state.liked;
            state.like += state.liked ? 1 : -1;
            setLikeState(dynamic.id, state.liked, state.like);
            // 同步首页localStorage
            const list = window.dynamicList;
            if (list) {
                const idx = list.findIndex(d => d.id === dynamic.id);
                if (idx !== -1) {
                    list[idx].liked = state.liked;
                    list[idx].like = state.like;
                }
            }
            // 重新渲染
            detailCard.querySelector('.like-btn .count').textContent = state.like;
            likeBtn.classList.toggle('liked', state.liked);
            likeBtn.querySelector('.like-icon').innerHTML = state.liked ? `<svg viewBox='0 0 24 24' width='20' height='20' fill='#e6004c' stroke='#e6004c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z'></path></svg>` : `<svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='#e6004c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z'></path></svg>`;
        });
    }

    // 顶部登录/注册按钮切换
    function renderHeaderAuthBtn() {
        const headerActions = document.querySelector('.header-actions');
        if (!headerActions) return;
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const userMenu = headerActions.querySelector('.user-menu');
        if (!isLoggedIn) {
            if (userMenu) userMenu.remove();
            if (!headerActions.querySelector('.btn-outline.btn-login')) {
                const loginA = document.createElement('a');
                loginA.className = 'btn btn-outline btn-login';
                loginA.href = 'login.html';
                loginA.textContent = '登录';
                headerActions.appendChild(loginA);
            }
            if (!headerActions.querySelector('.btn-primary.btn-register')) {
                const regA = document.createElement('a');
                regA.className = 'btn btn-primary btn-register';
                regA.href = 'register.html';
                regA.textContent = '注册';
                headerActions.appendChild(regA);
            }
        } else {
            // 已登录时显示大头像和用户名（样式与首页右侧一致）
            if (userMenu) {
                const user = JSON.parse(localStorage.getItem('currentUser'));
                userMenu.innerHTML = `
                    <div style="display:flex;align-items:center;gap:16px;">
                        <div class="user-avatar-large" style="width:60px;height:60px;font-size:28px;margin:0;">${user && user.avatar ? user.avatar : '张'}</div>
                        <span class="username" style="font-size:18px;font-weight:600;">${user && user.name ? user.name : '张同学'}</span>
                    </div>
                `;
                userMenu.className = 'user-menu user-avatar-large-menu';
                userMenu.style.display = 'flex';
                userMenu.style.alignItems = 'center';
                userMenu.style.justifyContent = 'center';
            }
        }
    }
    renderHeaderAuthBtn();
});