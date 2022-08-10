#!/bin/bash
log(){
    # echo "\e[36m $1 \e[0m"
    echo $1;
}

init_gitignore(){
touch .gitignore
cat > .gitignore << EOF
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*
node_modules
dist
.lh
.history
EOF
}

init_ts(){
mkdir typings
touch tsconfig.json
cat > tsconfig.json << EOF
{
	"extends": "@vue/tsconfig/tsconfig.web.json",
	"include": ["packages", "typings"],
	"exclude": ["node_modules", "**/dist", "**/__tests__/**/*"],
	"compilerOptions": {
		"allowJs": true,
		"module": "ES6",
		"target": "ES2018",
		"noImplicitAny": false,
		"declaration": true,
		"sourceMap": true,
		"lib": ["ES2018", "DOM", "DOM.Iterable"],
		"allowSyntheticDefaultImports": true,
		"types": []
	}
}
EOF
}

init_test(){
mkdir test
touch vitest.config.ts
cat > vitest.config.ts << EOF
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  test: {
    include: ['test/**/*.test.ts'],
  },
})
EOF
}

init_package(){
touch package.json
cat > package.json <<EOF
{
  "name": "$1",
  "type": "module",
  "packageManager": "pnpm@6.26.1",
  "version": "0.0.0",
  "description": "",
  "sideEffects": false,
  "types": "dist/index.d.ts",
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "scripts": {
    "dev": "npm -C playground run dev "
  },
  "dependencies": {
    "typescript": "^4.7.4",
    "vitest": "^0.21.0",
    "@vue/tsconfig": "^0.1.3"
  },
   "engines": {
    "node": ">=16"
  },
  "files": [
    "dist",
    "*.d.ts",
    "README.md"
  ],
  "keywords": [],
  "author": "",
  "license": "MIT"
}
EOF
}

init_workspace(){
touch pnpm-workspace.yaml;
cat > pnpm-workspace.yaml <<EOF
packages:
  - packages/*
  - playground
EOF
}

init_npmrc(){
touch .npmrc;
cat > .npmrc <<EOF
shamefully-hoist = true
save-workspace-protocol = rolling
EOF
}

init_playground(){
mkdir playground
cd playground

cat > pnpm-workspace.yaml <<EOF
shamefully-hoist = true
save-workspace-protocol = rolling
EOF
}

finsh_log(){
  log "下载完成"
  code .
  # cd ..
}

ensure_repo_dir(){
   rm -rf $1;
   mkdir $1;
   cd $1;
   mkdir packages
   init_package $1
   init_gitignore
   init_test
   init_ts
   init_npmrc
   init_workspace
  #  init_playground
   finsh_log
}

ensure_repo_dir $1;
