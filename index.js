// Matches mime types: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#image_types
export const imageFormats = {
  GIF: 'gif',
  JPEG: 'jpeg',
  PNG: 'png',
  WEBP: 'webp'
};

const urlBuilder = (
  baseUrl,
  {
    allowUpscale = true,
    backgroundColor,
    borderRadius,
    borderWidth,
    circularMask,
    color,
    crop,
    cropWithDifferentFocus,
    disableWebP,
    height,
    flipHorizontally,
    flipVertically,
    forceDownload,
    forceLossyCompression,
    forceScaling,
    imageFormat,
    losslessCompression,
    lossyCompressionLevel,
    lossyCompressionVersion,
    padding,
    paddingColor,
    rotate,
    square,
    upscaling = true,
    width
  }) => {
  const params = [];

  if (width) {
    params.push(`w${width}`);
  }

  if (height) {
    params.push(`h${height}`);
  }

  if (square) {
    params.push(`s${square}`);
  }

  if (upscaling === false) {
    if (forceScaling) {
      throw new Error('`upscaling: false` has no effect when forceScaling is true');
    }

    params.push(`nu`);
  }

  if (forceScaling) {
    if (!(height && width)) {
      throw new Error('`forceScaling: true` requires both height and width to be set');
    }

    params.push(`s`);
  }

  if (crop) {
    params.push(`c`);
  }

  if (circularMask) {
    params.push(`cc`);
  }

  if (allowUpscale === false) {
    params.push(`ci`);
  }

  if (cropWithDifferentFocus) {
    params.push(`p`);
  }

  if (flipHorizontally) {
    params.push(`fh`);
  }

  if (flipVertically) {
    params.push(`fv`);
  }

  if (rotate) {
    if (![90, 180, 270].includes(rotate)) {
      throw new RangeError('rotation must be 90, 180 or 270');
    }

    params.push(`r${rotate}`);
  }

  if (borderRadius) {
    params.push(`br${borderRadius}`);
  }

  if (borderWidth) {
    params.push(`b${borderWidth}`);
  }

  if (color) {
    params.push(`c0x${color}`);
  }

  if (backgroundColor) {
    params.push(`bc0x${backgroundColor}`);
  }

  if (padding) {
    params.push(`pd${padding}`);
  }

  if (paddingColor) {
    params.push(`pc0x${paddingColor}`);
  }

  if (imageFormat) {
    if (imageFormat === imageFormats.JPEG) {
      params.push(`rj`);
    }

    if (imageFormat === imageFormats.PNG) {
      params.push(`rp`);
    }

    if (imageFormat === imageFormats.WEBP) {
      if (disableWebP) {
        throw new Error("`imageFormat: imageFormats.WEBP` does nothing with `disableWebP: true`");
      }

      params.push(`rw`);
    }

    if (imageFormat === imageFormats.GIF) {
      params.push(`rg`);
    }
  }

  if (disableWebP) {
    params.push(`nw`);
  }

  if (forceDownload) {
    params.push(`d`);
  }

  if (losslessCompression) {
    params.push(`ft`);
  }

  if (forceLossyCompression) {
    params.push(`lo`);
  }

  if (lossyCompressionLevel) {
    if (lossyCompressionLevel < 0 || lossyCompressionLevel > 100) {
      throw new RangeError('lossyCompressionLevel must be a percentage between 0 and 100');
    }

    params.push(`l${lossyCompressionLevel}`);
  }

  if (lossyCompressionVersion) {
    if (lossyCompressionLevel) {
      throw new Error('lossyCompressionLevel takes precedence over lossyCompressionVersion');
    }

    if (lossyCompressionVersion < 0 || lossyCompressionVersion > 3) {
      throw new RangeError('lossyCompressionVersion must be 0, 1, 2 or 3');
    }

    if (!imageFormat) {
      throw new Error('lossyCompressionVersion requires imageFormat to be set');
    }

    params.push(`v${lossyCompressionVersion}`);
  }

  return params.length === 0 ? baseUrl : `${baseUrl}=${params.join('-')}`;
}

export default urlBuilder;
