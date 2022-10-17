{   // ! debug 使用
    // const声明一个常量
    const ACTIVE = true; //false
    if (ACTIVE) {
        console.clear();
        console.log('true');
    } else {
        console.log('false');
    }
    // ACTIVE = false
}

{   
    // let声明一个变量
    let myName = "Jessie"

    console.log(myName);
    myName = "Xin"

    console.log(myName);

    var age = 18
    console.log(age);

    age = 30
    console.log(age);

}

// console.log(myName);
// console.log(age);
// 这里有考题，叫做变量提升。

// 澳洲面试：
// 1.电话，表现正常就可以。
// 2.实战题。
// 3.线上或线下。把话题拉回到问题上，不要扯太远。

{
// JS大部分情况下都不需要加分号。return后面加东西时要在一行内，不在一行内容易返回空值。
/**
 * @a sjkakfdaasd
 * @b skjaflsdhfk
 * @return sjdkflasdf
 * TODO:sjkdsadhfsadsafh
 * FIXME:sdjfakldsssssss
 * 
 */

function anme(a, b) {
    sjdkladfasdfas
}
}

{
    let a = 1
    let b = 'Jessie'
    let c = true  // true or false
    let d = undefined // 被动的，根本没被定义
    let e = null // 主动给它变成一个空的
    let f = NaN  // not a number

    let aa = 1
    // 严格等，值相等，空间等
    // console.log(a === c);
    if(a === aa){
        console.log("true"); 
    } else {
        console.log("false"); //如果 a === c，就是false
    }
    // 不严格相等。很少用两个等，两个等有时候判断不出来
    // console.log(a == c);
    if(a == aa){
        //如果 a == c，还是true。true在很多时候能理解称为1.
        console.log("true"); 
    } else {
        console.log("false");
    }

    let g = 0;
    console.log(g === false);
    console.log(g == false);

    if (2) {
        console.log('true');
    } else {
        console.log('false');
    }
    // 结果是true。不是0，就强行转化，按true来算。

    console.log(NaN == NaN);
    // 结果是false。不是一个number，和另外一个不是number，两者未必相等。
}

{
    // 反斜杠\加"或'，可以在单引号里打出单引号，在双引号里打出双引号。
    let a = "Jessie "
    console.log(a);
    let b = 'Xin "skdlsajfdsfa" \'sakhfsldh\''
    console.log(b);

    // 反引号，可以换行
    // 还有字符串模板的能力
    let c = `Jessie YANG
    sdhfaskhfk
    skjjjjjksla
    lsdjklasjfdk
    `
    console.log(c);

    // ${a}可以把之前的引用过来。
    let c2 = `${a} YANG 
    sdhfaskhfk
    `
    console.log(c2);

    let p = 1
    let q = 2
    console.log('p+q=' + (p + q));
    console.log(`p+q = ${p+q}`);

    // 以上是单引号、双引号、三引号的意义
}

01：22：51