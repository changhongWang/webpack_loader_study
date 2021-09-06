console.log('start');
setTimeout(() => {
    console.log('children 2');
    Promise.resolve().then(() => {
        console.log('children 3');
    })
}, 0);

new Promise(function (resolve, reject) {
    console.log('children 4');
    setTimeout(() => {
        console.log('children 5');
        resolve('children 6');
    }, 0);
}).then((res) => {
    console.log('children 7');
    setTimeout(() => {
        console.log(res);
    }, 0)
})