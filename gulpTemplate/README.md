# [官网](https://gulpjs.com/docs/en/getting-started/quick-start)


# @esbuild-kit/cjs-loader
- Node.js loader for compiling ESM & TypeScript modules to CommonJS
- 安装： `npm i @esbuild-kit/cjs-loader`


# [gulp](https://www.gulpjs.com.cn/docs/api)
- [series](https://www.gulpjs.com.cn/docs/api/series/) 
  - 将任务按顺序执行【串行】
- [parallel](https://www.gulpjs.com.cn/docs/api/parallel/)
  - 将任务按并行执行【并行】
- [dest](https://www.gulpjs.com.cn/docs/api/dest/)
  - 创建一个写入到文件系统的流
- [src](https://www.gulpjs.com.cn/docs/api/src/)
  - 创建一个读取文件系统的流




# [consola](https://www.npmjs.com/package/consola)
- 作用: 美化控制台输出
- success
- info
- error

# [@esbuild-kit/cjs-loader](https://www.npmjs.com/package/@esbuild-kit/cjs-loader)
- 作用: 将ESM模块转换为CommonJS模块
- 安装：`npm i @esbuild-kit/cjs-loader`
- 使用: `xx --require @esbuild-kit/cjs-loader`
- 示例：
```
    const { createBundle } = require('@esbuild-kit/cjs-loader');
    const bundle = createBundle({
      entry: './src/index.js',
      outfile: './dist/index.js',
      loader: '@esbuild-kit/cjs-loader',
    });
```



# [gulp-sass](https://www.npmjs.com/package/gulp-sass)


# [TS，找不到名称“__dirname”]
- `npm install --save-dev @types/node`


# scss总结
## @function
- 作用: 定义一个函数
- 有计算逻辑，返回计算的结果，不输出css块
- 示例：
    @function mixin($color) {
      @return $color;
    }
    .mixin {
      color: mixin(#ff0000);
    }

## @mixin
- 作用: 定义一个mixin
- mixin主要是计算根据计算结果输出css块
- 示例：
```
    @mixin button-border($color) {
      border: 1px solid $color;
    }
```

## scss数组
- 使用:`()`

# scss中map
- map.deep-merge
  - 作用: 合并两个map