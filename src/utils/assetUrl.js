/**
 * Utility to resolve asset URLs with Vite's import.meta.env.BASE_URL.
 * Ensures image paths work seamlessly both in local development and in production
 * under custom sub-paths (like GitHub Pages '/agtechlabs-website/').
 */
export function getAssetUrl(path) {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;

  // If already prefixed with the base path, return as is
  if (path.startsWith(prefix)) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${prefix}${cleanPath}`;
}

export default getAssetUrl;
