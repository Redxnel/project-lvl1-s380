#!/usr/bin/env node

export const randomDigit = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomPosition = stringLength => Math.floor(Math.random() * stringLength);
