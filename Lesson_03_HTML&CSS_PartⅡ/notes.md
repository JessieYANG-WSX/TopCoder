### 1.margin有多个的时候，重叠的情况下，听最长的那一个

### 2. 盒子的方向问题：
- x轴从上到下，和数学里的x轴方向相反。
- y轴是从左到右。
- z-index是有一个z轴，从上到下。

### 3.文档流方向
![文档流](/img/%E6%96%87%E6%A1%A3%E6%B5%81%E7%9A%84%E6%96%B9%E5%90%91.png)

> - 如果是span，就是从左到右挨着。  
> - 如果是div，就是从上到小。

### 4. relative
![relative](/img/relative.png)
> - 相对于它原来的位置而言的。  
> - 可以给absolute做定位。

### 5. *代表HTML所有的内容都选。

### 6. 两个inline-block之间有一个缝隙，这个缝隙现在能解决的办法只有：***设置margin为负值***。