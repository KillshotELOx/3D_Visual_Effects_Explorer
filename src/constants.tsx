import { EffectCategory } from './types';

export const effectCategories: EffectCategory[] = [
  {
    name: 'Basic Effects',
    effects: [
      { name: 'Cel Shading', description: 'Applies a cartoon-like cel shading effect.' },
      { name: 'Jelly Effect', description: 'Makes the model appear wobbly and jelly-like.' },
      { name: 'Outline', description: 'Adds a prominent outline to the model.' },
    ],
  },
  {
    name: 'Advanced Effects',
    effects: [
      { name: 'Chromatic Aberration', description: 'Simulates a common optical distortion.' },
      { name: 'Bloom', description: 'Adds a glow effect to bright areas.' },
    ],
  },
];

export const DEFAULT_MODEL_URL = '/a_cute_little_gummy_b_0806032807_texture.glb';
