document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử cần thiết
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const devicesContainer = document.querySelector('.devices-container');
    const diamondCountElement = document.querySelector('#diamond-count');
    const currentDiamondsElement = document.querySelector('#current-diamonds');
    const appSelection = document.querySelector('#app-selection');
    const fullscreen = document.getElementById('device-fullscreen');
    const fullscreenIframe = document.getElementById('fullscreen-iframe');
    const arrowBtn = document.querySelector('.arrow-btn');

    // Định nghĩa URL cho các device
    const deviceUrls = {
        'no-app': 'https://now.gg/apps/uncube/7074/now.html',
        'roblox': 'https://now.gg/apps/roblox-corporation/5349/roblox.html',
        'free-fire': 'https://now.gg/apps/garena-international-i/1398/free-fire.html',
        'genshin-impact': 'https://now.gg/apps/cognosphere-pte-ltd-/1773/genshin-impact.html',
        'ea-sport-fc': 'https://now.gg/apps/electronic-arts/1353/ea-sports-fc-mobile-24-soccer.html'
    };

    // Hàm chuyển tab
    function switchTab(tabId) {
        tabPanes.forEach(pane => pane.classList.remove('active'));
        tabButtons.forEach(button => button.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    }

    // Thêm sự kiện click cho nút "Goto Dashboard"
    const gotoDashboardBtn = document.querySelector('.goto-btn');
    if (gotoDashboardBtn) {
        gotoDashboardBtn.addEventListener('click', function() {
            switchTab('dashboard');
        });
    }

    // Thêm sự kiện click cho các tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            switchTab(this.getAttribute('data-tab'));
        });
    });

    // Quản lý số device và kim cương
    let deviceCount = 0;
    let diamonds = 999999;
    const maxSlots = 3;
    const diamondCost = 250;

    // Cập nhật số kim cương
    function updateDiamonds() {
        diamondCountElement.textContent = diamonds;
        currentDiamondsElement.textContent = diamonds;
    }

    // Cập nhật danh sách device
    function updateDeviceSlots() {
        devicesContainer.innerHTML = '';
        const totalSlots = maxSlots + (deviceCount > 0 ? 2 : 0);

        for (let i = 0; i < totalSlots; i++) {
            const deviceItem = document.createElement('div');
            deviceItem.className = 'device-item';
            deviceItem.setAttribute('data-index', i);

            if (i < deviceCount) {
                const appType = i < appSelection.options.length ? appSelection.options[i].value : 'no-app';
                const url = deviceUrls[appType] || deviceUrls['no-app'];
                deviceItem.innerHTML = `
                    <div class="device-inner purchased" data-app="${appType}" onclick="openFullscreen(${i})">
                        <iframe src="${url}" frameborder="0"></iframe>
                    </div>
                `;
            } else {
                deviceItem.innerHTML = `
                    <div class="device-inner">
                        <span class="add-device">+</span>
                    </div>
                `;
            }
            devicesContainer.appendChild(deviceItem);
        }

        // Cập nhật sự kiện click cho các slot chưa mua
        const addDevices = document.querySelectorAll('.add-device');
        addDevices.forEach(device => {
            device.addEventListener('click', function() {
                switchTab('buy');
            });
        });
    }

    // Hàm mua device
    window.buyDevice = function() {
        if (diamonds >= diamondCost) {
            diamonds -= diamondCost;
            deviceCount += 1;
            updateDiamonds();
            updateDeviceSlots();
            switchTab('dashboard');
        } else {
            alert('Not enough diamonds to buy a device!');
        }
    };

    // Hàm mở full screen
    window.openFullscreen = function(index) {
        const device = devicesContainer.querySelector(`.device-item[data-index="${index}"] .device-inner`);
        const appType = device.getAttribute('data-app');
        const url = deviceUrls[appType] || deviceUrls['no-app'];
        fullscreenIframe.src = url;
        fullscreen.classList.add('active');
        // Lưu history để arrow button hoạt động
        window.history.pushState({}, '', url);
    };

    // Hàm đóng full screen
    window.closeFullscreen = function() {
        fullscreen.classList.remove('active');
        fullscreenIframe.src = '';
        switchTab('dashboard');
    };

    // Xử lý arrow button (trở về trang trước trong iframe)
    arrowBtn.addEventListener('click', function() {
        if (fullscreenIframe.contentWindow && fullscreenIframe.contentWindow.history.length > 1) {
            fullscreenIframe.contentWindow.history.back();
        }
    });

    // Khởi tạo
    updateDeviceSlots();
    updateDiamonds();
});
