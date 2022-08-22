// declaration 声明
var student;
// assignment 赋值
student = 'Jing';
// re-assignment
student = 'Emily';

var student1, student2, student3;

student1 = 'Jim';
student2 = 'Tom';
student3 = 'Jack';

// 可读性，可维护性，可扩展性

// hoisting
var car;
car = 'Honda Civic';

var aNum = 3.1415926;
aNum = 67;
aNum = -5;

// string - both string and character


var amIAGuy = true;
var amIAWoman = false;

// undefined and null
var age = undefined; //不存在
var gender = null; //存在但目前没值

var teacher = {};
var gender = 'gender';
teacher.age = 18;
teacher.onDuty = true;
teacher[gender] = 'male';
// teacher = {
//     teacherName: 'Jing',
//     age: 18,
//     gender: 'male',
//     expertise: 'frontend',
//     onDuty: true
// };

// console.log(teacher.age);
// console.log(teacher[gender]);

var students = [{
    studentName: 'Jing'
}, {
    studentName: 'Emily',
}, {
    studentName: 'Holly',
}];

var sum = 2 + 3;

var concat = 'hello' + ' ' + 'world';


var divide = 8 / 4;
var minus = 8 - 4;
var times = 2 * 2;

var equalNonStrict = 2 == '2'; // non-strict comparison
var equalStrict = 2 === '2'; // non-strict comparison
// !=: non-strict !==: strict

// console.log(4 + 3 + '3'); // 4 + 3 + '3' => 7 + '3' => '7' + '3' => 73
// console.log('4' + 3 + 3); // '4' + 3 + 3 => '4' + '3' + 3 => '43' + 3 => '43' + '3' => '433'
// console.log(0.1 + 0.2);

// // 整数 十进制 -> 二进制
// // 除2  商  余数    bit位
// // 10
//   10/2  5   0       0
//   5/2   2   1       1
//   2/2   1   0       2
//   1/2   0   1       3

// // 10 -> 1010
// // 1 0 1 0 -> 1 x 2^3 + 0 x 2^2 + 1 x 2^1 + 0 x 2^0 = 10

// // 小数 十进制 -> 二进制
// // 乘2      积     取整
// // 0.2
//    0.2*2   0.4     0
//    0.4*2   0.8     0
//    0.8*2   1.6     1
//    0.6*2   1.2     1
//    0.2*2     
// console.log(1 + undefined); // 不存在

var names = ['Jing', 'Emily', 'Holly', 'Jack'];
// push and pop adds or removes the last element
names.push('Tom');
names.pop();
// unshift and shift adds or removes the first element
names.unshift('Tom');
names.shift();
// length: last index + 1
names[101] = 'Tom';

var twoDimentionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var age = 18;

// if (age < 18) {
//     console.log('You are under 18!');
// } else {
//     console.log('You are over 18!');
// }
// console.log(age < 18 ? 'You are under 18!' : 'You are over 18!');

// * false
// * NaN
// * undefined 
// * null
// * “”
// * 0

// if ("0") {
//     console.log('Pass');
// } else {
//     console.log('Fail');
// }

// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j < 10; j++) {
//         console.log('hello');
//     }
// }

// i++: i = i + 1
// ++i

// the 2 operators work the same way
// but returns different values
// i++ returns the old value
// ++i returns the new value
// var i = 42;
// console.log(i++);
// console.log(i);
// i = 42;
// console.log(++i);
// console.log(i);
// requirements: not printing 8
// var i = 0;
// while(i < 10) {
//     if (i === 8) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }
// // requirements: when i is 5 terminate
// var i = 0;
// while(i < 10) {
//     if (i === 5) {
//         console.log(i);
//         break; // break out of the loop
//     }
//     console.log(i);
//     i++;
// }
var res = [];
// function declaration
function firstTen(param1, param2, param3) {
    console.log(internalRes);
    var internalRes;
    for (var i = 0; i <= param3; i++) {
        //终止条件
        if (res.length === 10) {
            return res;
        }
        
        if (i % param1 === 0 && i % param2 !== 0) {
            res.push(i);
        }
    }
}

// function expression
// var firstTenExpression = function (param1, param2, param3) {
//     const res = [];
//     for (var i = 0; i <= param3; i++) {
//         //终止条件
//         if (res.length === 10) {
//             return res;
//         }
        
//         if (i % param1 === 0 && i % param2 !== 0) {
//             res.push(i);
//         }
//     }
// };

firstTen(4, 5, 100);