{   // debug 使用
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
// 这里有考题，叫做变量提升，hoisting。

// 澳洲面试：
// 1.电话，表现正常就可以。
// 2.实战题。
// 3.线上或线下。把话题拉回到问题上，不要扯太远。

// JS大部分情况下都不需要加分号。return后面加东西时要在一行内，不在一行内容易返回空值。
// in