document.addEventListener('DOMContentLoaded', () => {

    const videoGrid = document.getElementById('video-grid');

    const videos = [
        {
            thumbnail: 'https://picsum.photos/300/170?random=1',
            avatar: 'https://picsum.photos/300/170?random=2',
            title: 'BLACKPINK - ‘뚜두뚜두 (DDU-DU DDU-DU)’ M/V',
            channel: 'BLACKPINK',
            views: '2.2B views',
            timestamp: '6 years ago'
        },
        {
            thumbnail: 'https://picsum.photos/300/170?random=1',
            avatar: 'https://picsum.photos/300/170?random=2',
            title: 'BTS (방탄소년단) MIC Drop (Steve Aoki Remix) Official MV',
            channel: 'HYBE LABELS',
            views: '1.4B views',
            timestamp: '6 years ago'
        },
        {
            thumbnail: 'https://picsum.photos/300/170?random=1',
            avatar: 'https://picsum.photos/300/170?random=2',
            title: 'PSY - GANGNAM STYLE(강남스타일) M/V',
            channel: 'officialpsy',
            views: '5.2B views',
            timestamp: '12 years ago'
        },
        {
            thumbnail: 'https://picsum.photos/300/170?random=1',
            avatar: 'https://picsum.photos/300/170?random=2',
            title: 'TWICE "CHEER UP" M/V',
            channel: 'JYPEntertainment',
            views: '512M views',
            timestamp: '8 years ago'
        },
        {
            thumbnail: 'https://picsum.photos/300/170?random=1',
            avatar: 'https://picsum.photos/300/170?random=2',
            title: 'aespa 에스파 ‘Supernova’ MV',
            channel: 'SMTOWN',
            views: '129M views',
            timestamp: '2 months ago'
        },
        {
            thumbnail: 'https://picsum.photos/300/170?random=1',
            avatar: 'https://picsum.photos/300/170?random=2',
            title: 'NewJeans (뉴진스) ‘Super Shy’ Official MV',
            channel: 'HYBE LABELS',
            views: '200M views',
            timestamp: '1 year ago'
        },
        {
            thumbnail: 'https://picsum.photos/300/170?random=1',
            avatar: 'https://picsum.photos/300/170?random=2',
            title: 'IVE 아이브 ‘LOVE DIVE’ MV',
            channel: 'starshipTV',
            views: '245M views',
            timestamp: '2 years ago'
        },
        {
            thumbnail: 'https://picsum.photos/300/170?random=1',
            avatar: 'https://picsum.photos/300/170?random=2',
            title: 'LE SSERAFIM (르세라핌) ‘ANTIFRAGILE’ OFFICIAL M/V',
            channel: 'HYBE LABELS',
            views: '220M views',
            timestamp: '1 year ago'
        },
        {
            thumbnail: 'https://picsum.photos/300/170?random=1',
            avatar: 'https://picsum.photos/300/170?random=2',
            title: '(G)I-DLE - ‘TOMBOY’ Official Music Video',
            channel: '(G)I-DLE (여자)아이들 (Official YouTube Channel)',
            views: '320M views',
            timestamp: '2 years ago'
        },
        {
            thumbnail: 'https://picsum.photos/300/170?random=1',
            avatar: 'https://picsum.photos/300/170?random=2',
            title: 'Stray Kids "특(S-Class)" M/V',
            channel: 'JYPEntertainment',
            views: '180M views',
            timestamp: '1 year ago'
        },
        {
            thumbnail: 'https://picsum.photos/300/170?random=1',
            avatar: 'https://picsum.photos/300/170?random=2',
            title: 'SEVENTEEN (세븐틴) ‘손오공’ Official MV',
            channel: 'HYBE LABELS',
            views: '190M views',
            timestamp: '1 year ago'
        }
    ];

    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4');

        videoItem.innerHTML = `
            <div class="card">
                <img src="${video.thumbnail}" class="card-img-top" alt="Video Thumbnail">
                <div class="card-body">
                    <div class="d-flex">
                        <img src="${video.avatar}" alt="Channel Avatar" class="rounded-circle me-3" style="width: 40px; height: 40px;">
                        <div>
                            <h5 class="card-title">${video.title}</h5>
                            <p class="card-text">${video.channel}</p>
                            <p class="card-text">${video.views} • ${video.timestamp}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        videoGrid.appendChild(videoItem);
    });
});