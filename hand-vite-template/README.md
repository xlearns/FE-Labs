# 不使用脚手架初始化vite项目

## pnpm初始化
- `pnpm init`

## 安装vue和ts
-  ` pnpm i vue@next typescript`

## ts初始化
- `npx tsc --init`
- tsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "jsx": "preserve",
    "strict": true,
    "target": "ES2015",
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "moduleResolution": "Node",
    "lib": ["esnext", "dom"]
  }
}{
  "compilerOptions": {
    "baseUrl": ".",
    "jsx": "preserve",
    "strict": true,
    "target": "ES2015",
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "moduleResolution": "Node",
    "lib": ["esnext", "dom"]
  }
}
```
## 安装vite
- `pnpm init vite`

## 安装vite插件解析vue
- `@vitejs/plugin-vue`

## 新建vite.config.ts配置文件
```js
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins:[vue()]
})
```
## 新建html
```html
<body>
  <div id="app"></div>
  <script src="src/main.ts" type="module"></script>
</body>
```

## 新建matn.ts
```ts
import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");
```
## 新建app.vue

```vue
<script setup lang="ts">
const msg = $ref("hello");
</script>

<template>
	{{ msg }}
</template>
```