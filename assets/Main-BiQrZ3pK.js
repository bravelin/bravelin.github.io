import{_ as c,q as t,s as p,h as s,o as u,e,x as l}from"./index-Gk4_0vGT.js";const r={};function i(d,n){const o=s("MyArticle");return u(),t(o,{title:"Ubuntu20.04编译安装OpenCV4.5.0",date:"2025年04月17日"},{default:p(()=>n[0]||(n[0]=[e("div",{class:"_article-content"},[e("p",null,[l("OpenCv主页："),e("a",{href:"https://opencv.org/releases/",target:"_blank"},"https://opencv.org/releases/")]),e("p",null,"查看opencv版本命令："),e("pre",null,[e("code",null,`root@PC-ZHANGJIALIN:/mnt/d# pkg-config --modversion opencv4
4.5.0
// 或者
root@PC-ZHANGJIALIN:/mnt/d# opencv_version
4.5.0`)]),e("h3",{class:"title"},"安装依赖项"),e("p",null,"基础编译工具"),e("pre",null,[e("code",null,"sudo apt install -y g++ cmake make wget unzip")]),e("p",null,"核心依赖库"),e("pre",null,[e("code",null,"sudo apt-get install build-essential libgtk2.0-dev libgtk-3-dev libavcodec-dev libavformat-dev libjpeg-dev libswscale-dev libtiff5-dev")]),e("p",null,"可选依赖库"),e("pre",null,[e("code",null,"sudo apt install libpng-dev libopenexr-dev libwebp-dev libgstreamer-plugins-base1.0-dev libgstreamer1.0-dev")]),e("p",null,"Python支持"),e("pre",null,[e("code",null,"sudo apt install python3-dev python3-numpy")]),e("h3",{class:"title"},"源码下载"),e("pre",null,[e("code",null,`wget -O opencv-4.5.0.zip https://codeload.github.com/opencv/opencv/zip/refs/tags/4.5.0
wget -O opencv_contrib-4.5.0.zip https://github.com/opencv/opencv_contrib/archive/4.5.0.zip
unzip opencv-4.5.0.zip -d ./
unzip opencv_contrib-4.5.0.zip -d ./`)]),e("p",null,"将opencv_contrib-4.5.0文件夹移动到opencv-4.5.0目录下："),e("pre",null,[e("code",null,`mv opencv_contrib-4.5.0 ./opencv-4.5.0
cd opencv-4.5.0`)]),e("h3",{class:"title"},"编译与安装"),e("p",null,"创建构建目录"),e("pre",null,[e("code",null,`mkdir build && cd build
// CMake配置
cmake -D CMAKE_BUILD_TYPE=Release -D OPENCV_GENERATE_PKGCONFIG=YES -D OPENCV_EXTRA_MODULES_PATH=../opencv_contrib-4.5.0/modules -D CMAKE_INSTALL_PREFIX=/usr/local ..`)]),e("p",null,[l("手动下载boostdesc_bgm.i等文件，百度云："),e("a",{href:"https://pan.baidu.com/s/1BeYF8kqEZLAJYQj-MvxpmA",target:"_blank"},"https://pan.baidu.com/s/1BeYF8kqEZLAJYQj-MvxpmA"),l("(提取码：e1wc)")]),e("p",null,"解压后将所有文件复制到opencv_contrib-4.5.0/modules/xfeatures2d/src/ 目录下"),e("pre",null,[e("code",null,`mv file.zip ./opencv_contrib-4.5.0/modules/xfeatures2d/src
unzip file.zip -d ./`)]),e("p",null,"拷贝modules/features2d目录至opencv_contrib-4.5.0/modules/xfeatures2d/test/下面"),e("pre",null,[e("code",null,`cd opencv-4.5.0
cp -r ./modules/features2d ./opencv_contrib-4.5.0/modules/xfeatures2d/test/`)]),e("p",null,"编译源码（根据CPU核心数调整-j参数"),e("pre",null,[e("code",null,`cd build
make -j4`)]),e("p",null,"安装到系统"),e("pre",null,[e("code",null,"make install")]),e("h3",{class:"title"},"环境配置"),e("pre",null,[e("code",null,`// 配置pkg-config
echo 'export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig:$PKG_CONFIG_PATH' | sudo tee /etc/profile.d/pkgconfig.sh
source /etc/profile
// 动态链接库
echo '/usr/local/lib' | sudo tee /etc/ld.so.conf.d/opencv.conf
sudo ldconfig
// 软链接
ln -s /usr/local/include/opencv4/opencv2 /usr/local/include/opencv2
`)]),e("p",null,"配置bashrc"),e("pre",null,[e("code",null,`echo 'export OPENCV_INCLUDE_DIR=/usr/local/include' >> ~/.bashrc
echo 'export OPENCV_LIB_DIR=/usr/local/lib' >> ~/.bashrc
echo 'export OPENCV_BIN_DIR=/usr/local/bin' >> ~/.bashrc
source ~/.bashrc`)])],-1)])),_:1})}const v=c(r,[["render",i]]);export{v as default};
