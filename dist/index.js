#!/usr/bin/env node
import { Command } from 'commander';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
const JPG_QUALITY_DEFAULT_VALUE = 70;
const PNG_MIN_QUALITY_DEFAULT_VALUE = 0.5;
const PNG_MAX_QUALITY_DEFAULT_VALUE = 0.6;
const program = new Command();
program
    .usage('<target files...> [options]')
    .option('-d, --dist-dir <string>', 'Dist directory path.', './')
    .option('-jq, --jpg-qlt <number>', 'Jpg compression quality, in range 0 to 100.', Number, JPG_QUALITY_DEFAULT_VALUE)
    .option('-minpq, --min-png-qlt <number>', 'Minimal png compression quality, in range 0 to 1.', Number, PNG_MIN_QUALITY_DEFAULT_VALUE)
    .option('-maxpq, --max-png-qlt <number>', 'Maximum png compression quality, in range 0 to 1.', Number, PNG_MAX_QUALITY_DEFAULT_VALUE)
    .parse(process.argv);
const files = program.args;
if (files.length === 0) {
    console.error('Error: Please specify the target file.');
    process.exit(1);
}
const options = program.opts();
const distDirectory = options.distDir;
const jpegMinQuality = options.jpgQlt;
const minPngQuality = options.minPngQlt;
const maxPngQuality = options.maxPngQlt;
await imagemin(files, {
    destination: distDirectory,
    plugins: [
        imageminMozjpeg({ quality: jpegMinQuality }),
        imageminPngquant({ quality: [minPngQuality, maxPngQuality] }),
    ],
});
