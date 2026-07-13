import { siteUrl } from "./metadata";

export const LOGO_WHITE_URL = "/images/logo-white.png";
export const LOGO_COLOR_URL = "/images/logo-color.png";

export function normalizeLogoUrl(url: string, fallback: string): string {
  const trimmed = url.trim();
  if (!trimmed) return fallback;

  if (/logo-white|AM-logo-white/i.test(trimmed)) {
    return LOGO_WHITE_URL;
  }

  if (/logo-color|AM-logo-color/i.test(trimmed)) {
    return LOGO_COLOR_URL;
  }

  return trimmed;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
