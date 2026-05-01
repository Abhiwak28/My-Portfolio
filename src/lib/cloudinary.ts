/**
 * Optimizes a Cloudinary URL by adding auto-format, auto-quality, and other performance parameters.
 * @param url The original Cloudinary URL
 * @param options Optimization options (width, height, etc.)
 * @returns Optimized URL
 */
export const optimizeCloudinaryUrl = (
  url: string,
  options: { width?: number; height?: number; crop?: string; format?: string } = {}
): string => {
  if (!url || !url.includes('cloudinary.com')) return url;

  // Change extension to mp4 for videos if it's .mov for better compatibility
  let optimizedUrl = url.replace(/\.mov$/i, '.mp4');

  const params = ['q_auto', 'f_auto'];

  if (options.width) params.push(`w_${options.width}`);
  if (options.height) params.push(`h_${options.height}`);
  if (options.crop) params.push(`c_${options.crop}`);
  if (options.format) {
    // If format is specified, we replace f_auto with the specific format
    const fIndex = params.indexOf('f_auto');
    if (fIndex > -1) params.splice(fIndex, 1);
    params.push(`f_${options.format}`);
  }

  const paramString = params.join(',');

  // Insert params after /upload/
  if (optimizedUrl.includes('/upload/')) {
    optimizedUrl = optimizedUrl.replace('/upload/', `/upload/${paramString}/`);
  }

  return optimizedUrl;
};

/**
 * Generates a poster (thumbnail) URL for a Cloudinary video.
 */
export const getCloudinaryVideoPoster = (url: string): string => {
  if (!url || !url.includes('cloudinary.com')) return '';
  
  // Replace extension with .jpg and add auto-quality/format
  return url
    .replace(/\.(mp4|mov|webm)$/i, '.jpg')
    .replace('/upload/', '/upload/q_auto,f_auto,so_0/');
};
