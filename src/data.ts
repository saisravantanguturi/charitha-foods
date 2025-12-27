import { Product, Category } from './types';
import honeyImage from './honey.png';
import BufgheeImage from './buf-ghee.png';
import CowgheeImage from './cow-ghee.png';
import DhaniyalaKaramPodi from './Dhaniyala-Karam-Podi.png';
import KarivepaakuKaramPodi from './Karivepaaku-Karam-Podi.png';
import KandiKaramPodi from './Kandi-Karam-Podi.png';
import PuthalaKaramPodi from './Puthala-Karam-Podi.png';
import NallaKaramPodi from './Nalla-Karam-Podi.png';
import PancharatnaKaramPodi from './Pancharatna-Karam-Podi.png';
import KooraKaramPodi from './Koora-Karam-Podi.png';
import GonguraPickle from './Gongura-Pickle.png';


const variantsPowderWeight = [
  { id: 'va1', label: '100g' },
  { id: 'va2', label: '250g' },
  { id: 'va3', label: '500g' },
];

const variantsWeight = [
  { id: 'v1', label: '250g' },
  { id: 'v2', label: '500g' },
  { id: 'v3', label: '1kg' },
];

// UPDATED: Added the 5L variant here
const variantsVolume = [
  { id: 'vol1', label: '500ml' },
  { id: 'vol2', label: '1L' },
  { id: 'vol3', label: '5L' }, 
];

const variantsPack = [
  { id: 'p1', label: 'Small Pack' },
  { id: 'p2', label: 'Family Pack' },
];

export const PRODUCTS: Product[] = [
  // Sweets
  {
    id: 's1',
    name: 'Ariselu (Jaggery)',
    category: Category.SWEETS,
    image: 'https://picsum.photos/id/1080/400/400',
    subtitle: 'Made with organic bellam & pure ghee',
    variants: variantsWeight,
  },
  {
    id: 's2',
    name: 'Sunnundalu',
    category: Category.SWEETS,
    image: 'https://picsum.photos/id/1062/400/400',
    subtitle: 'Classic black gram sweet',
    variants: variantsWeight,
  },
  {
    id: 's3',
    name: 'Pootharekulu',
    category: Category.SWEETS,
    image: 'https://picsum.photos/id/111/400/400',
    subtitle: 'Paper sweet with dry fruits',
    variants: [{ id: 'bx1', label: 'Box of 5' }, { id: 'bx2', label: 'Box of 10' }],
  },
  // Snacks
  {
    id: 'sn1',
    name: 'Chekkalu',
    category: Category.SNACKS,
    image: 'https://picsum.photos/id/108/400/400',
    subtitle: 'Crispy rice crackers',
    variants: variantsWeight,
  },
  {
    id: 'sn2',
    name: 'Murukulu',
    category: Category.SNACKS,
    image: 'https://picsum.photos/id/113/400/400',
    subtitle: 'Traditional butter murukulu',
    variants: variantsWeight,
  },
  // Oils - These all now include 500ml, 1L, and 5L
  {
    id: 'o1',
    name: 'Cold Pressed Groundnut Oil',
    category: Category.OILS,
    image: 'https://picsum.photos/id/132/400/400',
    subtitle: 'Wood pressed, unrefined',
    variants: variantsVolume,
  },
  {
    id: 'o2',
    name: 'Cold Pressed Sesame Oil',
    category: Category.OILS,
    image: 'https://picsum.photos/id/112/400/400',
    subtitle: 'Perfect for pickles',
    variants: variantsVolume,
  },
  {
    id: 'o3',
    name: 'Cold Pressed Coconut Oil',
    category: Category.OILS,
    image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=400&auto=format&fit=crop',
    subtitle: 'Pure wood pressed, unrefined',
    variants: variantsVolume,
  },
  {
    id: 'o4',
    name: 'Cold Pressed Sunflower Oil',
    category: Category.OILS,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=400&auto=format&fit=crop',
    subtitle: 'Traditionally wood pressed',
    variants: variantsVolume,
  },
  // Pickles
  {
    id: 'p1',
    name: 'Avakaya (Mango Pickle)',
    category: Category.PICKLES,
    image: 'https://picsum.photos/id/292/400/400',
    subtitle: 'New season mangoes',
    variants: variantsWeight,
  },
  {
    id: 'p2',
    name: 'Gongura Pickle',
    category: Category.PICKLES,
    image: GonguraPickle,
    subtitle: 'Spicy sorrel leaves',
    variants: variantsWeight,
  },
  // Spices
  {
    id: 'sp1',
    name: 'Dhaniyala Karam Podi',
    category: Category.SPICES,
    image: DhaniyalaKaramPodi,
    subtitle: 'Spiced Coriander Powder',
    variants: variantsPowderWeight,
  },
  {
    id: 'sp2',
    name: 'Karivepaku Karam Podi',
    category: Category.SPICES,
    image: KarivepaakuKaramPodi,
    subtitle: 'Curry leaf spices powder',
    variants: variantsPowderWeight,
  },
  {
    id: 'sp3',
    name: 'Kandi Karam Podi',
    category: Category.SPICES,
    image: KandiKaramPodi,
    subtitle: 'Toor Dal Spice Powder',
    variants: variantsPowderWeight,
  },
  {
    id: 'sp4',
    name: 'Puthala Karam Podi',
    category: Category.SPICES,
    image: PuthalaKaramPodi,
    subtitle: 'Roasted Chana Dal Spice Powder',
    variants: variantsPowderWeight,
  },
  {
    id: 'sp5',
    name: 'Nalla Karam Podi',
    category: Category.SPICES,
    image: NallaKaramPodi,
    subtitle: 'Black Spice Powder',
    variants: variantsPowderWeight,
  },
  {
    id: 'sp6',
    name: 'Pancharatna Karam Podi',
    category: Category.SPICES,
    image: PancharatnaKaramPodi,
    subtitle: 'Five Jewels Spicy Powder',
    variants: variantsPowderWeight,
  },
  {
    id: 'sp7',
    name: 'Koora Karam Podi',
    category: Category.SPICES,
    image: KooraKaramPodi,
    subtitle: 'Curry Spices Powder',
    variants: variantsPowderWeight,
  },
  // Honey Ghee
  {
    id: 'hg1',
    name: 'Pure Cow Ghee',
    category: Category.HONEY_GHEE,
    image: CowgheeImage,
    subtitle: 'Bilona method',
    variants: variantsWeight,
  },
{
    id: 'hg2',
    name: 'Pure Buffalo Ghee',
    category: Category.HONEY_GHEE,
    image: BufgheeImage,
    subtitle: 'Bilona method',
    variants: variantsWeight,
  },
  {
    id: 'hg3',
    name: 'Pure Honey',
    category: Category.HONEY_GHEE,
    image: honeyImage,
    subtitle: 'Raw and unprocessed',
    variants: variantsWeight,
  },
];

export const CATEGORIES_LIST = [
  { id: Category.SWEETS, image: 'https://picsum.photos/id/431/300/300' },
  { id: Category.SNACKS, image: 'https://picsum.photos/id/429/300/300' },
  { id: Category.OILS, image: 'https://picsum.photos/id/112/300/300' },
  { id: Category.SPICES, image: 'https://picsum.photos/id/306/300/300' },
  { id: Category.PICKLES, image: 'https://picsum.photos/id/292/300/300' },
  { id: Category.FRYUMS, image: 'https://picsum.photos/id/488/300/300' },
  { id: Category.HONEY_GHEE, image: 'https://picsum.photos/id/225/300/300' },
];