
const videoId = new URLSearchParams(window.location.search).get('videoId');

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

if (videoId && videoSources[videoId]) {
    const iframe = document.querySelector('.video-player iframe');
    iframe.src = videoSources[videoId];
}
