/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {GoogleGenAI} from '@google/genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function debug(...args: string[]) {
  const turn = document.createElement('div');
  turn.textContent = args.join('');
  document.body.append(turn);
}

async function countTokens() {
  const ai = new GoogleGenAI({vertexai: false, apiKey: GEMINI_API_KEY});

  const response = await ai.models.countTokens({
    model: 'gemini-2.0-flash',
    contents: 'The quick brown fox jumps over the lazy dog.',
  });

  debug(JSON.stringify(response));
}

async function main() {
  await countTokens().catch((e) => console.error('got error', e));
}

main();
