import * as simpleIcons from 'simple-icons';

// Antigravity (A) - Mimicking the colorful gradient curve from the user's reference
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

// Death Note L - Scalable custom path mimicking the Old English gothic 'L'
const deathNoteLSvg = `<svg role="img" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <!-- A highly stylized gothic L path -->
  <path d="M25,20 C35,20 40,25 40,35 L35,80 C45,85 60,80 75,70 C78,65 80,60 85,60 C80,75 60,95 30,85 L20,35 C15,30 18,20 25,20 Z" />
  <path d="M20,35 C15,40 10,40 5,35 C10,30 20,25 20,35 Z" />
</svg>`;

// Custom 'I' - Glowing, Sci-Fi pillar
const customISvg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <rect x="10" y="6" width="4" height="16" rx="1" />
  <circle cx="12" cy="3" r="2" fill="currentColor" />
  <path d="M 8 22 L 16 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
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
  'L_first': { isImage: true, src: 'https://brandlogos.net/wp-content/uploads/2015/10/l_death_note-logo_brandlogos.net_x4xl0-768x893.png', invertInDarkMode: true },
  'L_last': { svg: simpleIcons.siLinux.svg, hex: simpleIcons.siLinux.hex },
  'I': { svg: customISvg, hex: '00E5FF' } // Cyber cyan 'I'
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
