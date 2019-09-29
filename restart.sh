port=8099
pid=`lsof -t -i:$port`
if [ $pid ];then
    kill -9 $pid
fi
nohup python -m SimpleHTTPServer $port &
