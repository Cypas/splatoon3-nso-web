// ==UserScript==
// @name         浏览器打开nso鱿鱼圈(请配合小鱿鱿bot使用)
// @namespace    https://github.com/Cypas/splatoon3-nso-web
// @version      1.1
// @description  当你在网络不好登不上nso App，或者更新不了nso最新版本时，本脚本可以派上用场
// @author       Cypas; gtoken注入方法参考了eli fessler (frozenpandaman)
// @match        *://*/*
// @icon         data:image/x-icon;base64,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
// @supportURL   https://github.com/Cypas/splatoon3-nso-web/issues
// @updateURL    https://github.com/Cypas/splatoon3-nso-web/raw/refs/heads/main/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%93%E5%BC%80nso%E9%B1%BF%E9%B1%BC%E5%9C%88.user.js
// @downloadURL  https://github.com/Cypas/splatoon3-nso-web/raw/refs/heads/main/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%93%E5%BC%80nso%E9%B1%BF%E9%B1%BC%E5%9C%88.user.js
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_info
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const TARGET_URL_REG = /^https:\/\/api\.lp1\.av5ja\.srv\.nintendo\.net\/(\?lang=.*)?$/;
    const GTOKEN_API_URL = 'https://xyy.ayano.top/api/nso/nso_web/login';
    const SQUID_PAGE_URL = 'https://api.lp1.av5ja.srv.nintendo.net/?lang=ZH-CN'; // 鱿鱼圈固定地址
    const pageWindow = unsafeWindow;

    let menu_openSquid_ID = null;
    let menu_showExpDate_ID = null;
    let menu_reinputKey_ID = null;
    let notificationContainer = null;

    function isGtokenExpired() {
        const expTs = GM_getValue('nso_splatoon_expts', '');
        if (!expTs) return true;

        let expTimestamp = Number(expTs);
        if (expTimestamp.toString().length === 10) {
            expTimestamp = expTimestamp * 1000;
        }

        const currentTimestamp = Date.now();
        const isExpired = currentTimestamp > expTimestamp;

        if (isExpired) {
            log('【过期校验】', `GToken已过期！\n过期时间：${new Date(expTimestamp).toLocaleString()}\n当前时间：${new Date(currentTimestamp).toLocaleString()}`);
        } else {
            const remainingTime = Math.floor((expTimestamp - currentTimestamp) / 60000);
            log('【过期校验】', `GToken未过期，剩余${remainingTime}分钟`);
        }

        return isExpired;
    }

    function openSquidPage() {
        const squidTab = pageWindow.open(SQUID_PAGE_URL, '_blank');
        squidTab?.addEventListener('load', () => initSquidPage());
        return squidTab;
    }

    async function getGtokenByAccessKey(isExpiredPrompt = false) {
        // 核心修改点1：先判断是否在目标域名下，不在则自动打开鱿鱼圈页面
        if (!TARGET_URL_REG.test(pageWindow.location.href)) {
            log('【操作提示】', '当前不在鱿鱼圈页面，将自动打开鱿鱼圈新标签页');
            openSquidPage();
        }

        const promptMsg = isExpiredPrompt
            ? 'GToken已过期，请重新输入你的访问密钥'
            : '请输入你从小鱿鱿那获取的nso访问密钥';

        const accessKey = prompt(promptMsg, '');
        if (!accessKey) {
            log('【错误提示】', '未输入nso访问密钥，无法获取GToken');
            return;
        }

        log('【操作提示】', '正在验证nso访问密钥并获取GToken，请稍候...');

        try {
            const requestUrl = `${GTOKEN_API_URL}?secret_code=${encodeURIComponent(accessKey)}`;
            const response = await fetch(requestUrl, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include'
            });

            if (!response.ok) throw new Error(`接口请求异常：${response.status} ${response.statusText}`);
            const result = await response.json();

            if (result.code === 0) {
                const { gtoken, exp_ts, exp_date } = result.data;

                if (!gtoken) {
                    const errorMsg = '未获取到有效GToken';
                    log('【错误提示】', errorMsg);
                    alert(`${errorMsg}\n请刷新网页后重新输入nso访问密钥！`);
                    return;
                }

                GM_setValue('nso_splatoon_gtoken', gtoken);
                GM_setValue('nso_splatoon_expts', exp_ts);
                GM_setValue('nso_splatoon_expdate', exp_date);

                log('【获取成功】', `GToken获取成功｜有效期至：${exp_date}\n即将刷新网页并重新加载GToken...`);
                alert(`GToken获取成功！\n有效期至：${exp_date}\n即将刷新网页～`);

                if (TARGET_URL_REG.test(pageWindow.location.href)) {
                    setTimeout(() => pageWindow.location.reload(), 1000);
                } else {
                    log('【操作提示】', '已保存GToken，打开鱿鱼圈网页后会自动加载');
                }

                registerMenuCommand();
            } else {
                const errorMsg = result.msg || 'nso访问密钥无效';
                log('【错误提示】', `${errorMsg}\n💡 请刷新网页后重新输入nso访问密钥！`);
                alert(`${errorMsg}\n请刷新网页后重新输入nso访问密钥！`);
            }
        } catch (error) {
            let errorMsg = error.message;
            log('【错误提示】', `请求失败：${errorMsg}\n💡 请刷新网页后重新尝试！`);
            alert(`请求失败：${errorMsg}\n请刷新网页后重新尝试！`);
        }
    }

    function injectGtokenOnLoad() {
        if (!TARGET_URL_REG.test(pageWindow.location.href)) return;

        const token = GM_getValue('nso_splatoon_gtoken', '');
        if (!token) {
            log('【错误提示】', '无有效GToken，请重新从小鱿鱿那获取nso访问密钥换取新的GToken');
            return;
        }

        const defineRequestGameWebToken = () => {
            pageWindow.requestGameWebToken = function () {
                Promise.resolve().then(() => pageWindow.onGameWebTokenReceive?.call(null, token));
            };
            if (pageWindow.vh) pageWindow.vh.requestGameWebToken = pageWindow.requestGameWebToken;
        };

        if (pageWindow.document.readyState === 'complete') {
            defineRequestGameWebToken();
        } else {
            pageWindow.removeEventListener('load', defineRequestGameWebToken);
            pageWindow.addEventListener('load', defineRequestGameWebToken, false);
        }
    }

    function copyToClipboard(text) {
        if (!text) {
            log('【复制失败】', '无有效内容可复制');
            return false;
        }
        try {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    log('【复制成功】', 'GToken已复制到剪贴板！');
                }).catch(() => {
                    fallbackCopyTextToClipboard(text);
                });
            } else {
                fallbackCopyTextToClipboard(text);
            }
            return true;
        } catch (e) {
            log('【复制失败】', `复制出错：${e.message}`);
            return false;
        }
    }

    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.top = "-999999px";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            log('【复制成功】', 'GToken已复制到剪贴板！');
        } catch (e) {
            log('【复制失败】', `复制出错：${e.message}`);
        } finally {
            document.body.removeChild(textArea);
        }
    }

    function showCustomModal(title, content, gtoken) {
        const existingModal = document.getElementById('gtoken-info-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.id = 'gtoken-info-modal';
        Object.assign(modal.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '9999999',
            fontFamily: 'Arial, sans-serif'
        });

        const modalContent = document.createElement('div');
        Object.assign(modalContent.style, {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            width: '90%',
            maxWidth: '500px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            position: 'relative'
        });

        const modalTitle = document.createElement('h3');
        modalTitle.textContent = title;
        Object.assign(modalTitle.style, {
            margin: '0 0 15px 0',
            color: '#333',
            fontSize: '18px'
        });

        const contentWrapper = document.createElement('div');
        contentWrapper.style.whiteSpace = 'pre-wrap';
        contentWrapper.style.marginBottom = '20px';
        contentWrapper.style.color = '#555';
        contentWrapper.style.fontSize = '14px';
        contentWrapper.style.lineHeight = '1.6';
        contentWrapper.innerHTML = content.replace(/\n/g, '<br>').replace(/•/g, '&#8226;');

        const btnContainer = document.createElement('div');
        btnContainer.style.display = 'flex';
        btnContainer.style.justifyContent = 'flex-end';
        btnContainer.style.gap = '10px';

        const copyBtn = document.createElement('button');
        copyBtn.textContent = gtoken ? '复制GToken' : '无GToken可复制';
        Object.assign(copyBtn.style, {
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: gtoken ? '#3182ce' : '#ccc',
            color: '#fff',
            cursor: gtoken ? 'pointer' : 'not-allowed',
            fontSize: '14px'
        });
        copyBtn.addEventListener('click', () => {
            if (gtoken) {
                copyToClipboard(gtoken);
                copyBtn.textContent = '已复制！';
                setTimeout(() => {
                    copyBtn.textContent = '复制GToken';
                }, 1500);
            }
        });

        const closeBtn = document.createElement('button');
        closeBtn.textContent = '关闭';
        Object.assign(closeBtn.style, {
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            backgroundColor: '#fff',
            color: '#333',
            cursor: 'pointer',
            fontSize: '14px'
        });
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });

        btnContainer.appendChild(copyBtn);
        btnContainer.appendChild(closeBtn);
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(contentWrapper);
        modalContent.appendChild(btnContainer);
        modal.appendChild(modalContent);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        document.body.appendChild(modal);
    }

    function showExpirationDate() {
        const expDate = GM_getValue('nso_splatoon_expdate', '本地未获取GToken');
        const expTs = GM_getValue('nso_splatoon_expts', '本地未获取GToken');
        const gtoken = GM_getValue('nso_splatoon_gtoken', '');

        let expireStatus = '未知';
        if (expTs) {
            const isExpired = isGtokenExpired();
            expireStatus = isExpired ? '已过期' : '未过期';
        }

        const gtokenDisplay = gtoken
            ? gtoken.length > 50
                ? gtoken.substring(0, 50) + '...'
                : gtoken
            : '本地未获取GToken';

        const showText = `GToken密钥信息：
• 有效期：${expDate}
• 有效期时间戳：${expTs}
• 当前状态：${expireStatus}
• GToken（前50字符）：${gtokenDisplay}`;

        log('【GToken密钥信息】', showText);
        showCustomModal('GToken密钥信息', showText, gtoken);
    }

    function log(title, text) {
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            Object.assign(notificationContainer.style, {
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: '999999',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            });
            pageWindow.document.body.appendChild(notificationContainer);
        }

        const notification = document.createElement('div');
        const fullTitle = `${GM_info.script.name} ${title}`;
        Object.assign(notification.style, {
            backgroundColor: '#fff',
            padding: '12px 16px',
            borderRadius: '8px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            maxWidth: '300px',
            borderLeft: '4px solid',
            borderLeftColor: title.includes('【错误提示】') ? '#e53e3e' :
                title.includes('【获取成功】') ? '#38a169' :
                    title.includes('【操作成功】') ? '#3182ce' : '#ed8936',
            fontFamily: 'Arial, sans-serif',
        });

        notification.innerHTML = `
            <div style="font-size: 14px; font-weight: 600; color: #333; margin-bottom: 4px;">${fullTitle}</div>
            <div style="font-size: 13px; color: #666; line-height: 1.4;">${text}</div>
        `;

        notificationContainer.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s';
            setTimeout(() => {
                notificationContainer.removeChild(notification);
                if (notificationContainer.children.length === 0) {
                    notificationContainer.remove();
                    notificationContainer = null;
                }
            }, 1000);
        }, 5000);
    }

    function initSquidPage() {
        if (!TARGET_URL_REG.test(pageWindow.location.href)) return;

        const savedToken = GM_getValue('nso_splatoon_gtoken', '');

        if (!savedToken) {
            setTimeout(() => getGtokenByAccessKey(), 1000);
            return;
        }

        const isExpired = isGtokenExpired();
        if (isExpired) {
            alert('检测到本地已保存的GToken已过期，请重新从小鱿鱿那获取nso访问密钥来获取新的GToken！');
            setTimeout(() => getGtokenByAccessKey(true), 500);
        } else {
            const expDate = GM_getValue('nso_splatoon_expdate', '未知');
            log('【操作成功】', `检测到本地已保存的GToken（未过期）｜有效期至：${expDate}`);
            injectGtokenOnLoad();
        }
    }

    function registerMenuCommand() {
        if (menu_openSquid_ID) {
            GM_unregisterMenuCommand(menu_openSquid_ID);
            GM_unregisterMenuCommand(menu_showExpDate_ID);
            GM_unregisterMenuCommand(menu_reinputKey_ID);
        }

        menu_openSquid_ID = GM_registerMenuCommand(`🦑 打开nso鱿鱼圈(ZH-CN)`, () => {
            openSquidPage(); // 复用通用方法
        });

        menu_showExpDate_ID = GM_registerMenuCommand(`⌛ 查询当前GToken有效期`, showExpirationDate);

        menu_reinputKey_ID = GM_registerMenuCommand(`🔄 重新输入访问密钥获取GToken`, () => getGtokenByAccessKey());
    }

    registerMenuCommand();
    initSquidPage();

})();