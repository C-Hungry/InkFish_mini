
##说明：

#安装依赖包：
npm install

#运行
npm run dev

#创建mongodb存储目录
C:
mkdir data
cd data
mkdir db
cd db

#安装并启动mongodb，参考：http://www.runoob.com/mongodb/mongodb-window-install.html
net stop mongodb-service
cd C:\Program Files\MongoDB\Server\3.4\bin
mongod --dbpath c:\data\db
mongo
