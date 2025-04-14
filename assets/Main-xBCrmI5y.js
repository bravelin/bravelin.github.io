import{_ as s,q as t,s as p,h as o,o as r,e}from"./index-DvbT3Ksl.js";const u={};function c(d,l){const n=o("MyArticle");return r(),t(n,{title:"CentOS7升级OpenSSH至9.9",date:"2025年04月03日"},{default:p(()=>l[0]||(l[0]=[e("div",{class:"_article-content"},[e("p",null,"OpenSSH9.9之前的有安全漏洞，需要升级。"),e("p",null,"查看当前版本："),e("pre",null,[e("code",null,`ssh -V
OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017`)]),e("h3",{class:"title"},"开启Telnet服务"),e("p",null,"防止ssh升级过程中出错导致无法登录服务器，则可以使用telnet协议登录。"),e("p",null,"安装相应软件：telnet-server（telnet服务端）、xinetd、telnet（telnet客户端）,执行以下命令"),e("pre",null,[e("code",null,`yum install -y telnet-server
yum install -y xinetd
yum install -y telnet`)]),e("p",null,"设置telnet服务开机自启动并开启服务："),e("pre",null,[e("code",null,`systemctl enable xinetd.service
systemctl enable telnet.socket
systemctl start telnet.socket
systemctl start xinetd.service`)]),e("p",null,"查看telnet和xinetd服务状态："),e("pre",null,[e("code",null,"systemctl status xinetd.service")]),e("p",null,"修改配置，允许root用户通过telnet方式远程登录系统："),e("p",null,"在文件/etc/securetty末尾添加以下内容："),e("pre",null,[e("code",null,`pts/0
pts/1
pts/2
pts/3`)]),e("p",null,"关闭防火墙和selinux"),e("pre",null,[e("code",null,`systemctl stop firewalld
setenforce 0`)]),e("p",null,"修改/etc/pam.d/remote文件，保障远程telnet可以使用root用户登录："),e("pre",null,[e("code",null,"#auth  required   pam_securetty.so   # 注释这一行")]),e("p",null,"修改telnet参数，保障客户端可以正常telnet到服务器："),e("pre",null,[e("code",null,`# 如果没有这个文件，新建文件写入内容。
[root@ct1 ~]# vi /etc/xinetd.d/telnet
service telnet
{
        flags = REUSE
        socket_type = stream
        wait = no
        user = root
        server = /usr/sbin/in.telnetd
        log_on_failure += USERID
        disable = no
}`)]),e("p",null,"重启xinetd："),e("pre",null,[e("code",null,"systemctl restart xinetd")]),e("p",null,"安全组规则配置开放23端口。"),e("h3",{class:"title"},"升级OpenSSH"),e("p",null,"下载openssh、openssl源码包："),e("pre",null,[e("code",null,`cd /root
mkdir openssh
cd openssh
wget https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-9.9p2.tar.gz
wget https://github.com/openssl/openssl/releases/download/OpenSSL_1_1_1w/openssl-1.1.1w.tar.gz`)]),e("p",null,"备份旧ssh相关的二进制程序文件和配置文件："),e("pre",null,[e("code",null,`mv /etc/ssh/ /home/ssh-bak
mv /usr/bin/ssh /usr/bin/ssh.bak
mv /usr/sbin/sshd /usr/sbin/sshd.bak
mv /etc/pam.d/sshd  /etc/pam.d/sshd.old`)]),e("p",null,"解压文件包："),e("pre",null,[e("code",null,`tar xf openssh-9.9p2.tar.gz -C ./
tar xf openssl-1.1.1w.tar.gz -C ./`)]),e("p",null,"先升级openssl："),e("pre",null,[e("code",null,`// 检查并备份旧openssl相关文件
mv /usr/bin/openssl  /usr/bin/openssl.old
mv /usr/lib64/openssl /usr/lib64/openssl.old
// 编译安装openssl
cd openssl-1.1.1w
./config --prefix=/usr --shared && make && make install`)]),e("p",null,"安装完毕，查看openssl版本："),e("pre",null,[e("code",null,`openssl version -a
OpenSSL 1.1.1w  11 Sep 2023`)]),e("p",null,"先安装zlib和pam-devel软件包："),e("pre",null,[e("code",null,`yum -y install zlib zlib-devel
yum -y install pam-devel.x86_64`)]),e("p",null,"编译openssh："),e("pre",null,[e("code",null,`cd /root/openssh/openssh-9.9p2
./configure --prefix=/usr --sysconfdir=/etc/ssh --with-pam --with-zlib --with-md5-passwords`)]),e("p",null,"执行安装命令："),e("pre",null,[e("code",null,"make && make install")]),e("p",null,"安装完毕，查看ssh版本："),e("pre",null,[e("code",null,`[root@back-02 openssh-9.9p2]# ssh -V
OpenSSH_9.9p2, OpenSSL 1.1.1w  11 Sep 2023`)]),e("p",null,"如果版本依然没变，尝试以下方法："),e("pre",null,[e("code",null,`cp ./contrib/redhat/sshd.init /etc/init.d/sshd
systemctl daemon-reload
systemctl restart sshd
hash -r // 清除命令缓存`)]),e("p",null,"修改配置文件：vi /etc/ssh/sshd_config，添加下面两行："),e("pre",null,[e("code",null,`X11Forwarding yes
PermitRootLogin yes`)]),e("p",null,"重启服务："),e("pre",null,[e("code",null,"systemctl restart sshd")])],-1)])),_:1})}const a=s(u,[["render",c]]);export{a as default};
