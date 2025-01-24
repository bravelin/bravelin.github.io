import{_ as t,m as v,p as c,h as o,o as u,e as n,q as l}from"./index-ChNXl_Yx.js";const r={};function i(p,e){const a=o("MyArticle");return u(),v(a,{class:"readingNotes-webgl-04",title:"WebGL学习笔记之五：着色器语言",date:"2021年03月09日"},{default:c(()=>e[0]||(e[0]=[n("div",{class:"_article-content"},[n("p",null,"将讲解OpenGL ES着色器语言及其关键特性，保护变量类型、矢量、矩阵运算等。"),n("h3",{class:"title"},"基础"),n("p",null,[l("使用GLSL ES编写着色器程序时，"),n("strong",null,"程序是大小写敏感的；每一条语句都应该以一个英文的分号结束"),l("。")]),n("p",null,"支持单行注释（//）和多行注释（/* */）。"),n("p",null,"对于数值，没有小数点将会被认为是整型数，有小数点会被认为是浮点数。"),n("p",null,"变量名的首字母不能是数字；不能是关键字和保留字；不能以gl_、webgl_、_webgl_开头，这些前缀已经被保留了。"),n("pre",null,[n("code",null,`// GLSL ES关键字
attribute bool break bvec2 bvec3 bvec4
const continue discard do else false
float for highp if in inout
int invariant ivec2 ivec3 ivec4 lowp
mat2 mat3 mat4 medium out precision
return sampler2D samplerCube struct true uniform
varying vec2 vec3 vec4 void while`)]),n("pre",null,[n("code",null,`// GLSL ES保留字
asm cast class default double dvec2 dvec3
dvec4 enum extern external fixed flat fvec2
fvec3 fvec4 goto half hvec2 hvec3 hvec4
inline input interface long namespace noinline
output public sampler1D sampler1DShadow
sampler2DRect sampler2DRectShadow sampler2DShadow
sampler3D sampler3DRect short sizeof static superp
switch template this typedef union unsigned using
volatile packed`)]),n("p",null,"GLSL ES为强类型语言。"),n("h3",{class:"title"},"数据类型"),n("p",null,[l("基本类型包括三种："),n("strong",null,"float（单精度浮点整数）、int（整型数）、bool（true或者false）"),l("。类型转换使用内置函数：")]),n("pre",null,[n("code",null,`int(float) // 小数部分将删去
int(bool) // true转成1，false转成0
float(int) // 将整数转为浮点数
float(bool) // true转成1.0 false转成0.0
bool(int) // 0转为false 其他非0值转为true
bool(float) // 0.0转为false 其他非0值转为true`)]),n("p",null,"有多种不同类型的矢量和矩阵："),n("pre",null,[n("code",null,`// 矢量
vec2、vec3、vec4 具有2、3、4个浮点数的矢量
ivec2、ivec3、ivec4 具有2、3、4个整型数的矢量
bvec2、bevc3、bevc4 具有2、3、4个布尔值的矢量
// 矩阵
mat2、mt3、mt4 2x2、3x3、4x4的浮点数矩阵`)]),n("p",null,"矢量构造函数："),n("pre",null,[n("code",null,`vec3 v3 = vec3(1.0, 2.0, 3.0);
vec2 v2 = vec2(v3); // (1.0, 2.0)
vec4 v4 = vec4(1.0); // (1.0, 1.0, 1.0, 1.0)`)]),n("p",null,[l("矩阵是"),n("strong",null,"列主序"),l("的：")]),n("pre",null,[n("code",null,`mat4 m4 = mat4(1.0, 2.0, 3.0, 4.0,
5.0, 6.0, 7.0, 8.0,
9.0, 10.0, 11.0, 12.0,
13.0, 14.0, 15.0, 16.0);
mat3 m3 = mat3(1.0) // 将生成单位矩阵`)]),n("p",null,"矢量可以通过分量名访问其元素："),n("pre",null,[n("code",null,`x,y,z,w // 顶点坐标分量
r,g,b,a // 颜色分类
s,t,p,q // 纹理坐标分量`)]),n("p",null,[n("strong",null,"混合"),l("：将同一个集合的多个分量名共同置于点运算符之后，可以从矢量中同时抽取多个分量：")]),n("pre",null,[n("code",null,`vec3 v3 = vec3(1.0, 2.0, 3.0);
vec2 v2 = v3.xy; // (1.0, 2.0)
vec2 v2 = v3.xx; // (1.0, 1.0) 可以重复
vec4 v4 = vec4(1.0, 2.0, 3.0, 4.0);
v4.xw = vec2(5.0, 6.0); // v4=(5.0, 2.0, 3.0, 6.0)`)]),n("p",null,"矢量和矩阵的运算："),n("pre",null,[n("code",null,`// 矢量和浮点数
v3b = v3a + f; // v3b.x = v3a.x + f; v3b.y = v3a.y + f; v3b.z = v3a.z + f;
// 矢量和矢量
v3c = v3a + v3b; // v3c.x = v3a.x + v3b.x; v3c.y = v3a.y + v3b.y; v3c.z = v3a.z + v3b.z;
// 矩阵和浮点数
m3b = m3a * f; // 矩阵的每一项元素分别与浮点数相乘

// 矩阵乘矢量
v3b = m3a * v3a;
// v3b.x = m3a[0].x * v3a.x + m3a[1].x * v3a.y + m3a[2].x * v3a.z
// v3b.y = m3a[0].y * v3a.x + m3a[1].y * v3a.y + m3a[2].y * v3a.z
// v3b.z = m3a[0].z * v3a.x + m3a[1].z * v3a.y + m3a[2].z * v3a.z

// 矢量乘矩阵
v3b = v3a * m3a;
// v3b.x = m3a[0].x * v3a.x + m3a[0].y * v3a.y + m3a[0].z * v3a.z
// v3b.y = m3a[1].x * v3a.x + m3a[1].y * v3a.y + m3a[1].z * v3a.z
// v3b.z = m3a[2].x * v3a.x + m3a[2].y * v3a.y + m3a[2].z * v3a.z`)]),n("p",null,"结构体的定义："),n("pre",null,[n("code",null,`struct light {
    vec4 color;
    vec3 position;
}
// 构造
light l1 = light(vec4(1.0, 2.0, 3.0, 4.0), vec3(1.0, 2.0, 3.0));`)]),n("p",null,"GLSL ES只支持一维数组，不支持pop和push操作，声明时只需要在变量名后面加上[]和数组的长度即可："),n("pre",null,[n("code",null,`float a[4];
vec4 v[2];`)]),n("p",null,[n("strong",null,"取样器"),l("：GLSL ES的一种内置类型，必须通过该变量访问纹理，有sampler2D和samplerCube两种类型，只能是uniform变量。")]),n("h3",{class:"title"},"流程控制"),n("p",null,[n("strong",null,"着色器语言不支持switch语句。")]),n("p",null,"for循环有以下限制：只允许有一个循环变量，循环变量只能是int或者float类型；条件表达式必须是循环变量与整型常量的比较；在循环体之内，循环变量不可被赋值。"),n("p",null,"不支持递归函数，即在一个函数内部调用它本身。"),n("p",null,"如果函数定义在其调用之后，那么在调用之前必须先声明该函数的规范："),n("pre",null,[n("code",null,`float luma(vec4); // 先声明
void main() {
    float b = luma(colors);
}
float lumn (vec4 color) {
    return ...
}`)]),n("p",null,"参数限定字："),n("pre",null,[n("code",null,`in // 默认，向函数中传值，函数内可以修改，但不会影响传入的变量
const in // 向函数传值，函数内不能修改
out // 在函数中被赋值，并被传出
inout // 传入函数，在函数中被赋值，并被传出`)]),n("p",null,"attribute变量只能出现在顶点着色器程序中；被用来表示逐顶点的信息。其类型只能是float、vec2、vec3、vec4、mat2、mat3和mat4。"),n("p",null,"uniform变量可以用在顶点着色器和片元着色器中，是只读的，它可以是除了数组和结构体之外的任意类型。如果顶点着色器和片元着色器声明了同名的uniform变量，那么它就会被两种着色器共享。uniform变量包含了一致的数据。"),n("p",null,"varying变量作用是从顶点着色器向片元着色器传输数据，必须在两种着色器中声明同名的、同类型的varying变量，其类型只能是float、vec2、vec3、vec4、mat2、mat3和mat4。"),n("p",null,"const限定字表明该变量的值不能被改变，声明同时必须对它进行初始化。"),n("p",null,[l("精度限定字用来表示每种数据具有的精度。高精度的程序需要较大的开销，低精度的程序开销小的多。有三种精度，highp（高精度）、mediump（中精度）、lowp（低精度）。使用关键字"),n("strong",null,"precision"),l("来声明着色器的默认精度，声明于着色器程序的顶部：")]),n("pre",null,[n("code",null,`precision 精度限定字 类型名称；
precision mediump float; // 所有浮点数默认为中精度`)])],-1)])),_:1})}const m=t(r,[["render",i]]);export{m as default};
