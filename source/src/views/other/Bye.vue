<template>
    <div class="page article">
        <h2 class="title">Say Goodbye</h2>
        <div class="content">
            <p>标题是借用娉妮离职时候说的话。三年的时间，成长与进步还是有的，在此与大家说再见，虽然相识的同事已经不多了。</p>
            <h3 class="title">关于公司</h3>
            <p>那时候还没有xmd，名称叫shidou，logo挺好看的~</p>
            <figure class="common"><img style="max-width:500px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/a932cbf582c094ba1400114a3e71bd98.png"></figure>
            <p>刚来的时候技术比较差，也就JavaScript的基础好一点~</p>
            <p>做shidou的官网弄了好久，被秋建天天催，感觉挺失败的~</p>
            <figure class="common"><img style="max-width:500px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/5f237f4ca33746e872de71f66a7b9548.png"></figure>
            <p>公司周边的环境挺好，天气好的时候，可以在操场跑步~</p>
            <h3 class="title">关于项目</h3>
            <p>刚开始是做93wifi App的，这是小欧手机上预览的下载页面：</p>
            <figure class="common"><img style="max-width:400px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/f56d57e2e4aa6ded519395cf7cf6ec49.jpg"/></figure>
            <p>那时候产品经理杨洋说，你怎么不早点来呢！</p>
            <p>从此有了一点小小的成就感~</p>
            <p>最初的产品名称，叫“93点技师”：</p>
            <figure class="common"><img style="max-width:400px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/8a48edd6e0550756ee6c186dfad8e74c.jpg"/></figure>
            <p>第二次改名叫“小摩豆”，有了公众号之后，改叫“9358”，现在又改回“小摩豆”了~</p>
            <p>“小摩豆”1.0时代的登录页面：</p>
            <figure class="common"><img style="max-width:400px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/3cf4b4c5a5b53d9b9acb2142770c4c64.jpg"/></figure>
            <p>还有那个时候的“个人中心”：</p>
            <figure class="common"><img style="max-width:400px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/c85ee8c87bc8224fc707d32bf11444c8.jpg"/></figure>
            <p>以及改了N多次的优惠券页面：</p>
            <figure class="common"><img style="max-width:400px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/5563a748dd8469188c81306a4b41f961.jpg"/></figure>
            <p>三年的时间里，不停地迭代功能，这是下面部分UI设计图：</p>
            <figure class="common"><img style="max-width:900px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/c1bb7299121a8d96dca3ebcc21b001ec.png"/></figure>
            <h3 class="title">关于同事</h3>
            <p>下面这个是明佳，xmd的第一代后台开发工程师：</p>
            <figure class="common"><img style="max-width:400px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/16ca227c9e0872e6ad555a1459e4e1a5.jpg"></figure>
            <p>桌子上是蓝色外壳的windows phone手机，因无法使用微信，做公众号开发的时候只好借我的手机调试，那时候公司连一台像样的测试机都没有[冷汗]~</p>
            <p>明生略显落寞的背影：</p>
            <figure class="common"><img style="max-width:400px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/f2f73c8e6597c1289d21a6aff402e5dc.jpg"></figure>
            <p>忘不了在工作中，各位同事给与的鼓励与支持：</p>
            <figure class="common"><img style="max-width:800px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/00a05376fbe82279e0588fcfcdecb455.png"/></figure>
            <figure class="common"><img style="max-width:400px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/3656599f328b4d2668c0d78ee2271da7.png" /></figure>
            <p>包括走了的和即将走的绵生、秋建、宏真、益峰、阳亚、建伟、叶总、张荣、明生、鹏辉、彭彬、娉妮、小丁、堃漪、加灿、明佳、程星......（名单比较长，可能忘了）</p>
            <figure class="common"><img style="max-width:400px" src="http://800cx2.com1.z0.glb.clouddn.com/apicloud/0a526b4424548f765c1bd0ef89d29672.png"></figure>
            <p><strong>最后，借用当年明月的话：“成功的方式只有一种，那就是以自己喜欢的方式度过一生”。愿大家此生都能成功！</strong></p>
        </div>
        <footer>2018年05月31日</footer>
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
