document.addEventListener('DOMContentLoaded', () => {
    const accountBtn = document.getElementById('account-btn');
    const accountMenu = document.getElementById('account-menu');

    accountBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        accountMenu.classList.toggle('d-none');
    });

    // 외부 클릭 시 드롭다운 메뉴 숨기기
    document.addEventListener('click', (e) => {
        if (!accountMenu.classList.contains('d-none')) {
            accountMenu.classList.add('d-none');
        }
    });

    // 내부 클릭시 외부 이벤트 발생 방지 - 내부 클릭시 드롭다운 메뉴 꺼지는 것 방지
    accountMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});