const videoSources = {
    'G식백과': 'https://www.youtube.com/embed/0IsgJzhBl_4?si=h1iFIbPmgU0k-nuJ',
    '슥슥이': 'https://www.youtube.com/embed/ERteuF61JE4?si=HN6xg4wy7xMk0aJd',
    '침착맨': 'https://www.youtube.com/embed/iYq3Wu2-D6k?si=8uBGAoCeTswI0zUf',
    '흑백리뷰': 'https://www.youtube.com/embed/ZAaJxMlNYAE?si=LGIF6qpMSP4ceDnm',
    '노마드코더': 'https://www.youtube.com/embed/-8JTwRH23VY?si=l7fUHl5qjpKlsuQU',
    '강퀴': 'https://www.youtube.com/embed/ArV33qYgLzs?si=52RK7C17UQpLp1AC',
    '잇섭': 'https://www.youtube.com/embed/WmHDrKXT11Y?si=AlrVa6ufyXAWIUGa',
    '꽉변호사': 'https://www.youtube.com/embed/p-TzhoovtlE?si=cb0tkztKmd2ywXG_',
};

const videoInfo = {
    'G식백과': {
        title: '업계의 \'구독 악마설\'에 게이머들이 반박하다',
        channel: '김성회의 G식백과',
        views: '24만',
        uploadDate: '2025. 7. 23.',
        description: "📪 Business Contact: SANDBOX NETWORK"
    },
    '슥슥이': {
        title: '허허 개판이네',
        channel: '슥슥이',
        views: '5.1만',
        uploadDate: '2024. 7. 21.',
        description: '2025년 6월 22일 방송 하이라이트입니다'
    },
    '침착맨': {
        title: '\'진격의 거인(Attack on Titan)\' 4기 Part2 감상회',
        channel: '침착맨',
        views: '56만',
        uploadDate: '2024. 7. 24.',
        description: '침같이 보면 좋은 추천 영상 : \'진격의 거인(Attack on Titan)\' 4기 Part1 감상회'
    },
    '흑백리뷰': {
        title: '인스타 에서 난리가 났대서 먹어봤는데...',
        channel: '흑백리뷰',
        views: '13만',
        uploadDate: '2024. 7. 23.',
        description: '#흑백리뷰 #멜론 #과일 멜론 먹방 리뷰'
    },
    '노마드코더': {
        title: '이제 대세는 Claude Code!? 찐 꿀팁 대방출 🔥',
        channel: '노마드코더',
        views: '3.6만',
        uploadDate: '2024. 7. 19.',
        description: '자비없는 성능....!'
    },
    '강퀴': {
        title: '07.13｜GEN vs T1 결승전 하이라이트｜25 MSI 수염펍',
        channel: '강퀴TV',
        views: '8.8만',
        uploadDate: '2024. 7. 14.',
        description: '다시보기 https://chzzk.naver.com/video/8215709'
    },
    '잇섭': {
        title: '애플페이 티머니 교통카드 정식 출시&궁금한점 총정리!',
        channel: 'ITSub잇섭',
        views: '56만',
        uploadDate: '2024. 7. 20.',
        description: '또.. 통일보다 빨랐습니다 ㅋㅋ 그토록 오지 않을 것 같던 애플페이 교통카드가 한달전쯤 티머니에서 공식적으로 런칭 소식을 알렸고...'
    },
    '꽉변호사': {
        title: '꽉변호사는 왜 특정 사건 안다뤄줘요?',
        channel: '꽉 변호사 - 법률 토막상식 애니메이션',
        views: '2.9만',
        uploadDate: '2024. 7. 24.',
        description: '영상의 이스터에그를 찾아보세요! 오늘은 어떤 이스터에그가 왜 있을까요?'
    }
};

const videoId = new URLSearchParams(window.location.search).get('videoId');

if (videoId && videoSources[videoId]) {
    const iframe = document.querySelector('.video-player iframe');
    iframe.src = videoSources[videoId];
}

if (videoId && videoInfo[videoId]) {
    const info = videoInfo[videoId];
    document.getElementById('video-title').textContent = info.title;
    document.getElementById('channel-name').textContent = info.channel;
    document.getElementById('views-date').textContent = `조회수 ${info.views}회 • ${info.uploadDate}`;
    document.getElementById('video-description').textContent = info.description;
}

document.getElementById('add-comment-btn').addEventListener('click', () => {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;
    if (commentText) {
        const commentsList = document.getElementById('comments-list');
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);
        commentInput.value = '';
    }
});
