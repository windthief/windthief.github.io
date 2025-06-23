document.addEventListener('DOMContentLoaded', function () {
    // 添加图片功能
    const addImageBtn = document.getElementById('add-image');
    const imagePreview = document.getElementById('image-preview');
    const imageUpload = document.getElementById('image-upload');
    const previewImages = document.querySelector('.preview-images');

    addImageBtn.addEventListener('click', function () {
        imageUpload.click();
    });

    imageUpload.addEventListener('change', function () {
        if (this.files.length > 0) {
            imagePreview.classList.remove('hidden');

            // 清空预览区域
            previewImages.innerHTML = '';

            // 添加图片预览
            for (let i = 0; i < this.files.length; i++) {
                const file = this.files[i];
                const reader = new FileReader();

                reader.onload = function (e) {
                    const previewImage = document.createElement('div');
                    previewImage.className = 'preview-image';
                    previewImage.innerHTML = `
                        <img src="${e.target.result}" alt="预览图">
                        <button class="remove-image">✕</button>
                    `;
                    previewImages.appendChild(previewImage);

                    // 添加删除按钮事件
                    previewImage.querySelector('.remove-image').addEventListener('click', function () {
                        previewImage.remove();

                        // 如果没有图片了，隐藏预览区域
                        if (previewImages.children.length === 0) {
                            imagePreview.classList.add('hidden');
                        }
                    });
                };

                reader.readAsDataURL(file);
            }
        }
    });

    // 添加话题功能
    const addTopicBtn = document.getElementById('add-topic');
    const topicTags = document.getElementById('topic-tags');
    const addTopicInput = document.getElementById('add-topic-input');

    addTopicBtn.addEventListener('click', function () {
        topicTags.classList.remove('hidden');
        addTopicInput.focus();
    });

    addTopicInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const tagValue = this.value.trim();

            if (tagValue && tagValue.length > 0) {
                const tagElement = document.createElement('div');
                tagElement.className = 'topic-tag';
                tagElement.innerHTML = `
                    ${tagValue}
                    <span class="remove-tag">×</span>
                `;

                // 添加到话题标签区域
                this.parentElement.insertBefore(tagElement, this);
                this.value = '';

                // 添加删除标签事件
                tagElement.querySelector('.remove-tag').addEventListener('click', function () {
                    tagElement.remove();
                });
            }
        }
    });

    // 发布动态
    const publishBtn = document.getElementById('publish-btn');
    if (publishBtn) {
        publishBtn.addEventListener('click', function () {
            const content = document.getElementById('post-content').value;
            if (!content || content.trim() === '') {
                alert('动态内容不能为空！');
                return;
            }

            // 模拟发布成功
            alert('动态发布成功！');
            window.location.href = 'index.html';
        });
    }
});