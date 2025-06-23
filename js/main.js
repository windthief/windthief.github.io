// 公共JavaScript函数
document.addEventListener('DOMContentLoaded', function () {
    // 设置导航栏活动状态
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });

    // 登录/注册状态切换
    if (document.querySelector('.auth-switch')) {
        const authSwitch = document.querySelector('.auth-switch a');

    }

    // 处理用户头像显示
    const userAvatars = document.querySelectorAll('.user-avatar');
    userAvatars.forEach(avatar => {
        const name = avatar.textContent || 'User';
        avatar.textContent = name.charAt(0).toUpperCase();
        avatar.style.backgroundColor = generateColorFromInitials(name);
    });

    // 点赞效果
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const isLiked = this.classList.toggle('liked');
            let countElement = this.querySelector('.count');
            let count = parseInt(countElement.textContent) || 0;

            if (isLiked) {
                count++;
            } else {
                count--;
            }

            countElement.textContent = count;
        });
    });

    const footerColumns = document.querySelectorAll('.footer-column.dropdown');

    footerColumns.forEach(column => {
        // 添加鼠标悬停效果
        column.addEventListener('mouseenter', function () {
            this.classList.add('hovering');
        });

        column.addEventListener('mouseleave', function () {
            this.classList.remove('hovering');
        });

        // 触摸设备支持
        column.addEventListener('touchstart', function () {
            this.classList.toggle('hovering');
        });
    });
});

function generateColorFromInitials(name) {
    const colors = [
        '#FFCCD5', '#FFB8D9', '#FF9AA2', '#FFB7B2', '#FFDAC1',
        '#E2F0CB', '#B5EAD7', '#C7CEEA', '#B8E0D2', '#D4A5A5'
    ];
    const charCode = name.charCodeAt(0);
    return colors[charCode % colors.length];
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}