import urlBuilder, {imageFormats} from "./index.js";
import test from "tape";

const baseUrl = 'https://lh3.googleusercontent.com/8U8BH0Yis1MxtWF80v_-f3MNnmGc6RpvpG7P-puGzSaiZDooHloePWpfRXhuECOFL9KpZbe5tr0drGG6rzsw_RkTtry-ODtGS576utE0AjHFSSPEcr-D_YRgm5f3_zREaTNeSVXMRNtQhsz9yBw1x8QmySg-II20GEjELHoOGCyLRf6zskp2RqUitqww4GShVDEOc-kCkXkOOR0EGvOhGy3N6WXUj_bbrplux-xbJafyFyWFfjNJIOzhB1R0OIT15NsLyDhMcaI_xCNbz3_wMTLEJCmrmN0T66gj87OwjVrMaTljUGDoD43MUQueJBfQ9unjw-JnWaKGSPqCD395JI-xDAA3AR-BJVtLIAueR2SucbbxivnEuAYilANbM-0UoSoh-c3Muft_xpvDmyA8SwW04mvi5bMmU_cvJtHzOdqxEGR9NFzSFQhRPVpY-0HJaPYhdiuHrtYCowsAXA7wim63HXF5XFKOrvc706q0zTeZSionWlratj--PJRSkAoQntMvTxi19eo-HFVAFFKGT9keyzYcGk-vsOOJCTeYu6enpHqxwP9LUXliWRSuL3HLA1KJWWpPsCE22rYZBurHvXYO4PtL-tvdjZuMA6Fq2EzfZtxb4X1JuWGuOsmXu3YxFuC3GynYp0bO3vob7RIgszzeFznLTBDnGkwWsyeeqvZhlM4J8_XqD1vBjyiErJ8_iEMefNhOvQCqyz-o8tCxkN0yOS2kmaDZJmufCuWxzEU3YFgjGc61pbkx-eh7AL4J_Q7NXaCbueWQ4eLPHVV7n7063BnsfgHLcUMdIT6CE3503-edb_hlycynoKAMRcT6F_UZquSTdkJ88koI25k1BcZrtpXy0rCwUJYIvrA4FXD466f8zKV9vsGiar2KTpQnaowOcsuq4CJc0-GciOGrOONEiKPaDDfDv9tp98YkwgmpzpyHYoDver9ZmLtbQLUKstgQ4Cb6URm7fePKtoyJHvc';

test('no extra params', function (assert) {
  assert.plan(1);
  assert.strictEqual(urlBuilder(baseUrl, {}), baseUrl);
});

test('adding single param', function (assert) {
  assert.plan(30);
  assert.strictEqual(urlBuilder(baseUrl, {width: 600}), `${baseUrl}=w600`);
  assert.strictEqual(urlBuilder(baseUrl, {height: 400}), `${baseUrl}=h400`);
  assert.strictEqual(urlBuilder(baseUrl, {square: 500}), `${baseUrl}=s500`);
  assert.strictEqual(urlBuilder(baseUrl, {upscaling: true}), `${baseUrl}`);
  assert.strictEqual(urlBuilder(baseUrl, {upscaling: false}), `${baseUrl}=nu`);
  assert.strictEqual(urlBuilder(baseUrl, {forceScaling: true, height: 400, width: 600}), `${baseUrl}=w600-h400-s`);
  assert.strictEqual(urlBuilder(baseUrl, {crop: true}), `${baseUrl}=c`);
  assert.strictEqual(urlBuilder(baseUrl, {circularMask: true}), `${baseUrl}=cc`);
  assert.strictEqual(urlBuilder(baseUrl, {allowUpscale: true}), `${baseUrl}`);
  assert.strictEqual(urlBuilder(baseUrl, {allowUpscale: false}), `${baseUrl}=ci`);
  assert.strictEqual(urlBuilder(baseUrl, {cropWithDifferentFocus: true}), `${baseUrl}=p`);
  assert.strictEqual(urlBuilder(baseUrl, {flipHorizontally: true}), `${baseUrl}=fh`);
  assert.strictEqual(urlBuilder(baseUrl, {flipVertically: true}), `${baseUrl}=fv`);
  assert.strictEqual(urlBuilder(baseUrl, {rotate: 90}), `${baseUrl}=r90`);
  assert.strictEqual(urlBuilder(baseUrl, {borderRadius: 4}), `${baseUrl}=br4`);
  assert.strictEqual(urlBuilder(baseUrl, {borderWidth: 2}), `${baseUrl}=b2`);
  assert.strictEqual(urlBuilder(baseUrl, {color: '00ff99'}), `${baseUrl}=c0x00ff99`);
  assert.strictEqual(urlBuilder(baseUrl, {backgroundColor: '00ff99'}), `${baseUrl}=bc0x00ff99`);
  assert.strictEqual(urlBuilder(baseUrl, {padding: 4}), `${baseUrl}=pd4`);
  assert.strictEqual(urlBuilder(baseUrl, {paddingColor: '00ff99'}), `${baseUrl}=pc0x00ff99`);
  assert.strictEqual(urlBuilder(baseUrl, {imageFormat: imageFormats.JPEG}), `${baseUrl}=rj`);
  assert.strictEqual(urlBuilder(baseUrl, {imageFormat: imageFormats.PNG}), `${baseUrl}=rp`);
  assert.strictEqual(urlBuilder(baseUrl, {imageFormat: imageFormats.WEBP}), `${baseUrl}=rw`);
  assert.strictEqual(urlBuilder(baseUrl, {imageFormat: imageFormats.GIF}), `${baseUrl}=rg`);
  assert.strictEqual(urlBuilder(baseUrl, {disableWebP: true}), `${baseUrl}=nw`);
  assert.strictEqual(urlBuilder(baseUrl, {forceDownload: true}), `${baseUrl}=d`);
  assert.strictEqual(urlBuilder(baseUrl, {losslessCompression: true}), `${baseUrl}=ft`);
  assert.strictEqual(urlBuilder(baseUrl, {forceLossyCompression: true}), `${baseUrl}=lo`);
  assert.strictEqual(urlBuilder(baseUrl, {lossyCompressionLevel: 20}), `${baseUrl}=l20`);
  assert.strictEqual(urlBuilder(baseUrl, {lossyCompressionVersion: 1, imageFormat: imageFormats.WEBP}), `${baseUrl}=rw-v1`);
});

test('param combinations', function (assert) {
  assert.plan(1);
  assert.strictEqual(urlBuilder(baseUrl, {width: 600, height: 400}), `${baseUrl}=w600-h400`);
});

test('invalid param values', function (assert) {
  assert.plan(3);
  let err = new RangeError("rotation must be 90, 180 or 270");
  assert.throws(() => urlBuilder(baseUrl, {rotate: 45}), err);
  err = new RangeError("lossyCompressionLevel must be a percentage between 0 and 100");
  assert.throws(() => urlBuilder(baseUrl, {lossyCompressionLevel: 101}), err);
  err = new RangeError("lossyCompressionVersion must be 0, 1, 2 or 3");
  assert.throws(() => urlBuilder(baseUrl, {lossyCompressionVersion: 4}), err);
});

test('invalid param combinations', function (assert) {
  assert.plan(5);
  let err = new Error("`upscaling: false` has no effect when forceScaling is true");
  assert.throws(() => urlBuilder(baseUrl, {upscaling: false, forceScaling: true}), err);
  err = new Error("`forceScaling: true` requires both height and width to be set");
  assert.throws(() => urlBuilder(baseUrl, {forceScaling: true}), err);
  err = new Error("`imageFormat: imageFormats.WEBP` does nothing with `disableWebP: true`");
  assert.throws(() => urlBuilder(baseUrl, {imageFormat: imageFormats.WEBP, disableWebP: true}), err);
  err = new Error("lossyCompressionLevel takes precedence over lossyCompressionVersion");
  assert.throws(() => urlBuilder(baseUrl, {lossyCompressionLevel: 20, lossyCompressionVersion: 1}), err);
  err = new Error("lossyCompressionVersion requires imageFormat to be set");
  assert.throws(() => urlBuilder(baseUrl, {lossyCompressionVersion: 1}), err);
});
