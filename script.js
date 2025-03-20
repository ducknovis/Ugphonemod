document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const devicesContainerNoVpn = document.querySelector('#device-no-vpn .devices-container');
    const devicesContainerVpn = document.querySelector('#device-vpn .devices-container');
    const diamondCountElement = document.querySelector('#diamond-count');

    function switchTab(tabId) {
        console.log('Chuyển tab đến:', tabId);
        tabPanes.forEach(pane => pane.classList.remove('active'));
        tabButtons.forEach(button => button.classList.remove('active'));
        const selectedPane = document.getElementById(tabId);
        const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
        if (selectedPane) {
            selectedPane.classList.add('active');
        } else {
            console.error('Không tìm thấy tab pane với ID:', tabId);
        }
        if (selectedButton) {
            selectedButton.classList.add('active');
        } else {
            console.error('Không tìm thấy tab button với data-tab:', tabId);
        }
    }

    function initializeTabButtons() {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                switchTab(tabId);
            });
        });
    }

    function populateDeviceNoVpn() {
        const devicesNoVpnData = [
            {
                logo: 'https://cdn.now.gg/apps-content/10417/icon/chasers.png',
                url: 'https://webproxy.proxyshare.com/request?p=GgkeGkYuKF0ORhMPDwsIQVRUFRQMVRwcVBoLCwhUFxIdDhcIHlRKS09KTFQYExoIHgkIVRMPFhc='
            },
            {
                logo: 'https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fassets-opt%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fcdn.now.gg%252Fapps-content%252F10512%252Ficon%252Fthe-walking-dead-survivors.png%26w%3D256%26q%3D80&w=1440&q=70',
                url: 'https://webproxy.proxyshare.com/request?p=GgkeGkYuKF0ORhMPDwsIQVRUFRQMVRwcVBoLCwhUHBoXGgMCVgsXGgJWDx4YExUUFxQcAlYXEhYSDx4fVEpLTkpJVA8THlYMGhcQEhUcVh8eGh9WCA4JDRINFAkIVRMPFhc='
            }
        ];

        devicesContainerNoVpn.innerHTML = '';
        devicesNoVpnData.forEach(device => {
            const deviceItem = document.createElement('div');
            deviceItem.className = 'device-item';
            deviceItem.innerHTML = `
                <div class="device-inner">
                    <img src="${device.logo}" alt="Device Logo" class="device-logo">
                    <button class="play-button" data-url="${device.url}">Play</button>
                </div>
            `;
            devicesContainerNoVpn.appendChild(deviceItem);
        });
    }

    function populateDeviceVpn() {
        const devicesVpnData = [
            {
                logo: 'https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fassets-opt%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fcdn.now.gg%252Fapps-content%252Fcom.uncube.launcher3%252Ficon%252Fnow.png%26w%3D256%26q%3D80&w=1440&q=70',
                url: 'https://now.gg/apps/uncube/7074/now.html'
            },
            {
                logo: 'https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fassets-opt%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fcdn.now.gg%252Fapps-content%252Fcom.aptoide.partners.nowgg.store%252Ficon%252Faptoide.png%26w%3D256%26q%3D80&w=1440&q=70',
                url: 'https://now.gg/apps/aptoide/5874/aptoide.html'
            },
            {
                logo: 'https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fassets-opt%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fcdn.now.gg%252Fapps-content%252Fcom.roblox.client%252Ficon%252Froblox.png%26w%3D256%26q%3D80&w=1440&q=70',
                url: 'https://mathstutor.life/apps/roblox-corporation/5349/roblox.html'
            },
            {
                logo: 'https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fassets-opt%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fcdn.now.gg%252Fapps-content%252Fcom.miHoYo.GenshinImpact%252Ficon%252Fgenshin-impact.png%26w%3D256%26q%3D80&w=1440&q=70',
                url: 'https://now.gg/apps/cognosphere-pte-ltd-/1773/genshin-impact.html'
            },
            {
                logo: 'https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fassets-opt%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fcdn.now.gg%252Fapps-content%252Fcom.discord%252Ficon%252Fdiscord-talk-chat-hang-out.png%26w%3D256%26q%3D80&w=1440&q=70',
                url: 'https://now.gg/apps/discord-inc-/1430/discord-talk-chat-hang-out.html'
            },
            {
                logo: 'https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fassets-opt%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fcdn.now.gg%252Fapps-content%252Fcom.bigbluebubble.singingmonsters.full%252Ficon%252Fsinging-monsters.png%26w%3D256%26q%3D80&w=1440&q=70',
                url: 'https://now.gg/apps/big-blue/8811/singing-monsters.html'
            },
            {
                logo: 'https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fassets-opt%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fcdn.now.gg%252Fapps-content%252Fcom.machinezone.ffane%252Ficon%252Ffinal-fantasy-xv-war-for-eos.png%26w%3D256%26q%3D80&w=1440&q=70',
                url: 'https://now.gg/apps/machine-zone-inc-/1992/final-fantasy-xv-war-for-eos.html'
            },
            {
                logo: 'https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fassets-opt%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fcdn.now.gg%252Fapps-content%252Fcom.innersloth.spacemafia%252Ficon%252Famong-us.png%26w%3D256%26q%3D80&w=1440&q=70',
                url: 'https://now.gg/apps/innersloth-llc/4047/among-us.html'
            },
            {
                logo: 'https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fassets-opt%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fcdn.now.gg%252Fapps-content%252Fcom.HoYoverse.hkrpgoversea%252Ficon%252Fhonkai-star-rail.png%26w%3D256%26q%3D80&w=1440&q=70',
                url: 'https://now.gg/apps/cognosphere-pte-ltd/1591/honkai-star-rail.html'
            },
            {
                logo: 'https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fassets-opt%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fcdn.now.gg%252Fapps-content%252Fcom.dts.freefireth%252Ficon%252Ffree-fire.png%26w%3D256%26q%3D80&w=1440&q=70',
                url: 'https://now.gg/apps/garena-international-i/1398/free-fire.html'
            }
        ];

        devicesContainerVpn.innerHTML = '';
        devicesVpnData.forEach(device => {
            const deviceItem = document.createElement('div');
            deviceItem.className = 'device-item';
            deviceItem.innerHTML = `
                <div class="device-inner">
                    <img src="${device.logo}" alt="Device Logo" class="device-logo">
                    <button class="play-button" data-url="${device.url}">Play</button>
                </div>
            `;
            devicesContainerVpn.appendChild(deviceItem);
        });
    }

    function initializePlayButtons() {
        const playButtons = document.querySelectorAll('.play-button');
        playButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                const url = this.getAttribute('data-url');
                console.log('Nhấn Play, mở URL:', url);
                if (url) {
                    try {
                        window.location.href = url;
                    } catch (error) {
                        console.error('Lỗi khi mở tab mới:', error);
                    }
                } else {
                    console.error('Không tìm thấy URL trên nút Play:', this);
                }
            });
        });
    }

    function initializeApp() {
        console.log('Khởi tạo ứng dụng...');
        initializeTabButtons();
        populateDeviceNoVpn();
        populateDeviceVpn();
        initializePlayButtons();
        switchTab('home');
    }

    window.switchTab = switchTab;

    initializeApp();
});
