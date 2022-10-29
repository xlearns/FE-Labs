CURRENT_DIR=$(cd $(dirname $0); pwd);
SERVER_PROP=8080
cd $CURRENT_DIR;
cd ..


for line in `cat .env.production`
do
    k=${line%=*}
    v=${line#*=}
    if [ $k == 'SERVER_PROP' ]
    then SERVER_PROP=$v;
    fi
    # echo "$k :  $v"
done

echo $SERVER_PROP;
