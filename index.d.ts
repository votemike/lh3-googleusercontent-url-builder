interface UrlBuilderOptions {
  allowUpscale: boolean,
  backgroundColor: string,
  borderRadius: number,
  borderWidth: number,
  circularMask: boolean,
  color: string,
  crop: boolean,
  cropWithDifferentFocus: boolean,
  disableWebP: boolean,
  height: number,
  flipHorizontally: boolean,
  flipVertically: boolean,
  forceDownload: boolean,
  forceLossyCompression: boolean,
  forceScaling: boolean,
  imageFormat: 'gif' | 'jpeg' | 'png' | 'webp',
  losslessCompression: boolean,
  lossyCompressionLevel: number,
  lossyCompressionVersion: 0 | 1 | 2 | 3,
  padding: number,
  paddingColor: string,
  rotate: 90 | 180 | 270,
  square: number,
  upscaling: boolean,
  width: number
}

export default function urlBuilder(baseUrl: string, options: UrlBuilderOptions): string;
