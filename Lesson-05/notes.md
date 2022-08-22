### 1. JS主要控制content behavior，把内容变得更dynamic。  
Interaction with user, User behaviour tracking, ***Post and get data***（与后端进行交互）

### 2. JavaScript is a dynamic, weakly typed programming language. + script（脚本类语言） 

### 3. 强类和弱类语言：  
A. Java：强类  
```Java
Java
public double sum(double num1, double num2) {
    return num1 + num2
}
```
>说明：
>- return是什么类型，一定要做一个严格的标注。
>- 传进来的参数是什么类型也要做一个严格的标注。

B. Javascript语言
```js
js
function sum(a, b) {
    return a + b;
}  
```
>说明：
>- 并没有定义一个return值。
>- 参数上并没有加任何的限制。

### 4. 脚本语言与非脚本语言的区别：***（面试题）***  
- JS - script language脚本语言（解释语言）  
- ***解释语言***：有一个运行环境，如chrome，可以理解JS，可以通过某一种形式把JS转换成另一种chrome可以理解的东西来运行。  
- Java - compile language编译语言    
- ***compilation***：把任何一个编译语言转换成计算机能读懂的语言的过程就叫做编译。
- 对于编译语言来讲，在运行之前有一个编译的过程，这个编译的过程可以覆盖到我们计算机所有的代码中。也就是当你把代码写好之后，在运行的时候，系统或编译器会扫描这个代码将要触碰到的所有内容，把这个内容先进行一个编译的过程。如果在编译中碰到任何的错误，会报错。
- 解释语言不是，解释语言没有编译这样一个步骤，其实就是把JS直接丢到chrome浏览器上，运行一步解释一步。
>面试题：JS（弱类语言）和Java（强类语言）相比，优势在哪里？
- 直接优势：写起来非常快。比较轻量、简单、开发起来比较快。
- （脚本角度）解释语言和编译语言的优劣对比：  
答：无编译，执行快。（不在点上）  
对于终端、客户端没有苛刻的配置需求。JS在浏览器中就可以运行。写完之后可以直接部署，可以直接用。对于客户端没有任何的要求。

### 5. JavaScript is one of the three core technologies of web development
- Client-side: Browser
- Server-side: Node.js  
（node技术研发后，js既可以写前端，也可以写后端，但是node写后端相比其他语言，并不是很有优势，可以上网查看）

### 6. JS简单历史

### 7. ES5和ES6
- 后者比前者有质的飞跃
- ES6可以理解为主版本的更新
- 这节课主要学习ES5

### 8. chrome点击inspect，找到console
- 可以报错，简单的代码测试
```Javascript
js
console.log('hello world')
```
![JS-helloWorld](/img/JS-helloWorld.png)

### 9. 变量 Variable
- 储存数据的容器
- 声明一个变量，使用关键词var
```js
js
// declaration 声明
var name;
```
- 赋值
```js
js
// assignment 赋值
name = 'Jessie';
```

### 10. 安装nodejs
Ubuntu安装：  
sudo apt-get install nodejs
sudo apt-get install npm  
再在vscode里安装插件code runner