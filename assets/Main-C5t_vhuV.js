import{_ as r,q as s,s as o,h as t,o as c,e,x as a}from"./index-DvbT3Ksl.js";const i={};function u(p,n){const l=t("MyArticle");return c(),s(l,{title:"CentOS7升级Node.jsV20.11.0",date:"2025年02月18日"},{default:o(()=>n[0]||(n[0]=[e("div",{class:"_article-content"},[e("p",null,"CentOS7安装nodejs v18以上版本如果出现以下错误，则需要升级gcc、glibc："),e("pre",null,[e("code",null,"node: /lib64/libm.so.6: version `GLIBC_2.27' not found (required by node)\nnode: /lib64/libc.so.6: version `GLIBC_2.28' not found (required by node)\nnode: /lib64/libc.so.6: version `GLIBC_2.25' not found (required by node)")]),e("p",null,"使用strings命令查看当前glibc支持的版本："),e("pre",null,[e("code",null,`strings /lib64/libc.so.6 | grep -E "^GLIBC_" | sort -V -r | uniq
GLIBC_PRIVATE
GLIBC_2.17
GLIBC_2.16
GLIBC_2.15
...
...
GLIBC_2.2.5`)]),e("p",null,"先更新："),e("pre",null,[e("code",null,"yum update")]),e("p",null,"如果出现以下报错，则需要先解决，否则跳过"),e("pre",null,[e("code",null,`Loaded plugins: fastestmirror
Determining fastest mirrors
Could not retrieve mirrorlist http://mirrorlist.centos.org?arch=x86_64&release=7&repo=sclo-rh error was
14: curl#6 - "Could not resolve host: mirrorlist.centos.org; Unknown error"
...
...
Cannot find a valid baseurl for repo: centos-sclo-rh/x86_64`)]),e("h3",{class:"title"},"解决yum更新问题"),e("p",null,'以上错误表明系统无法为名为 "centos-sclo-rh" 的软件集合仓库找到有效的基础URL，原因是Centos7版本已经于2024/6/30结束了官方支持。解决办法：'),e("p",null,"① 备份文件"),e("pre",null,[e("code",null,`cd /etc/yum.repos.d/
mv CentOS-SCLo-scl.repo CentOS-SCLo-scl.repo.bak
mv CentOS-SCLo-scl-rh.repo CentOS-SCLo-scl-rh.repo.bak
`)]),e("p",null,"② 更新CentOS-SCLo-rh.repo文件"),e("pre",null,[e("code",null,"vi CentOS-SCLo-rh.repo")]),e("p",null,"内容如下："),e("pre",null,[e("code",null,`[centos-sclo-rh]
name=CentOS-7 - SCLo rh
baseurl=https://mirrors.aliyun.com/centos/7/sclo/x86_64/rh/
gpgcheck=1
enabled=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-SIG-SCLo`)]),e("p",null,"③ 更新CentOS-Base.repo文件："),e("pre",null,[e("code",null,"vi CentOS-Base.repo")]),e("p",null,"替换为以下内容："),e("pre",null,[e("code",null,`[base]
name=CentOS-$releasever - Base - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos/$releasever/os/$basearch/
        http://mirrors.aliyuncs.com/centos/$releasever/os/$basearch/
        http://mirrors.cloud.aliyuncs.com/centos/$releasever/os/$basearch/
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-7

#released updates
[updates]
name=CentOS-$releasever - Updates - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos/$releasever/updates/$basearch/
        http://mirrors.aliyuncs.com/centos/$releasever/updates/$basearch/
        http://mirrors.cloud.aliyuncs.com/centos/$releasever/updates/$basearch/
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-7

#additional packages that may be useful
[extras]
name=CentOS-$releasever - Extras - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos/$releasever/extras/$basearch/
        http://mirrors.aliyuncs.com/centos/$releasever/extras/$basearch/
        http://mirrors.cloud.aliyuncs.com/centos/$releasever/extras/$basearch/
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-7

#additional packages that extend functionality of existing packages
[centosplus]
name=CentOS-$releasever - Plus - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos/$releasever/centosplus/$basearch/
        http://mirrors.aliyuncs.com/centos/$releasever/centosplus/$basearch/
        http://mirrors.cloud.aliyuncs.com/centos/$releasever/centosplus/$basearch/
gpgcheck=1
enabled=0
gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-7

#contrib - packages by Centos Users
[contrib]
name=CentOS-$releasever - Contrib - mirrors.aliyun.com
failovermethod=priority
baseurl=http://mirrors.aliyun.com/centos/$releasever/contrib/$basearch/
        http://mirrors.aliyuncs.com/centos/$releasever/contrib/$basearch/
        http://mirrors.cloud.aliyuncs.com/centos/$releasever/contrib/$basearch/
gpgcheck=1
enabled=0
gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-7`)]),e("p",null,"④ 更新RPM-GPG-KEY-CentOS-SIG-SCLo："),e("pre",null,[e("code",null,`mv /etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-SIG-SCLo  /etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-SIG-SCLo.bak
vi /etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-SIG-SCLo`)]),e("p",null,"粘贴以下内容："),e("pre",null,[e("code",null,`-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v2.0.22 (GNU/Linux)

mQENBFYM/AoBCADR9Q5cb+H5ndx+QkzNBQ88wcD+g112yvnHNlSiBMOnNEGHuKPJ
tujZ+eWXP3K6ucJckT91WxfQ2fxPr9jQ0xpZytcHcZdTfn3vKL9+OwR0npp+qmcz
rK8/EzVz/SWSgBQ5xT/HUvaeoVAbzBHSng0r2njnBAqABKAoTxgyRGKSCWduKD32
7PF2ZpqeDFFhd99Ykt6ar8SlV8ToqH6F7An0ILeejINVbHUxd6+wsbpcOwQ4mGAa
/CPXeqqLGj62ASBv36xQr34hlN/9zQMViaKkacl8zkuvwhuHf4b4VlGVCe6VILpQ
8ytKMV/lcg7YpMfRq4KVWBjCwkvk6zg6KxaHABEBAAG0aENlbnRPUyBTb2Z0d2Fy
ZUNvbGxlY3Rpb25zIFNJRyAoaHR0cHM6Ly93aWtpLmNlbnRvcy5vcmcvU3BlY2lh
bEludGVyZXN0R3JvdXAvU0NMbykgPHNlY3VyaXR5QGNlbnRvcy5vcmc+iQE5BBMB
CgAjAhsDBwsJCAcDAgEGFQgCCQoLBBYCAwECHgECF4AFAmIgbg0ACgkQTrhOcfLu
nVUzkAgAgJSl++PWo69OGI8eUn53whhfJ6ZyKCOyI9+Flghtfwq1mdcP4dIoAubw
nlQcvEsE4Erob2I1S+n/dXYh9y2+Si3HdXRreKzC1rCSG5ebYRrEqeMoJhBoDFSd
xydtxi03l+Dh2iWtLtXpAM85qHvgIrPfdUnLRVbDBT52Ph5igZl8ux2ooJ94CPm4
yTG/0aPIebNQsLP8LEpa2wad2WJfIeFgjEHranWIzhzapGgwyf2Iu9Sz3L8ljiz2
2HixHpI2es3IqgLyRsTBo2/EdbvMJWlFwiESe1UQIW6ObKNnVabIHUAxZgOlj59o
JhPOzTBG+Ma2fLs+ZFBV88cpKdctFQ==
=+Gr2
-----END PGP PUBLIC KEY BLOCK-----`)]),e("p",null,"⑤ 再执行以下命令即可："),e("pre",null,[e("code",null,`yum-config-manager --enable centos-sclo-rh
yum-config-manager --enable centos-sclo-sclo
yum clean all
yum makecache`)]),e("h3",{class:"title"},"升级make版本至4.2"),e("p",null,"查看当前make版本："),e("pre",null,[e("code",null,`make -v
GNU Make 3.82`)]),e("p",null,"执行以下命令："),e("pre",null,[e("code",null,`cd /home
wget http://ftp.gnu.org/gnu/make/make-4.2.tar.gz
tar -xzvf make-4.2.tar.gz
cd make-4.2
sudo ./configure
sudo make
sudo make install
sudo rm -rf /usr/bin/make
sudo cp ./make /usr/bin/
make -v`)]),e("p",null,"成功的话，将输出以下内容："),e("pre",null,[e("code",null,"GNU Make 4.2")]),e("h3",{class:"title"},"升级gcc版本至8.3.1"),e("p",null,"查看当前gcc版本："),e("pre",null,[e("code",null,`gcc -v
...gcc version 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC)`)]),e("p",null,"执行以下命令："),e("pre",null,[e("code",null,`yum -y install centos-release-scl
yum -y install devtoolset-8-gcc devtoolset-8-gcc-c++ devtoolset-8-binutils
scl enable devtoolset-8 bash
source /opt/rh/devtoolset-8/enable
echo "source /opt/rh/devtoolset-8/enable" >>/etc/profile
gcc -v`)]),e("p",null,"输出以下内容表明升级成功："),e("pre",null,[e("code",null,`...
gcc version 8.3.1 20190311 (Red Hat 8.3.1-3) (GCC)`)]),e("h3",{class:"title"},"升级GLIBC_2.28"),e("p",null,"执行以下命令："),e("pre",null,[e("code",null,`cd /home
yum -y install bison
wget  https://mirror.bjtu.edu.cn/gnu/libc/glibc-2.28.tar.xz
tar -xf glibc-2.28.tar.xz -C /usr/local/
cd /usr/local/glibc-2.28/`)]),e("p",null,"修改test-installation.pl文件："),e("pre",null,[e("code",null,`cd scripts
vi test-installation.pl`)]),e("p",null,[a("在文件的128行新增："),e("em",null,'$name ne "nss_test2"')]),e("pre",null,[e("code",null,`// 源码
    if ($name ne "nss_ldap" && $name ne "db1"
    && $name ne "thread_db"
    && $name ne "nss_test1" && $name ne "libgcc_s") {
    $link_libs .= " -l$name";
    $versions{$name} = $version;
}
// 修改为：
    if ($name ne "nss_ldap" && $name ne "db1"
        && $name ne "thread_db"
        && $name ne "nss_test1" && $name ne "nss_test2" && $name ne "libgcc_s") {
      $link_libs .= " -l$name";
      $versions{$name} = $version;
}`)]),e("p",null,"保存，再执行以下命令："),e("pre",null,[e("code",null,`cd /usr/local/glibc-2.28/
mkdir build
cd build/
../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/bin --enable-obsolete-nsl
make -j 10
make localedata/install-locales -j 10
make install -j 10`)]),e("p",null,"将gcc最新版本的动态库替换系统中老版本的动态库："),e("pre",null,[e("code",null,`yum whatprovides libstdc++.so.6
yum update -y libstdc++.x86_64
cd /home
wget http://www.vuln.cn/wp-content/uploads/2019/08/libstdc.so_.6.0.26.zip
unzip libstdc.so_.6.0.26.zip
cp libstdc++.so.6.0.26 /lib64/
cd /lib64
cp libstdc++.so.6 libstdc++.so.6.bak
rm -f libstdc++.so.6
ln -s libstdc++.so.6.0.26 libstdc++.so.6`)]),e("p",null,"查看node版本："),e("pre",null,[e("code",null,`node -v
v22.11.0`)])],-1)])),_:1})}const m=r(i,[["render",u]]);export{m as default};
