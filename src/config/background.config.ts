import type { BackgroundImage, CountryFlag } from '@/types/config.types';

export const backgroundImages: BackgroundImage[] = [
  {
    id: 'bg',
    src: '/assets/backgrounds/bg.png',
    alt: 'Pemandangan Bali - latar INCOSAI 2028',
    priority: true,
  },
  {
    id: 'bg-1',
    src: '/assets/backgrounds/jepang.jpg',
    alt: 'Way Kambas Lampung - latar INCOSAI 2028',
    priority: false,
  },
  {
    id: 'bg-2',
    src: '/assets/backgrounds/usa.jpg',
    alt: 'Foto pemandangan Bali',
    priority: false,
  },
  {
    id: 'bg-3',
    src: '/assets/backgrounds/francis.jpg',
    alt: 'Background 2',
    priority: false,
  },
  {
    id: 'bg-4',
    src: '/assets/backgrounds/china.jpg',
    alt: 'Background 3',
    priority: false,
  },
    {
    id: 'bg-5',
    src: '/assets/backgrounds/germany.jpg',
    alt: 'Background 3',
    priority: false,
  },
  {
    id: 'bg-6',
    src: '/assets/backgrounds/arab.jpg',
    alt: 'Background 3',
    priority: false,
  },
  {
    id: 'bg-7',
    src: '/assets/backgrounds/australia.jpg',
    alt: 'Background 3',
    priority: false,
  },
  {
    id: 'bg-8',
    src: '/assets/backgrounds/india.jpg',
    alt: 'Background 3',
    priority: false,
  },
    {
    id: 'bg-9',
    src: '/assets/backgrounds/korean.jpg',
    alt: 'Background 3',
    priority: false,
  },
];

/**
 * Icon negara-negara yang akan menghadiri INCOSAI XXVI.
 * Menggunakan flag dari flagcdn.com dengan warna dominan untuk gradient overlay.
 */
export const countryFlags: CountryFlag[] = [
  {
    id: 'indonesia',
    name: 'Indonesia',
    code: 'id',
    flagUrl: 'https://flagcdn.com/w320/id.png',
    dominantColor: '#CE1126',
  },
  {
    id: 'japan',
    name: 'Japan',
    code: 'jp',
    flagUrl: 'https://flagcdn.com/w320/jp.png',
    dominantColor: '#BC002D',
  },
  {
    id: 'usa',
    name: 'United States',
    code: 'us',
    flagUrl: 'https://flagcdn.com/w320/us.png',
    dominantColor: '#3C3B6E',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'gb',
    flagUrl: 'https://flagcdn.com/w320/gb.png',
    dominantColor: '#012169',
  },
  {
    id: 'france',
    name: 'France',
    code: 'fr',
    flagUrl: 'https://flagcdn.com/w320/fr.png',
    dominantColor: '#002395',
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'de',
    flagUrl: 'https://flagcdn.com/w320/de.png',
    dominantColor: '#DD0000',
  },
  {
    id: 'australia',
    name: 'Australia',
    code: 'au',
    flagUrl: 'https://flagcdn.com/w320/au.png',
    dominantColor: '#00008B',
  },
  {
    id: 'china',
    name: 'China',
    code: 'cn',
    flagUrl: 'https://flagcdn.com/w320/cn.png',
    dominantColor: '#DE2910',
  },
  {
    id: 'india',
    name: 'India',
    code: 'in',
    flagUrl: 'https://flagcdn.com/w320/in.png',
    dominantColor: '#FF9933',
  },
  {
    id: 'brazil',
    name: 'Brazil',
    code: 'br',
    flagUrl: 'https://flagcdn.com/w320/br.png',
    dominantColor: '#009739',
  },
  {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    code: 'sa',
    flagUrl: 'https://flagcdn.com/w320/sa.png',
    dominantColor: '#006C35',
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    code: 'kr',
    flagUrl: 'https://flagcdn.com/w320/kr.png',
    dominantColor: '#003478',
  },
];