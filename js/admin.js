// 获取当前用户信息（依然从localStorage判断是否为管理员）
function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem('currentUser'));
    } catch {
        return null;
    }
}

// 假用户数据（每次刷新页面都恢复）
let USERS = [
    { id: '1', studentId: '20230001', name: '张三', nickname: '三哥', college: '计算机学院', createdAt: '2023-09-01', isBanned: false, isMuted: false, password: '123456' },
    { id: '2', studentId: '20230002', name: '李四', nickname: '小四', college: '外国语学院', createdAt: '2023-09-02', isBanned: false, isMuted: false, password: '123456' },
    { id: '3', studentId: '20230003', name: '王五', nickname: '五仔', college: '管理学院', createdAt: '2023-09-03', isBanned: true, isMuted: true, password: '123456' },
    { id: '4', studentId: '20230004', name: '赵六', nickname: '六六', college: '法学院', createdAt: '2023-09-04', isBanned: false, isMuted: false, password: '123456' },
    { id: '5', studentId: '20230005', name: '钱七', nickname: '七哥', college: '艺术学院', createdAt: '2023-09-05', isBanned: false, isMuted: true, password: '123456' },
    { id: '6', studentId: '20230006', name: '孙八', nickname: '八妹', college: '数学学院', createdAt: '2023-09-06', isBanned: false, isMuted: false, password: '123456' }
];

// 页面加载后执行
document.addEventListener('DOMContentLoaded', function () {
    // 检查是否为管理员
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.isAdmin) {
        showNotification('无权访问管理界面', 'error');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
        return;
    }

    // 加载用户数据
    loadUserData();

    // 刷新按钮：恢复初始数组
    document.getElementById('refresh-users').addEventListener('click', function() {
        USERS = [
            { id: '1', studentId: '20230001', name: '张三', nickname: '三哥', college: '计算机学院', createdAt: '2023-09-01', isBanned: false, isMuted: false, password: '123456' },
            { id: '2', studentId: '20230002', name: '李四', nickname: '小四', college: '外国语学院', createdAt: '2023-09-02', isBanned: false, isMuted: false, password: '123456' },
            { id: '3', studentId: '20230003', name: '王五', nickname: '五仔', college: '管理学院', createdAt: '2023-09-03', isBanned: true, isMuted: true, password: '123456' },
            { id: '4', studentId: '20230004', name: '赵六', nickname: '六六', college: '法学院', createdAt: '2023-09-04', isBanned: false, isMuted: false, password: '123456' },
            { id: '5', studentId: '20230005', name: '钱七', nickname: '七哥', college: '艺术学院', createdAt: '2023-09-05', isBanned: false, isMuted: true, password: '123456' },
            { id: '6', studentId: '20230006', name: '孙八', nickname: '八妹', college: '数学学院', createdAt: '2023-09-06', isBanned: false, isMuted: false, password: '123456' }
        ];
        loadUserData();
    });

    // 搜索功能
    document.querySelector('.search-container .btn-primary').addEventListener('click', function() {
        const keyword = document.querySelector('.search-input').value.trim();
        loadUserData(keyword);
    });
    document.querySelector('.search-input').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const keyword = this.value.trim();
            loadUserData(keyword);
        }
    });
});

// 渲染用户表格
function loadUserData(keyword = '') {
    let users = USERS;
    const tableBody = document.getElementById('user-table-body');

    // 搜索过滤
    if (keyword) {
        users = users.filter(user =>
            user.studentId.includes(keyword) ||
            user.name.includes(keyword) ||
            (user.nickname && user.nickname.includes(keyword))
        );
    }

    // 清空表格
    tableBody.innerHTML = '<tr><td colspan="9">加载中...</td></tr>';

    // 模拟延迟
    setTimeout(() => {
        let tableHTML = '';

        users.forEach(user => {
            tableHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.studentId}</td>
                    <td>${user.name}</td>
                    <td>${user.nickname || '-'}</td>
                    <td>${user.college}</td>
                    <td>${formatDate(user.createdAt)}</td>
                    <td>
                        <span class="status-badge ${user.isBanned ? 'banned' : 'active'}">
                            ${user.isBanned ? '已封禁' : '正常'}
                        </span>
                    </td>
                    <td>
                        <span class="status-badge" style="background:${user.isMuted ? '#ff9800' : '#4caf50'};color:white;">
                            ${user.isMuted ? '已禁言' : '正常'}
                        </span>
                    </td>
                    <td>
                        <div class="action-btns">
                        <button class="btn btn-small btn-secondary" data-action="reset" data-id="${user.id}">重置密码</button>
                        <button class="btn btn-small ${user.isBanned ? 'btn-success' : 'btn-danger'}" data-action="ban" data-id="${user.id}">
                            ${user.isBanned ? '解封' : '封禁'}
                        </button>
                            <button class="btn btn-small ${user.isMuted ? 'btn-success' : 'btn-warning'}" data-action="mute" data-id="${user.id}">
                                ${user.isMuted ? '解除禁言' : '禁言'}
                            </button>
                            <button class="btn btn-small btn-warning" data-action="delete" data-id="${user.id}">删除</button>
                        </div>
                    </td>
                </tr>
            `;
        });

        tableBody.innerHTML = tableHTML || '<tr><td colspan="9">暂无用户数据</td></tr>';

        // 添加操作按钮事件
        document.querySelectorAll('[data-action="reset"]').forEach(btn => {
            btn.addEventListener('click', function () {
                resetUserPassword(this.dataset.id);
            });
        });

        document.querySelectorAll('[data-action="ban"]').forEach(btn => {
            btn.addEventListener('click', function () {
                toggleUserBanStatus(this.dataset.id);
            });
        });

        document.querySelectorAll('[data-action="mute"]').forEach(btn => {
            btn.addEventListener('click', function () {
                toggleUserMuteStatus(this.dataset.id);
            });
        });

        document.querySelectorAll('[data-action="delete"]').forEach(btn => {
            btn.addEventListener('click', function () {
                deleteUser(this.dataset.id);
            });
        });
    }, 300);
}

// 重置用户密码
function resetUserPassword(userId) {
    const userIndex = USERS.findIndex(u => u.id === userId);
    if (userIndex === -1) return;
    USERS[userIndex].password = '123456';
    showNotification(`已将用户 ${USERS[userIndex].name} 的密码重置为默认`);
}

// 封禁/解封用户
function toggleUserBanStatus(userId) {
    const userIndex = USERS.findIndex(u => u.id === userId);
    if (userIndex === -1) return;
    USERS[userIndex].isBanned = !USERS[userIndex].isBanned;
    showNotification(`已${USERS[userIndex].isBanned ? '封禁' : '解封'}用户 ${USERS[userIndex].name}`);
    loadUserData();
}

// 禁言/解除禁言
function toggleUserMuteStatus(userId) {
    const userIndex = USERS.findIndex(u => u.id === userId);
    if (userIndex === -1) return;
    USERS[userIndex].isMuted = !USERS[userIndex].isMuted;
    showNotification(`已${USERS[userIndex].isMuted ? '禁言' : '解除禁言'}用户 ${USERS[userIndex].name}`);
    loadUserData();
}

// 删除用户
function deleteUser(userId) {
    const userIndex = USERS.findIndex(u => u.id === userId);
    if (userIndex === -1) return;
    if (!confirm(`确定要删除用户 ${USERS[userIndex].name} 吗？`)) return;
    USERS.splice(userIndex, 1);
    showNotification(`已删除用户 ${userId}`);
    loadUserData();
}

// 日期格式化函数
function formatDate(dateStr) {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}