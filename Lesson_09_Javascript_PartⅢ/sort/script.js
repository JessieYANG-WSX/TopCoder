// {
//     console.clear();
//     const list = [374, [435, ['a', 343,23], "Jessie"]]

//     const flatList = list.flat(Infinity)
//     console.log(flatList);

//     function isNumber(something) {
//         return something === +something
//     }

//     const filterList flatList.filter(el => isNumber(el))

//     console.log(filterList);

//     const setList = [...new set()]
// }

{
    console.clear();
console.clear();
const list = [374, [435, ['a', 343,23], "Jessie"]]

const mySpan = document.querySelector('span')
const mySpanList = document.querySelectorAll('span')

console.log(mySpan);
// console.log(mySpanList);
console.log(mySpanList[0]);
console.log(mySpanList[1]);

const add = document.getElementById('add')
const add2 = document.getElementById('add2')

console.log(add);
console.log(add2);

const addSelector = document.querySelector('#add')

console.log(add);
console.log(add2);
console.log(addSelector);

console.log(document.getElementsByClassName("myadd")[0]);
console.log(document.querySelectorAll(".myadd")[0]);
}

// {
//     console.clear();
//     const span = document.querySelector('span')
//     const list = []

//     addEventListener不能覆盖之前的内容，之前和之后都可以输出
//     let num = 0
//     let num2 = 100
//     span.addEventListener('click', ()=> {
//         console.log(++num);
//     })

//     onclick可以覆盖之前的输出内容
//     span.onclick = function () {
//         console.log(++num);
//         console.log(--num2);
//     }
// }

{
    
    const span = document.querySelector('span')
    const list = []

    let num = 0

    span.addEventListener('click', () => {
        console.log(++num);
        const input = document.querySelector('input').value
        console.log(input);

        const inputDom = document.querySelector('input')
        inputDom.value = ''
        list.push(+input)
        console.log(list);

        const sortList = mySort(list)
        console.log("SortList: ", sortList);

        const tbody = document.querySelector('tbody')
        tbody.innerHTML = ''
        sortList.forEach((element, index) => {
            console.log(element, index);
            const tr = document.createElement('tr')
            const th = document.createElement('th')
            th.textContent = index + 1
            // th.innerHTML 千万不要使用
            const td = document.createElement('td')

            td.textContent = element
            tr.append(th, td)
            tbody.append(tr)
        })
    })

    /**
     * @function mySort 排序
     * @list 放入一个list
     * @return输出一个排好的list
     */
    function mySort(list) {
        // 这里本质上应该做一个克隆后再进行操作
        // 目的是有一个pure function
        const flatList = list.flat(Infinity)

        function isNumber(something) {
            return something === +something
        }

        const filterList = flatList.filter(el => isNumber(el))

        const setList = [...new Set(filterList)]

        const sortList = setList.sort((a,b) => a-b)

        return sortList
    }
}