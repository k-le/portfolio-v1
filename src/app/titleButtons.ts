export interface Button {
  logoPath?: string;
  imgPath?: string;
  darkImgPath?: string;
  name?: string;
  link?: string;
}

export const titleButtons: Button[] = [
  {
    logoPath: 'assets/logos/LinkedIn-for-btn.png',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kevin-l-le',
  },
  {
    logoPath: 'assets/logos/GitHub-for-btn.png',
    name: 'GitHub',
    link: 'http://www.github.com/k-le',
  },
  {
    logoPath: 'assets/logos/YouTube-for-btn.png',
    name: 'YouTube',
    link: 'https://www.youtube.com/channel/UCHzRCTNb_x2jQzdhqGv0yxQ',
  },
];

export const fixedButtons: Button[] = [
  {
    imgPath: 'assets/logos/linkedin.png',
    darkImgPath: 'assets/logos/linkedin-dark.png',
    link: 'https://www.linkedin.com/in/kevin-l-le',
  },
  {
    imgPath: 'assets/logos/github.png',
    darkImgPath: 'assets/logos/github-dark.png',
    link: 'http://www.github.com/k-le',
  },
  {
    imgPath: 'assets/logos/youtube.png',
    darkImgPath: 'assets/logos/youtube-dark.png',
    link: 'https://www.youtube.com/channel/UCHzRCTNb_x2jQzdhqGv0yxQ',
  },
];
