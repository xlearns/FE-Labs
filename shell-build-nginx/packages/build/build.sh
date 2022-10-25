CURRENT_DIR=$(cd $(dirname $0); pwd)
PROT=8080

cd script

cp ./config/dist.conf ./../dist

echo "dist.conf ok"

cd /test/

rm -rf dist

cd $CURRENT_DIR

mv ./../dist  /test/

echo "cp to test ok"

cd /usr/sbin/  

chmod -R 777 /test/

chmod -R 777 /test/dist/ 

systemctl start  nginx.service

systemctl reload  nginx.service

iptables -I INPUT -p tcp --dport $PROT -j ACCEPT

netstat -nap | grep 80