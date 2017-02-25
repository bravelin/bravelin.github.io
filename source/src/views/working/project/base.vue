<template>
    <div class="page article">
        <h2 class="title">前端基础开发环境的配置</h2>
        <div class="content article">
            <h3 class="title">工具软件的安装</h3>
            <p><strong>1. 安装node.js</strong></p>
            <p>下载地址：<a href="https://nodejs.org/en/">https://nodejs.org/en/</a>，node -v 命令可以查看当前的版本：</p>
            <pre class="inner black"><code>$ node -v
v6.9.5</code></pre>
            <p><strong>2. 安装ruby</strong></p>
            <p>下载地址：<a href="https://rubyinstaller.org/downloads/">https://rubyinstaller.org/downloads/</a>，访问很慢，可以从下面这两个地址下载：</p>
            <p><a href="http://rj.baidu.com/soft/detail/22711.html?ald">http://rj.baidu.com/soft/detail/22711.html?ald</a></p>
            <p><a href="http://download.csdn.net/download/ml065787/9640336">http://download.csdn.net/download/ml065787/9640336</a></p>
            <p>安装的第二步，请勾选"Add Ruby executables to your PATH"：</p>
            <figure>
                <img style="max-width: 503px;" src="../../../assets/work/base/2.png"/>
            </figure>
            <p>ruby -v 命令可以查看当前的版本：</p>
            <pre class="inner black"><code>$ ruby -v
ruby 2.3.1p112 (2016-04-26 revision 54768) [x64-mingw32]</code></pre>
            <p><strong>3. 安装WebStorm或者Sublime</strong></p>
            <p>WebStorm下载地址：<a href="http://www.jetbrains.com/webstorm/">http://www.jetbrains.com/webstorm</a></p>
            <p>Sublime下载地址：<a href="http://www.sublimetext.com">http://www.sublimetext.com</a></p>
            <h3 class="title">配置和修改</h3>
            <p><strong>1. 更改Ruby的gem source</strong></p>
            <p>参考文档地址：<a href="http://gems.ruby-china.org/">http://gems.ruby-china.org/</a></p>
            <p>打开ruby命令行窗口：</p>
            <figure>
                <img style="max-width: 442px;" src="../../../assets/work/base/4.png"/>
            </figure>
            <p>执行以下命令：</p>
            <pre class="inner black"><code>$ gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/</code></pre>
            <p>如果失败则将https改为http：</p>
            <pre class="inner black"><code>$ gem sources --add http://gems.ruby-china.org/ --remove https://rubygems.org/</code></pre>
            <p>gem source -l 命令查看配置是否生效：</p>
            <pre class="inner black"><code>gem sources -l
***  CURRENT SOURCES  ***
http://gems.ruby-china.org/</code></pre>
            <p>更新gem（非必须）：gem update --system</p>
            <pre class="inner black"><code>gem -v
2.5.1
gem update --system</code></pre>
            <p><strong>2. 安装sass</strong></p>
            <p>在ruby命令行窗口执行：gem install sass</p>
            <pre class="inner black"><code>gem install sass
Fetching: sass-3.4.23.gem<100%>
Successfully installed sass-3.4.23</code></pre>
            <p>命令 sass -v 可以查看sass的版本：</p>
            <pre class="inner black"><code>sass -v
Sass 3.4.23 (Selective Steve)</code></pre>
            <p><strong>3. 修改sass配置</strong></p>
            <p>当sass编译含有中文字符的sass文件时会报"Invalid GBK character"，修改如下：</p>
            <p>找到ruby的安装文件，进入以下目录（版本不一样路径也不一样，注意区分）</p>
            <p>C:\Ruby23-x64\lib\ruby\gems\2.3.0\gems\sass-3.4.23\lib\sass</p>
            <p>打开engine.rb文件，在所有的require xxx之后增加下面这一行代码：</p>
            <p>Encoding.default_external = Encoding.find('utf-8')</p>
            <p><strong>4. 淘宝npm镜像</strong></p>
            <p>参考文档地址：<a href="http://npm.taobao.org/">http://npm.taobao.org/</a></p>
            <p>打开node命令行窗口：</p>
            <figure>
                <img style="max-width: 410px;" src="../../../assets/work/base/9.png"/>
            </figure>
            <p>使用cnpm命令行工具代替npm：</p>
            <pre class="inner black"><code>$ npm install -g cnpm --registry=https://registry.npm.taobao.org</code></pre>
            <p>以后安装模块，可以使用 cnpm install [name]</p>
            <p><strong>5. 全局安装node模块</strong></p>
            <p>默认的node模块是安装在项目目录下的，但这会导致每个项目下都需要node_modules目录及很多node模块文件，可以将这些模块安装在全局。</p>
            <p>在node.js的安装目录下新建两个文件夹：node_global和node_cache：</p>
            <figure>
                <img style="max-width: 800px;" src="../../../assets/work/base/10.png"/>
            </figure>
            <p>打开cmd命令行窗口执行如下两条命令：</p>
            <pre class="inner black"><code>$ npm config set prefix 'C:\Program Files\nodejs\node_global'
$ npm config set cache 'C:\Program Files\nodejs\node_cache'</code></pre>
            <p>通过npm config get prefix 和 npm config get cache命令可以查看设置：</p>
            <pre class="inner black"><code>$ npm config get prefix
C:\Program Files\nodejs\node_global
$ npm config get cache
C:\Program Files\nodejs\node_cache</code></pre>
            <p>新增环境变量：NODE_PATH</p>
            <p>值：C:\Program Files\nodejs\node_global\node_modules</p>
            <p>在命令行窗口上执行以下命令，全局安装gulp</p>
            <pre class="inner black"><code>cnpm install gulp –g</code></pre>
            <p>通常还需要全局安装的其他模块（执行命令类似gulp）：gulp-sass、gulp-mini-css、gulp-changed、gulp-uglify、gulp-clean、gulp-concat、gulp-rename、gulp-connect、gulp-rev、gulp-notify、run-sequence、gulp-rev-collector、gulp-base64</p>
            <p><strong>6. gulp-rev和gulp-rev-collector插件的修改</strong></p>
            <p>参考文档：<a href="http://www.reqianduan.com/3015.html">http://www.reqianduan.com/3015.html</a></p>
            <p>这两个gulp插件用于js、css等资源文件的版本号（依据文件内容生成hash值），以避免浏览器缓存导致代码修改了不生效的问题。</p>
            <p>这两个插件默认是在文件名上增加hash值：</p>
            <pre class="inner black center"><code>"/css/style.css"  =>  "/css/style-1d87bebe.css"
"/js/script.js"  =>  "/js/script-28dnamka.js"</code></pre>
            <p>然而这种方式会导致积累很多文件，期望的替换方式是这样的：</p>
            <pre class="inner black center"><code>"/css/style.css"  =>  "/css/style.css?v=1d87bebe"
"/js/script.js"  =>  "/js/script.js?v=28dnamka"</code></pre>
            <p>要达此目的需要修改gulp-rev和gulp-rev-collector。（版本不同，代码行数可能不一样）</p>
            <p>① 打开文件：C:\Program Files\nodejs\node_global\node_modules\gulp-rev\index.js</p>
            <p>第144行：manifest[originalFile] = revisionedFile;</p>
            <p>改为：manifest[originalFile] = originalFile + '?v=' + file.revHash;</p>
            <p>② 打开文件：</p>
            <p>C:\Program Files\nodejs\node_global\node_modules\gulp-rev\node_modules\rev-path\index.js</p>
            <p>第10行：return filename + '-' + hash + ext;</p>
            <p>改为：return filename + ext;</p>
            <p>③ 打开文件：</p>
            <p>C:\Program Files\nodejs\node_global\node_modules\gulp-rev-collector\index.js</p>
            <p>第31行：path.basename(json[key]).replace(new RegExp( opts.revSuffix ), '' ) !== path.basename(key)</p>
            <p>改为：path.basename(json[key]).split('?')[0] !==  path.basename(key)</p>
        </div>
        <footer>2016年05月15日</footer>
        <comments></comments>
    </div>
</template>
<script>
    module.exports = {
        mounted: function () {
            this.$nextTick(function () {
                var codes = document.querySelectorAll('code')
                if (codes.length > 0) {
                    for (var k = 0; k < codes.length; k++) {
                        hljs.highlightBlock(codes[k])
                    }
                }
            })
        }
    }
</script>
