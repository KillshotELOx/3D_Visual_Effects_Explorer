export interface Effect {
  name: string;
  description: string;
}

export interface EffectCategory {
  name: string;
  effects: Effect[];
}

export interface EffectData {
  name: string;
  description: string;
}
