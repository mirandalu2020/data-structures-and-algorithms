# Reverse Array

To insert a value in the middle of an array without using any built-in methods

## Whiteboard Process
<!-- Embedded whiteboard image -->
![whiteboard for this code challenge](array-insert-shift.png)

## Approach & Efficiency

Time → O(n), because the time taken scales linearly with the size of the array given;
Space → O(n), because the space taken also scapes linearly with the size of the array given



## Solution
> nsertAndShift (arr ,num) {
> 	let index = Math.ceil(arr.length/2);
> 	let array1 = [];
> 	let array2=[];
>	let resultArr = [];
>	for (let i=0, i <= index, i++) {
>    array1[i] = arr[i]
> }
> for (let i=0, i < index, i++) {
>     array2[i] = arr[index+1+i]
> }

> return resultArr=[...arr1, num, …arr2]
> }

