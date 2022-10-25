# 自动build然后将build之后生成的dist文件夹自动部署到
## 前置
- [下载nginx](http://t.zoukankan.com/xdr630-p-14527148.html)
- 配置nginx需要将nginx配置挂载到build包目录
```shell
user  root;
worker_processes  auto;
error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;
    # /test/dist 需要设置权限【脚本提供】
    # /test/dist 为打包之后的目录 
    include /test/dist/*.conf;

} 


```

## 打包生成->dist
- npm run build

## 将config的nginx移动到dist
- cp ./config/dist.conf ./../dist


## 部署到指定位置 
- 【nginx需要配置 include /test/**/*.conf】
- mv ./../dist  /test/


## 重启nginx  
- cd /usr/sbin/   
- ./nginx

## todo
- 根据env.production文件 生成dist.conf
- 将需要的环境导入docker中
- 改成nodejs版本
- 扫描项目根目录ng.config.ts配置文件获取，入口、出口、端口号等 