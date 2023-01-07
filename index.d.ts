interface UrlBuilderOptions {
  allowUpscale: boolean = true,
  backgroundColor: string,
  borderRadius: string,
  borderWidth: string,
  circularMask: string,
  color: string,
  crop: string,
  cropWithDifferentFocus: string,
  disableWebP: string,
  height: string,
  flipHorizontally: string,
  flipVertically: string,
  forceDownload: string,
  forceLossyCompression: string,
  forceScaling: string,
  imageFormat: string,
  losslessCompression: string,
  lossyCompressionLevel: string,
  lossyCompressionVersion: string,
  padding: string,
  paddingColor: string,
  rotate: string,
  square: string,
  upscaling: boolean = true,
  width: string
}

export default function urlBuilder(baseUrl: string, options: UrlBuilderOptions): MyResponse;
