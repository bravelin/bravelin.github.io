<template>
    <div class="page article">
        <h2 class="title">ApiCloud平台的使用</h2>
        <div class="content">
            <p>为着构建一个blog，一直到寻找可以提供免费数据存储的方案。GitHub Pages提供了免费的代码托管与静态页面服务，如果有个平台可以提供云数据库及相应请求数据的Api，就可以实现功能更为丰富的Web应用了。ApiCloud平台（<a href="https://www.apicloud.com">https://www.apicloud.com/</a>）正好提供了这种服务。</p>
            <p>其实这个平台主要用于App的开发，而我主要是使用了它的云Database来存储数据（包括一些图片），这个只是ApiCloud平台的一小部分功能。</p>
            <p>下面是一些经验总结。</p>
            <h3 class="title">开启云服务</h3>
            <p>ApiCloud平台提供云存储，我们可以利用它免费存储一些文件。</p>
            <p>新建一个应用之后，选择左侧“云开发”下面的“云设置”，选择“七牛云存储”，另一个“又拍云存储”之前试过有问题，上传文件之后无法访问，不知道现在修复没有！</p>
            <figure class="common"><img style="max-width: 900px;" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/c0804ae9a1321d903995b11ac208b9a7.png"></figure>
            <figure class="common"><img style="max-width: 600px;" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/8f460dee7e914be9354fec6344e4b112.png"></figure>
            <p>点击左侧“云开发”下面的“Database”可以看到改应用下的数据表，ApiCloud称之为Class，其中Class名称下划线开始的是它默认的表。我们可以自定义自己的数据表，并在此处增加、修改或者删除数据。</p>
            <figure class="common"><img style="max-width: 1200px;" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/bd83b7c03dcf2507eed15b399b02de17.png"></figure>
            <h3 class="title">使用API</h3>
            <p>目前使用的是vue-resource插件作Ajax请求。首先获取所建应用的AppId和AppKey，在控制台点击“概览”可以看到：</p>
            <figure class="common"><img style="max-width: 600px;" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/45713a6792da60c6de4b69c8c3dbaad3.png"></figure>
            <p>新建或者导入sha.js，<a href="https://github.com/bravelin/bravelin.github.io/blob/master/admin/source/src/utils/sha.js">https://github.com/bravelin/bravelin.github.io/blob/master/admin/source/src/utils/sha.js</a></p>
            <p>封装的ajax请求：</p>
            <pre><code>import Vue from 'vue'
import VueResource from 'vue-resource'
import sha from './sha'
import Config from './config' // appId和appKey在config里面

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.headers.common['X-APICloud-AppId'] = Config.appId
const AppKey = Config.appId + 'UZ' + Config.appKey + 'UZ'

Vue.http.interceptors.push((request, next) => { // 设置全局的请求参数
    let requestParam
    if (request.method.toLowerCase() === 'get') {
        request.params = request.params || {}
        requestParam = request.params
        requestParam['_'] = (+new Date()) // 时间戳
    }
    let now = (+new Date())
    let appKey = sha(AppKey + now) + '.' + now // appKey的生成
    request.headers.set('X-APICloud-AppKey', appKey)
})

export default function fetch (options) {
    options.method = options.method || 'GET'
    if (options.data) {
        options.body = options.data
    }
    return new Promise((resolve, reject) => {
        Vue.http(options).then((res) => {
            res = res.body
            resolve(res)
        }, (error) => {
            reject(error)
        })
    })
}</code></pre>
            <h3 class="title">请求数据</h3>
            <p>例如，查询用户表里面的所有数据：</p>
            <pre><code>const that = this
fetch({
    url: 'https://d.apicloud.com/mcm/api/user'
}).then(res => {
    that.dataList = res || []
    loading(false)
})</code></pre>
            <p>在记录数比较多的情况下分页查询，总页数需要额外请求，以下是查询file表的page页数据，每页记录数pageSize：</p>
            <pre><code>const that = this
page = page || that.page
let searchKey = that.searchKey.trim()
let filter = {
    limit: that.pageSize,
    where: {},
    skip: (page - 1) * that.pageSize,
    order: 'createdAt DESC' // 按创建的时间倒序
}
// 求总的页数的请求filter
let totalPageFilter = {
    fields: {
        id: true
    },
    limit: 10000,
    where: {}
}
if (searchKey) {
    filter.where.name = { 'like': searchKey }
    totalPageFilter.where.name = { 'like': searchKey }
}

// 查询总页数
fetch({
    url: 'https://d.apicloud.com/mcm/api/file',
    params: { filter: JSON.stringify(totalPageFilter) }
}).then(data => {
    that.totalPage = Math.ceil(data.length / that.pageSize) // 获得总页数
})
// 查询当页数据
fetch({
    url: 'https://d.apicloud.com/mcm/api/file',
    params: { filter: JSON.stringify(filter) }
}).then(res => {
    res = res || []
    that.dataList = res
    that.page = page
    loading(false)
})</code></pre>
            <h3 class="title">删除数据</h3>
            <p>请求中method置为DELETE，并传入Class的ID，比如删除文件：</p>
            <pre><code>fetch({
    url: 'https://d.apicloud.com/mcm/api/file/{fileId}',
    method: 'DELETE',
    params: {
        fileId: that.delId
    }
}).then(() => {
    tipShow('删除成功！')
    loading(false)
    that.queryDataList()
})</code></pre>
            <h3 class="title">修改数据</h3>
            <p>修改数据使用PUT，data里面放置需要修改的字段，如修改sentences表的某条记录的status字段：</p>
            <pre><code>const that = this
loading(true)
fetch({
    url: 'https://d.apicloud.com/mcm/api/sentences/{id}',
    method: 'put',
    params: {
        id: item.id
    },
    data: {
        '$set': {
            status: ope
        }
    }
}).then(() => {
    loading(false)
    that.queryDataList()
})</code></pre>
            <h3 class="title">文件上传</h3>
            <p>需要引入<a href="http://fex.baidu.com/webuploader/">webuploader</a>，将以下几个文件放到static/webuploader下面：</p>
            <figure class="common"><img style="max-width:600px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/4f6458ca30b96f7bccc6e01c9af06c8c.png" alt=""></figure>
            <p>在index.html里面引入：</p>
            <pre><code>&lt;body&gt;
    &lt;div id="app"&gt;&lt;/div&gt;
    &lt;script type="text/javascript" src="./static/webuploader/jquery.min.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="./static/webuploader/webuploader.html5only.js"&gt;&lt;/script&gt;
&lt;/body&gt;</code></pre>
            <p>页面定义一个选择文件的按钮，如下是一个ID为file-picker的div：</p>
            <pre><code>&lt;div v-show="fileList.length == 0"&gt;&lt;div id="file-picker"&gt;选择文件&lt;/div&gt;&lt;/div&gt;</code></pre>
            <p>mounted生命周期中使用WebUploader.create初始化文件上传按钮：</p>
            <pre><code>mounted () {
    const that = this
    const AppKey = Config.appId + 'UZ' + Config.appKey + 'UZ'
    that.$nextTick(() => {
        that.wp = WebUploader.create({
            server: 'https://d.apicloud.com/mcm/api/file',
            auto: false,
            pick: '#file-picker',
            resize: false,
            fileSingleSizeLimit: 20 * 1024 * 1024, // 单文件大小限制20M
            fileSizeLimit: 50 * 1024 * 1024, // 总大小限制
            fileNumLimit: 50 // 文件总数限制
        })
        that.wp.on('fileQueued', function (file) {
            that.fileList.push({
                id: file.id,
                filename: file.name,
                size: file.size,
                progress: 0
            })
            that.wp.option('formData', {
                filename: file.name,
                type: file.type
            })
        })

        // 文件上传成功
        that.wp.on('uploadSuccess', function (file, res) {
            if (res && res.id) {
                that.uploadTip = file.name + '上传成功！'
            } else if (res && res.status == 0) {
                that.uploadTip = file.name + '上传失败！'
            } else {
                that.uploadTip = file.name + '上传失败'
            }
        })

        // 文件上传失败
        that.wp.on('uploadError', function (file, reason) {
            that.uploadTip = file.name + '上传失败'
        })

        // 上传完成，不管成功失败
        that.wp.on('uploadComplete', function (file) {
            that.wp.removeFile(file)
            that.uploadCount ++
            if (that.fileList.length == that.uploadCount) {
                setTimeout(() => {
                    that.isShowUploaderModal = false
                }, 1500)
                that.queryDataList(1)
            }
        })

        that.wp.on('uploadBeforeSend', function (block, data, headers) {
            let now = (+new Date())
            let appKey = sha(AppKey + now) + '.' + now
            headers['X-APICloud-AppKey'] = appKey
            headers['X-APICloud-AppId'] = Config.appId
        })

        // 上传中
        that.wp.on('uploadProgress', function (file, percentage) {
            let fileIndex = that.findFile(file.id)
            if (fileIndex >= 0) {
                let fileObj = that.fileList[fileIndex]
                fileObj.progress = (percentage * 100).toFixed(0)
                that.fileList.splice(fileIndex, 1, fileObj)
            }
        })
    })
}</code></pre>
        </div>
        <footer>2018年03月16日</footer>
        <Comments></Comments>
        <Catalog :catalog="catalog"></Catalog>
        <Preview :is-show.sync="showPreview" :list="previewList" :index="previewIndex"></Preview>
    </div>
</template>
<script>
    import Page from '@/views/Page'
    export default {
        extends: Page
    }
</script>
