document.addEventListener('DOMContentLoaded', () => {
    // 取得按鈕元素
    const button = document.getElementById('thankYouBtn');
    // 取得提示訊息元素
    const message = document.getElementById('thankYouMessage');

    // 為按鈕添加點擊事件監聽器
    button.addEventListener('click', () => {
        // 設定提示文字內容
        message.textContent = '謝謝瀏覽我的名片！';
        // 顯示提示文字
        message.style.visibility = 'visible';
        // (可選) 讓按鈕在點擊後變為禁用，防止重複點擊
        button.disabled = true;
        button.textContent = '已送出';
    });
});