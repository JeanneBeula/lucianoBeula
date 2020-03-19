let array=[7,1,3,4,1,7];
let arr=[];
let result=[];

for (let index = 0; index < array.length; index++) {

    for (let index_j = array.length; index_j < index; index_j++) {
        const element = array[index];
        console.log(element)
    }
    
}
