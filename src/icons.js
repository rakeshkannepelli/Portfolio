import * as simpleIcons from 'simple-icons';

// Antigravity (A) - Authentic colorful gradient curve
const antigravitySvg = `<svg role="img" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="agGrad" x1="0%" y1="100%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="30%" stop-color="#10b981" />
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="70%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#8b5cf6" />
    </linearGradient>
  </defs>
  <path d="M 15 85 C 30 75, 35 25, 50 25 C 65 25, 70 75, 85 85 C 75 90, 65 75, 50 45 C 35 75, 25 90, 15 85 Z" fill="url(#agGrad)"/>
</svg>`;

// Custom 'I' - Info-circle SVG that morphs into warning-circle on hover
const infoWarningSvg = `<svg class="info-warning-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;">
  <circle cx="12" cy="12" r="10"></circle>
  <line class="anim-dot" x1="12" y1="8" x2="12" y2="8"></line>
  <line class="anim-line" x1="12" y1="12" x2="12" y2="16"></line>
</svg>`;

// Death Note (L) - Authentic Gothic Old English 'L' vector SVG (Permanent inline)
const deathNoteLSvg = `<svg viewBox="0 0 955 1076" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <g transform="translate(-329.24402,-53.217143)">
    <path
       transform="translate(130,66.666667)"
       d="m 980.23462,1062.347 173.82198,-161.70351 -26.419,-28.60107 -69.2871,64.88953 C 976.21664,870.19628 883.81154,836.8284 781.13489,836.82819 c -51.31693,2.1e-4 -115.47906,11.73827 -192.48657,35.21423 l 26.38549,-23.0957 c 90.94994,-77.00779 152.54961,-141.90844 184.7992,-194.70215 31.53209,-52.07679 47.29847,-116.97744 47.29919,-194.70215 -7.2e-4,-29.33898 -5.4949,-96.80209 -16.48254,-202.38953 -4.40948,-44.01975 -6.61386,-69.68908 -6.61316,-77.00805 -7e-4,-48.40607 12.83396,-84.342009 38.50403,-107.807926 25.66858,-23.463967 68.20089,-38.49742 127.59704,-45.100403 l -16.48254,-36.2884517 -17.6239,0 C 870.24954,-9.0508847 803.34032,13.681128 755.30328,59.144165 707.26498,104.60918 683.24614,168.40764 683.2467,250.53973 c -5.6e-4,10.27301 0.18408,19.99132 0.5539,29.15497 0.3687,9.16519 0.9114,18.51424 1.62811,28.04718 l 7.72095,82.51343 c 3.66967,37.39686 6.42235,66.36157 8.25805,86.89423 1.83455,20.53379 2.75211,33.73212 2.75269,39.59503 -5.8e-4,156.1873 -71.87246,283.05689 -215.61584,380.60913 47.66804,-66.01948 81.76326,-125.79522 102.28576,-179.32739 19.80542,-51.31595 29.70837,-108.50685 29.70886,-171.57288 -4.9e-4,-28.60054 -1.09709,-58.85208 -3.28979,-90.7547 -2.19369,-31.90144 -5.12541,-65.45395 -8.79517,-100.65765 -6.60244,-62.32632 -9.90343,-100.09178 -9.90295,-113.29651 -4.8e-4,-49.14466 9.16394,-89.48377 27.49329,-121.01746 C 645.84994,87.740604 681.05295,52.179523 731.65369,14.043762 L 717.35315,-9.0519407 C 659.41194,20.266306 613.20939,34.924901 578.74536,34.923889 c -20.54487,10e-4 -52.07763,-7.697548 -94.59839,-23.095703 -52.07754,-16.8507544 -89.843,-25.276649 -113.29651,-25.27771 -46.21398,0.0011 -86.18383,16.8640402 -119.90966,50.58899 -34.46462,33.010823 -51.69686,71.872884 -51.69678,116.586304 -8e-5,15.42039 4.3975,36.32288 13.19275,62.70752 l 27.49328,-12.08496 c -2.19331,-18.328 -3.2899,-28.23094 -3.28979,-29.70886 -1.1e-4,-21.99821 6.41722,-39.77876 19.25201,-53.34168 12.83453,-13.56107 30.25141,-20.34207 52.25067,-20.34302 18.32866,9.5e-4 40.697,4.76779 67.10511,14.30054 32.98718,11.72781 60.48044,17.59125 82.47986,17.59033 33.00947,9.2e-4 76.64957,-7.33957 130.92041,-22.02148 -48.4074,46.21467 -81.40603,88.38891 -98.99598,126.52283 -17.61306,38.85168 -26.4194,88.71328 -26.41906,149.58496 -3.4e-4,3.6709 -3.4e-4,7.34114 0,11.01074 -3.4e-4,3.67089 0.36892,7.69921 1.10778,12.08496 2.19286,12.46604 3.28946,21.99972 3.2898,28.60107 -19.78385,-5.1243 -37.74343,-7.68676 -53.87878,-7.68737 -47.6687,6.1e-4 -91.3088,23.83482 -130.92041,71.50268 l 19.8059,16.48254 c 19.80571,-15.39659 42.54332,-23.09515 68.21289,-23.0957 74.05364,5.5e-4 111.8191,46.94163 113.29651,140.82337 -27.86288,-17.61229 -53.16294,-26.41863 -75.90027,-26.41907 -28.60133,4.4e-4 -57.20237,16.13608 -85.80322,48.40698 l 14.30054,16.48255 c 15.39691,-5.86307 29.32817,-8.79479 41.79382,-8.79517 13.20367,3.8e-4 25.67467,2.75306 37.41303,8.25806 11.73777,5.50573 22.00438,13.20989 30.79986,23.11248 8.79484,9.9033 15.76047,21.26651 20.89691,34.08966 5.13576,12.82379 7.70381,26.57602 7.70417,41.25672 -3.6e-4,85.06488 -70.40637,171.59536 -211.21827,259.59165 l 18.69813,29.7089 C 419.9733,986.81604 546.11554,949.05057 661.25879,949.05048 c 112.92659,9e-5 219.25176,37.76556 318.97583,113.29652 l 0,0 z" />
  </g>
</svg>`;

export const iconMapping = {
  // RAKESH
  'R': { svg: simpleIcons.siRust.svg, hex: simpleIcons.siRust.hex },
  'A_first': { svg: simpleIcons.siAnthropic.svg, hex: 'var(--dynamic-anthropic)', isAnthropic: true },
  'K_first': { svg: simpleIcons.siKeras.svg, hex: simpleIcons.siKeras.hex },
  'E_first': { isImage: true, src: 'https://assets.emergent.sh/assets/elogo.gif' },
  'S': { svg: simpleIcons.siSupabase.svg, hex: simpleIcons.siSupabase.hex },
  'H': { svg: simpleIcons.siHtml5.svg, hex: simpleIcons.siHtml5.hex },

  // KANNEPELLI
  'K_last': { svg: simpleIcons.siKubernetes.svg, hex: simpleIcons.siKubernetes.hex },
  'A_last': { svg: antigravitySvg, hex: 'none', isGradient: true }, // The SVG defines its own colors
  'N_first': { svg: simpleIcons.siNumpy.svg, hex: simpleIcons.siNumpy.hex },
  'N_last': { svg: simpleIcons.siNextdotjs.svg, hex: 'var(--dynamic-anthropic)' },
  'E_mid': { svg: simpleIcons.siExpo.svg, hex: simpleIcons.siExpo.hex },
  'P': { svg: simpleIcons.siPython.svg, hex: simpleIcons.siPython.hex },
  'E_last': { svg: simpleIcons.siExpress.svg, hex: 'var(--dynamic-anthropic)' },
  'L_first': { svg: deathNoteLSvg, hex: 'var(--dynamic-anthropic)' },
  'L_last': { svg: simpleIcons.siLinux.svg, hex: simpleIcons.siLinux.hex },
  'I': { svg: infoWarningSvg, hex: '0ea5e9' } // Deep sky blue / cyan 'I' that morphs
};

export function injectIcons() {
  document.querySelectorAll('.letter-wrapper').forEach(wrapper => {
    const id = wrapper.dataset.id;
    const iconData = iconMapping[id];
    if (iconData) {
      const iconContainer = document.createElement('div');
      iconContainer.className = 'icon-svg';
      
        if (iconData.isImage) {
          const extraStyle = iconData.invertInDarkMode ? 'class="dn-logo"' : '';
          iconContainer.innerHTML = `<img src="${iconData.src}" alt="Icon" ${extraStyle} style="width:100%; height:100%; object-fit:contain; border-radius:8px;" />`;
        } else {
          iconContainer.innerHTML = iconData.svg;
          
          if (iconData.isGradient) {
            iconContainer.style.setProperty('--brand-color', 'currentColor');
          } else if (iconData.hex.includes('var(')) {
            iconContainer.style.setProperty('--brand-color', iconData.hex);
          } else {
            iconContainer.style.setProperty('--brand-color', `#${iconData.hex}`);
          }
        }
      
      wrapper.appendChild(iconContainer);
    }
  });
}
