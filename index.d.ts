interface UrlBuilderOptions {
  allowUpscale: boolean,
  backgroundColor: string,
  borderRadius: string,
  borderWidth: string,
  circularMask: string,
  color: string,
  crop: string,
  cropWithDifferentFocus: boolean,
  disableWebP: boolean,
  height: string,
  flipHorizontally: boolean,
  flipVertically: boolean,
  forceDownload: boolean,
  forceLossyCompression: boolean,
  forceScaling: boolean,
  imageFormat: string,
  losslessCompression: string,
  lossyCompressionLevel: string,
  lossyCompressionVersion: string,
  padding: string,
  paddingColor: string,
  rotate: string,
  square: string,
  upscaling: boolean,
  width: string
}

export default function urlBuilder(baseUrl: string, options: UrlBuilderOptions): MyResponse;
