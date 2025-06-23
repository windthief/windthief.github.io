// 动态管理页面脚本

document.addEventListener('DOMContentLoaded', function () {
    renderDynamicTable();
});

function renderDynamicTable() {
    const tbody = document.getElementById('dynamic-table-body');
    let list = window.dynamicList || [];
    let html = '';
    list.forEach(item => {
        html += `
            <tr>
                <td>${item.id}</td>
                <td>${item.user.name} <span style="font-size:12px;color:#888;">(${item.user.college||''})</span></td>
                <td style="max-width:220px;word-break:break-all;">${item.text}</td>
                <td>${item.hashtag || ''}</td>
                <td>${item.time}</td>
                <td>${item.like}</td>
                <td>${item.comment}</td>
                <td>${item.views}</td>
                <td>
                    <div class="action-btns">
                        <button class="btn btn-small btn-warning" data-id="${item.id}">删除</button>
                    </div>
                </td>
            </tr>
        `;
    });
    tbody.innerHTML = html || '<tr><td colspan="9">暂无动态</td></tr>';
    // 绑定删除事件
    tbody.querySelectorAll('.btn-warning').forEach(btn => {
        btn.onclick = function() {
            const id = Number(this.dataset.id);
            if (confirm('确定要删除该动态吗？')) {
                window.dynamicList = window.dynamicList.filter(d => d.id !== id);
                renderDynamicTable();
            }
        };
    });
} 