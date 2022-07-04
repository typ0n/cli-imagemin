# cli-imagemin

The product for compressing jpg and png from cli.  
This was created in the course of my studies.  
I would be happy to help as many people as possible to work more efficiently.

## Usage

### For global installation

```shell
$ npm i -g cli-imagemin

$ cli-imagemin sample.jpg

$ cli-imagemin sample01.jpg sample02.jpg # For multiple
```

### For npx

```shell
$ npx cli-imagemin sample.jpg

$ npx cli-imagemin sample01.jpg sample02.jpg # For multiple
```

## Params

```shell
$ cli-imagemin ${file_names...} -d ${dist_directory} -jq ${jpg_compression_quality} -minpq ${minimal_png_compression_quality}  -maxpq ${maximum_png_compression_quality}
```

### Options

```shell
dist_directory: Dist directory path. (default: "./")
```

```shell
jpg_compression_quality: Jpg compression quality, in range 0 to 100. (default: 70)
```

```shell
minimal_png_compression_quality: Minimal png compression quality, in range 0 to 1. (default: 0.5)
```

```shell
maximum_png_compression_quality: Maximum png compression quality, in range 0 to 1. (default: 0.6)
```
