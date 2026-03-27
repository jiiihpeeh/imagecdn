/* MIT License - Copyright 2024 Caffeine Veins */

// Simple inline worker that loads WASM from same origin
import init, { spow_solve } from '/_astro/spow_wasm.js';

await init('/_astro/spow_wasm_bg.wasm');

self.onmessage = async (e) => {
  const { type, id, challenge } = e.data;

  if (type === 'solve') {
    try {
      const solution = spow_solve(challenge);
      self.postMessage({ type: 'result', id, solution });
    } catch (err) {
      self.postMessage({ type: 'error', id, error: String(err) });
    }
  }
};
