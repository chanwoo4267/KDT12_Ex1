<img width="2880" height="1430" alt="image" src="https://github.com/user-attachments/assets/735f2118-35d6-4527-8947-6dd24d450c8e" />

<br/>
<br/>

# 1. Overview

This project is creating Youtube Clone page using HTML, CSS, Javascript.
1st Project from ESTSOFT Backend Bootcamp

# 2. Project Requirements

## 2.1 Main Page

- **Top Navigation Bar**
  - Including logo, search bar, user profile icon
  - Refresh homepage when click logo
  - User profile dropdown menu when click user profile icon

- **Left Side Bar**
  - Refresh homepage when click home button
  - Load subscription page when click subscription button

- **Main Content**
  - More than 8 video thumbnail cards
  - Each video card should include thumbnail, title, channel, views, uploaded date
  - Each video card should be redirected to video detail page
  - Card animation when mouse hovered (enlargement)

## 2.2 Subscription Page

- Different UI from main page

## 2.3 Video Detail Page

- Each video card should be redirected to video detail page
- URL should be `video.html?videoId=1` format
- Including video iframe(youtube imbed), title, channel, views, uploaded date, description
- Adding comment feature
- Responsive right side playlists

# 3. WBS (Work Breakdown Structure)

<img width="1032" height="404" alt="image" src="https://github.com/user-attachments/assets/f44d2f19-ed15-4c59-a9ba-8ad508bcfee2" />

[(WBS)](https://github.com/chanwoo4267/KDT12_Ex1/blob/main/docs/일정표.numbers)

# 4. Features

## 4.1 Main Page

<img width="2880" height="1430" alt="image" src="https://github.com/user-attachments/assets/eba0c32e-c1b6-449d-a872-295b91aa8cf5" />

<img width="2880" height="1430" alt="image" src="https://github.com/user-attachments/assets/d97d6832-1e5d-47b9-9002-c07a2f88fa72" />

- Youtube main page
- Top navigation bar
- Left side bar
- Main content
- User profile dropdown
- Indivisual scrolls (left side bar, user profile dropdown, main content)

<img width="2880" height="1430" alt="image" src="https://github.com/user-attachments/assets/60c43860-1af4-4d9f-b75c-4803f49bcf39" />

- Mouse hover animation (enlargement)

## 4.2 Subscription Page

<img width="2880" height="1430" alt="image" src="https://github.com/user-attachments/assets/778fa53d-97c9-4db1-8994-c462da615f7d" />

- Subscription page ui

## 4.3 Video Detail Page

<img width="2880" height="1430" alt="image" src="https://github.com/user-attachments/assets/1101dbca-a89e-45c9-b986-19270dee0f41" />

- Video detail page
- Youtube imbed iframe
- Comment features

<img width="2880" height="1430" alt="image" src="https://github.com/user-attachments/assets/a4bc38bf-b8a5-47bb-ac64-4f1d48b712d4" />

- Responsive playlists

# 5. Problem Solving

## 5.1 Individual Scroll

```css
/* 내 계정정보 드롭다운 */
.account-menu {
    position: absolute;
    right: 1rem;
    top: 120%;
    background: #3d3d3d;
    border-radius: 1rem;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    
    /* 내부 스크롤 */
    max-height: 85vh;
    overflow-y: auto;
    overscroll-behavior: contain;
}
```

User profile dropdown menu, and left sidebar should have individual scrolls.

> overflow-y : auto
> > individual scroll feature

> overscroll-behavior : contain
> > make inner scroll doesn't move to outer screen

## 5.2 Dropdown menu click event

```javascript
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
```

When user click inside dropdown menu, nothing happens.
When user click outside dropdown menu, dropdown menu will be closed.

## 5.3 Hover Focus Animation Time Lag

```css
.nav-link:hover, .nav-link:focus {
    color: white;
    background-color: #303030;
    border-radius: 1rem;
    transition: none;
}
```

There's bootstrap self animation, so there's some timelag to apply border-radius css attribute.

> transition: none
> > disable transition animation

## 5.4 Filename Error

Specific images cannot be loaded when deployed through github pages.

### cause

Because of Korean Unicode Normalization Method difference.
There's two methods : NFC, NFD

- **NFC** : save letter itself as a code (ex U+D55C)
- **NFD** : save letter combining Initial consonant, medial consonant, final consonant (ex U+1122 + U+1161 + U+11AB)

Windows, Linux, Most Web pages use **NFC**
macOS uses **NFD**

### solution

Just changed filename to `img_1`, `thumbnail_2`, ...

## 5.5 Responsive Playlists

```css
/* 전체 컨테이너 */
.container, .container-fluid {
    display: flex;
}

/* 영상 */
.video-container {
    width: 70%;
    padding: 20px;
}

/* 우측 사이드바 */
.sidebar {
    width: 30%;
    padding: 20px;
}

@media (max-width: 1000px) {
    .container {
        flex-direction: column;
    }

    .video-container, .sidebar {
        width: 100%;
        padding: 10px;
    }
}
```

> @media (max-width: 1000px) { ... }
> > only applied when window's width is less than 1000px

## 5.6 Google Icons

```css
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<i class="material-icons">search</i>
```

[Material Symbols and Icons - Google Fonts](https://fonts.google.com/icons)

# 6. Result Report

<img width="1423" height="797" alt="image" src="https://github.com/user-attachments/assets/10276e5c-3ff4-41b4-bcc0-5d06eaf40b11" />

[(결과 보고서)](https://github.com/chanwoo4267/KDT12_Ex1/blob/main/docs/발표자료.key)
