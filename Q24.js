const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((total, curr) => {
    return total + curr;
}, 0);
console.log(sum); 


const filter=arr.filter((num) => {
    return num % 2 === 0;
});
console.log(filter);

const map=arr.map((num) => {
    return num * 2;
});
console.log(map);   
