import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a hex color to its RGB components.
 * @param hex - The hex color code (e.g., "#F1F5FE").
 * @returns An object containing the red, green, and blue components.
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

/**
 * Converts an RGB color to a hex string.
 * @param r - The red component (0-255).
 * @param g - The green component (0-255).
 * @param b - The blue component (0-255).
 * @returns The hex color string.
 */
function rgbToHex(r: number, g: number, b: number): string {
  const red = r.toString(16).padStart(2, '0').toUpperCase();
  const green = g.toString(16).padStart(2, '0').toUpperCase();
  const blue = b.toString(16).padStart(2, '0').toUpperCase();
  return `#${red}${green}${blue}`;
}

/**
 * Converts RGB to HSL.
 * @param r - The red component (0-255).
 * @param g - The green component (0-255).
 * @param b - The blue component (0-255).
 * @returns An object containing the hue, saturation, and lightness components.
 */
function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255, g /= 255, b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h: number, s: number, l: number = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h, s, l };
}

/**
 * Converts HSL to RGB.
 * @param h - The hue component (0-1).
 * @param s - The saturation component (0-1).
 * @param l - The lightness component (0-1).
 * @returns An object containing the red, green, and blue components.
 */
function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  let r: number, g: number, b: number;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

/**
 * Darkens a given hex color by a specified amount, keeping the hue constant.
 * @param hex - The starting hex color code (e.g., "#F1F5FE").
 * @param amount - The amount to darken the color (0 to 1).
 * @returns The new hex color code that is darker.
 */
export function darkenColor(hex: string, amount: number): string {
  const { r, g, b } = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(r, g, b);

  // Decrease the lightness
  const newL = Math.max(0.05, l - amount - 0.1);

  const { r: newR, g: newG, b: newB } = hslToRgb(h, s, newL);
  return rgbToHex(newR, newG, newB);
}