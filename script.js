'use strict';

// SIDEBARS
const sidebars = document.querySelectorAll('.sidebar');
const sidebarIcon = document.querySelector('.sidebar-item > i');

// test if the sidebar will fit on the screen vertically
const itemCount = Math.max(sidebars[0].querySelector('ul').childElementCount,
  sidebars[1].querySelector('ul').childElementCount);

const maxSidebarWidth = Math.max(sidebars[0].offsetWidth, sidebars[1].offsetWidth);

const updateBigScreen = (big) => {
  for (const s of sidebars) {
    if (big) {
      s.classList.add('big-screen');
    }
    else {
      s.classList.remove('big-screen');
    }

    // calculate the sidebar translate percentage
    const itemLeftPadding = parseInt(window.getComputedStyle(s.querySelector('.sidebar-item'))
      .getPropertyValue(`padding-${s.id === 'left-sidebar' ? 'left' : 'right'}`));
    const sidebarWidth = s.offsetWidth;

    const sidebarTranslate = (1 - ((itemLeftPadding + sidebarIcon.offsetWidth) / sidebarWidth)) * 100;

    if (s.id === 'left-sidebar') {
      s.style.setProperty('--_translate', `${-sidebarTranslate}%`);
    } else {
      s.style.setProperty('--_translate', `${sidebarTranslate}%`);
    }
  }
}

const mediaQueryH = matchMedia(`(min-height: calc(${itemCount} * 3.2rem + ${itemCount - 1} * 1rem + 5rem))`);
const mediaQueryW = matchMedia(`(min-width: calc(${maxSidebarWidth}px + ${sidebarIcon.offsetWidth}px + 6rem))`);
updateBigScreen(!(!mediaQueryH.matches || !mediaQueryW.matches));

mediaQueryH.addEventListener('change', ev => {
  updateBigScreen(ev.matches);
});

mediaQueryW.addEventListener('change', ev => {
  updateBigScreen(ev.matches);
});

// OPEN SIDEBAR BUTTONS FOR MOBILE
const openSidebarButtons = document.querySelectorAll('.open-sidebar-button');

for (const button of openSidebarButtons) {
  button.addEventListener('click', () => {
    const sidebar = document.getElementById(`${button.dataset.sidebarSide}-sidebar`);
    sidebar.classList.toggle('open');
  });
}

// CLOSE SIDEBAR BUTTONS FOR MOBILE
const closeSidebarButtons = document.querySelectorAll('.close-sidebar-button');

for (const button of closeSidebarButtons) {
  button.addEventListener('click', () => {
    const sidebar = document.getElementById(`${button.dataset.sidebarSide}-sidebar`);
    sidebar.classList.toggle('open');
  });
}
