# Lecture 01 HTML & CSS Part 1

## 目录

### 1. 如何打开一个文件夹：(新增)
- terminal zsh下，直接把文件夹拉入到terminal里，回车，再输入code .就可以进行编辑了。 

### 2. Layers
- 这个是看网页一共有多少层

### 3. viewport

### 4. `<br>`
- break 换行

### 5. `<section></section>`和 `<article></article>`
- 这两个模块下的h1和h2大小一样。
- h1是个非常不稳定的元素，不能指望它自己的大小来确定。
- 把`<article></article>`放在 `<section></section>`里面，h1居然小于h2.
- 写的时候h1只能有一个，而且只能写在最外层。

### 6. 段落当中的斜体，以前用`<i></i>`，现在都用`<em></em>`
粗体用`<strong></strong>`，可以复合使用，一一对应就好。

### 7. HTML中书写技巧：
- `&lt;` -> <
- `&gt;` -> >
- `&copy;`/`&COPY;` -> ©
- `&copysr;` -> ℗
- `&nbsp;` -> 两个单词连接在一起显示，换行不分开。

01：01：21

### 8. `<a></a>`是一个很神奇的东西
- 它可以跳转到另外一个界面，在href后面写出来。
- 它也可以跳转到当前页面，可以用“#”表示当前页面，而且是当前页面的最上面。**（哈希算法，以后高级班会学）**

### 9. 澳洲canvas面试 
- 你的div为什么要包裹这个nav，目的是什么。
- 越好的公司，对于原生代码要求越严格。
- 简历里有link，给别人看你的简历网站，代码人家也是要看的。

### 10. CSS中的.mySection p{}设置了section中的内容：
- 最大宽度是800px；
- text-align意思是让两边的文字对齐。

01:29:33

### 11. <8.>的延续
- `<a></a>`如何本页跳转？
    - 在body -> section -> article -> main -> h2里加入：  
    section-html/section-css/section-js，    
    然后回到nav里，设置a，a后面加上id="#section-XXX"跳转到HTML、CSS、JS。
    - **NB：a后面的id一定不要忘记加#，加#，加#**

### 12. *****图片设置，出现问题，要问老师**
- 图片设置出现了问题，要问老师，img长方形，而且头像在右侧，如何设置头像成为一个在长方形右侧的圆形？
- 两点：取长方形右侧；圆形

### 13. 图片转ico
- https://www.freeconvert.com/ico-converter

### 14. 给网页title加一个图标
- 在head里，title上，加一个link-favicon，把图标添加进去即可，刷新页面，就会在页面title处出现一个头像。

### 15. 相对路径和绝对路径
- `./`（本层目录）和`/`（根目录）


### 16. 网站结构：
- header
- main
    - aside
- footer

### 17. Download Photo的时候，怎么样能显示出老师的下载界面再下载，而不是直接下载？

### 18. 选择器selection
- 选择的时候会发生什么效果

### 19. Video      
- `<video controls muted autoplay loop src="/video/video.mp4"></video>`
    - controls 
    - muted 
    - autoplay 
    - loop

