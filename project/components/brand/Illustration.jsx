import React from 'react';

const BASE = (typeof window !== 'undefined' && window.SERENIS_ASSET_BASE) || '';
export const ILLUSTRATIONS = {
  'omino-zoom': 'omino-zoom.png', 'omino-zoom-1': 'omino-zoom-1.png', 'omino-1': 'omino-1.png', 'omino-2': 'omino-2.png',
  'omino-annoiato': 'omino-annoiato.png', 'omino-appoggiato': 'omino-appoggiato.png', 'omino-appoggiato-2': 'omino-appoggiato-2.png',
  'omino-cade': 'omino-cade.png', 'omino-caffe': 'omino-caffe.png', 'omino-cucu': 'omino-cucu.png', 'omino-centro': 'omino-centro.svg', 'omino-bici': 'omino-bici.svg',
  'livello-1-10': 'livello-1-10.png', 'batti-8': 'batti-8.png', 'batti-pasta': 'batti-pasta.png', 'mani-e-piedi': 'mani-e-piedi.png',
  'mano-16': 'mano-16.png', 'mano-17': 'mano-17.png', 'mano-18': 'mano-18.png', 'mano-19': 'mano-19.png', 'mano-20': 'mano-20.png',
  'mano-21': 'mano-21.png', 'mano-22': 'mano-22.png', 'mano-23': 'mano-23.png', 'mano-alt': 'mano-alt.png', 'mano-alt-1': 'mano-alt-1.png',
  'mano-alt-2': 'mano-alt-2.png', 'mano-gratis': 'mano-gratis.png', 'mano-sconto': 'mano-sconto.png',
};

export function Illustration({ name = 'omino-zoom', width, height, fit = 'contain', base = BASE + 'assets/illustrations/', style, alt = '' }) {
  return <img src={base + (ILLUSTRATIONS[name] || name)} alt={alt} style={{ width, height, objectFit: fit, display: 'block', ...style }} />;
}
