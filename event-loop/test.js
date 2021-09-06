async function async1() {
    console.log('async 1 start');
    await async2();
    console.log('async 1 end');
    await async3();
    console.log('async 3 end')
}

async function async2() {
    console.log('async2');
}

async function async3() {
    console.log('async3');
}

console.log('script start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(() => {
    console.log('promise 2');
})

console.log('script end')