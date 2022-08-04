
# 初始化npm项目
- `pnpm init`
# 创建 .npmrc
- [参考](https://pnpm.io/zh/npmrc)
```
shamefully-hoist = true
save-workspace-protocol = rolling
```
# 创建pnpm-workspace.yaml
```
packages:
 - packages/*
```
# 创建packages目录

# 安装typescript环境
- `-w` or `--workspace-root`表示只有根目录安装
- `pnpm i typescript -D -w`


# 注意模块的package.json的入口
- 默认入口：`main`: `index.js`
- ts入口：`main`: `index.ts`