import{_ as s,q as c,s as o,h as l,o as r,e}from"./index-Gk4_0vGT.js";const a={};function i(u,n){const t=l("MyArticle");return r(),c(t,{title:"基于opencv4nodejs实现滑动拼图验证码的自动检测",date:"2025年04月20日"},{default:o(()=>n[0]||(n[0]=[e("div",{class:"_article-content"},[e("p",null,"opencv4已安装的前提下，nodejs作服务端利用@u4/opencv4nodejs模块实现检测功能；如果使用opencv4nodejs模块，则只支持opencv3版本。"),e("p",null,"终端执行以下命令："),e("pre",null,[e("code",null,`echo 'export OPENCV4NODEJS_DISABLE_AUTOBUILD=1' >> ~/.bashrc
source ~/.bashrc`)]),e("p",null,"package.json中添加："),e("pre",null,[e("code",null,`"dependencies": {
...
"@u4/opencv4nodejs": "6.5.3",
...
},
"opencv4nodejs": {
        "disableAutoBuild": 1,
        "opencvIncludeDir": "/usr/local/include",
        "opencvLibDir": "/usr/local/lib",
        "opencvBinDir": "/usr/local/bin"
},`)]),e("p",null,"安装依赖："),e("pre",null,[e("code",null,"npm install")]),e("p",null,"如果一切顺利，将在/node_modules/@u4/opencv4nodejs/build/Release目录下生成opencv4nodejs.node文件。"),e("p",null,"检测代码，输入参数为滑块和原图的base64数据："),e("pre",null,[e("code",null,`async slideVerifyDetect ({ slideImgBase64, originalImgBase64 }) {
    try {
        const slideBase64 = slideImgBase64.replace(/^data:image\\/\\w+;base64,/, '');
        const originalBase64 = originalImgBase64.replace(/^data:image\\/\\w+;base64,/, '');
        
        const bgBuffer = Buffer.from(originalBase64, 'base64');
        const sliderBuffer = Buffer.from(slideBase64, 'base64');

        // 读取图像
        const bgMat = cv.imdecode(bgBuffer);
        const sliderMat = cv.imdecode(sliderBuffer);
        
        // 边缘检测预处理
        const bgGray = bgMat.cvtColor(cv.COLOR_BGR2GRAY);
        const sliderGray = sliderMat.cvtColor(cv.COLOR_BGR2GRAY);
        
        const bgEdges = bgGray.canny(50, 150);
        const sliderEdges = sliderGray.canny(50, 150);
        
        // 模板匹配
        const result = bgEdges.matchTemplate(sliderEdges, cv.TM_CCOEFF_NORMED);
        const { maxLoc, maxVal } = cv.minMaxLoc(result);
        
        // 计算滑块位置
        const position = maxLoc.x + (sliderMat.cols / 2);
        
        // 在原始图片上标记结果
        /*
        const markedImg = bgMat.copy();
        const rect = new cv.Rect(
            maxLoc.x,
            maxLoc.y,
            sliderMat.cols,
            sliderMat.rows
        );
        markedImg.drawRectangle(rect, new cv.Vec3(0, 0, 255), 2);
        console.log('位置：', maxLoc.x, ' confidence:', maxVal);
        
        const outputDir = '/mnt/g/codeimg/';
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        
        // 保存标记后的图片
        const outputPath = path.join(outputDir, \`result_\${Date.now()}.jpg\`);
        const success = await cv.imwrite(outputPath, markedImg);
        if (!success) {
            console.error('图片保存失败，路径:', outputPath);
        }
        console.log('图片已保存至:', outputPath);
        */

        return { 
            data: { position, locx: maxLoc.x, locy: maxLoc.y, confidence: maxVal }, 
            code: 200,
            message: 'success'
        };
    } catch (error) {
        console.error('滑块验证码检测失败：', error);
        return { data: 0, code: 500, message: 'error' };
    }
}`)]),e("p",null,"前端通过事件派发模拟滑块滑动："),e("pre",null,[e("code",null,`// 模拟滑动
const simulateSlideBar = (val) => { // val为通过调用slideVerifyDetect方法获取的滑块最终位置
    const slideBar = document.querySelector('.verify-move-block')
    // 触发鼠标按下事件
    const clientRect = slideBar.getBoundingClientRect()
    const startX = clientRect.left + clientRect.width / 2
    const startY = clientRect.top + clientRect.height / 2
    slideBar.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: startX, clientY: startY }))
    let currVal = 0
    const timer = setInterval(() => {
        if (currVal + 20 < val) {
            currVal += 20
            slideBar.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: startX + currVal, clientY: startY }))
        } else {
            slideBar.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: startX + val, clientY: startY }))
            clearInterval(timer)
            setTimeout(() => {
                slideBar.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: startX + val, clientY: startY }))
            }, 80)
            console.log('done', val, startX)
        }
    }, 80)
}`)])],-1)])),_:1})}const p=s(a,[["render",i]]);export{p as default};
