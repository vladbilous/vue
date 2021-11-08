// const someVar = 'mayKey';

const app = new Vue({
    el: '#app',
    data: {
        baseClass: 'base-class-',
        myDataAttr: 'bla-bla',
        vIf: true,
        vElse: false,
        vShow: true,
        frameworks: [
            'Vue',
            'React',
            'Angular'
        ],
        data: '',
        num1: 2,
        num2: 4,
        innerHtml: '<b>hello i\`m iiner </b>',
        someVar: 'id',
        attrs: {
            id: 'test',
            class: "base-class-1",
            'data-test': 'bla-bla',

        },
        testModel: '',
        testCheckbox: [
            'ch1'
        ]
    }

})
















// // императивний метод
//
// const arrNum = [2, 5, 6]
//
// const arrNuminImp = (arr, inc = 1) => {
//     let output = [];
//
//     for(let i = 0; i < arr.length; i++) {
//         output.push(arr[i] + inc);
//     }
//
//     return output;
// }
//
// console.log(arrNuminImp(arrNum))
//
//
// // декларативний метод
//
// const arrNuminDec = (arr, inc = 1) => arr.map(el => el+ inc);
//
// console.log(arrNuminDec(arrNum))

