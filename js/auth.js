document.addEventListener('DOMContentLoaded', function () {
    // 表单切换功能
    let isLoginVisible = true;
    const toggleAuthBtn = document.getElementById('toggle-auth-btn');
    const switchLink = document.getElementById('switch-link');
    const switchText = document.getElementById('switch-text');
    const authTitle = document.getElementById('auth-title');

    function toggleForms() {
        const loginForm1 = document.getElementById('login-form');
        const registerForm1 = document.getElementById('register-form');

        if (isLoginVisible) {
            // 切换到注册表单
            loginForm1.classList.add('hidden');
            registerForm1.classList.remove('hidden');
            authTitle.textContent = '创建新账号';
            switchText.textContent = '已有账号？';
            switchLink.textContent = '立即登录';
        } else {
            // 切换到登录表单
            registerForm1.classList.add('hidden');
            loginForm1.classList.remove('hidden');
            authTitle.textContent = '登录你的账号';
            switchText.textContent = '没有账号？';
            switchLink.textContent = '立即注册';
        }
        isLoginVisible = !isLoginVisible;
    }
    // 密码可见性切换
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function () {
            const passwordInput = this.previousElementSibling;
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.textContent = '👁️';
            } else {
                passwordInput.type = 'password';
                this.textContent = '👁️';
            }
        });
    });

    // 注册表单验证
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        // 密码强度检测
        const passwordInput = document.getElementById('reg-password');
        const strengthBar = document.querySelector('.strength-bar');
        const strengthText = document.querySelector('.strength-text');
        passwordInput.addEventListener('input', function () {
            const password = this.value;
            let strength = 0;
            let text = '';

            // 至少6位
            if (password.length < 6) {
                strength = 1;
                text = '弱';
            } else {
                // 包含数字、字母、特殊字符
                if (password.match(/[a-zA-Z]+/)) strength++;
                if (password.match(/[0-9]+/)) strength++;
                if (password.match(/[!@#$%^&*()_+\-=$$$${};':"\\|,.<>\/?]+/)) strength++;

                if (strength === 1) {
                    text = '弱';
                } else if (strength === 2) {
                    text = '中';
                } else if (strength >= 3) {
                    text = '强';
                }
            }

            // 更新UI
            strengthBar.style.width = (strength * 33) + '%';
            if (strength === 1) {
                strengthBar.style.backgroundColor = 'var(--danger-color)';
            } else if (strength === 2) {
                strengthBar.style.backgroundColor = 'var(--warning-color)';
            } else if (strength >= 3) {
                strengthBar.style.backgroundColor = 'var(--success-color)';
            }
            strengthText.textContent = '密码强度: ' + text;
        });

        // 头像上传功能实现
        const avatarUpload = document.getElementById('avatar-upload');
        const avatarPreview = document.getElementById('avatar-preview');
        const chooseAvatarBtn = document.getElementById('choose-avatar');

        if (chooseAvatarBtn) {
            chooseAvatarBtn.addEventListener('click', function () {
                avatarUpload.click();
            });
        }

        if (avatarUpload) {
            avatarUpload.addEventListener('change', function () {
                const file = this.files[0];
                if (file) {
                    if (file.size > 2 * 1024 * 1024) {
                        showError('avatar-preview', '图片大小不能超过2MB');
                        return;
                    }

                    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
                    if (!validTypes.includes(file.type)) {
                        showError('avatar-preview', '仅支持 JPG, PNG, GIF 或 WebP 格式的图片');
                        return;
                    }

                    const reader = new FileReader();
                    reader.onload = function (e) {
                        // 清除文本内容，显示图片
                        avatarPreview.innerHTML = '';
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.alt = "用户头像";
                        img.style.width = "100%";
                        img.style.height = "100%";
                        img.style.objectFit = "cover";
                        avatarPreview.appendChild(img);
                    }
                    reader.readAsDataURL(file);
                }
            });
        }
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('reg-confirm-password').value;

            if (password !== confirmPassword) {
                alert('两次输入的密码不一致！');
                return;
            }

            if (password.length < 6) {
                alert('密码长度至少需要6位！');
                return;
            }
            // 个人简介验证
            if (bio.length > 200) {
                showError('bio', '个人简介不能超过200字');
                isValid = false;
            }

            // 头像验证
            if (!avatarUpload.files[0]) {
                showError('avatar-preview', '请上传头像');
                isValid = false;
            }

            // 模拟注册成功
            alert('注册成功！将跳转到登录页面');
            window.location.href = 'login.html';
        });
    }

    // 登录表单提交
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // 获取输入的学号和密码
            const studentId = document.getElementById('student-id').value.trim();
            const password = document.getElementById('password').value;
            // 判断是否为管理员
            if (studentId === '123456' && password === '123456') {
                // 管理员登录
                const adminUser = {
                    id: 'admin',
                    name: '管理员',
                    isAdmin: true,
                    studentId: '123456',
                    avatar: '管',
                    nickname: '超级管理员',
                    college: '系统',
                };
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', JSON.stringify(adminUser));
                alert('管理员登录成功！将跳转到管理后台');
                window.location.href = 'admin.html';
                return;
            }
            // 普通用户登录
            const user = {
                id: '1',
                name: '张同学',
                avatar: '张',
                nickname: '',
                college: '计算机学院'
            };
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert('登录成功！将跳转到个人主页');
            window.location.href = 'personal.html';
        });
    }
});