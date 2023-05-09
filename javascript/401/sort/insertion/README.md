# Insertion Sort

## Code

```
function insert(sorted, val) {
  let i = 0;
  while (val > sorted[i]) {
    i = i+1
  }
  while (i < sorted.length){
    let temp = sorted[i];
    sorted[i] = val;
    val = temp;
    i = i+1;
  }
    sorted[i] = val;
}

function insertionSort(input){
  let sorted = [];
  sorted[0] = input[0];
  for (let i = 1; i<input.length; i++){
    insert(sorted, input[i]);
  }
  return sorted;
}

```

### Pseudo code

Insert(int[] sorted, int value)
  initialize i to 0
  WHILE value > sorted[i]
    set i to i + 1
  WHILE i < sorted.length
    set temp to sorted[i]
    set sorted[i] to value
    set value to temp
    set i to i + 1
  append value to sorted

InsertionSort(int[] input)
  LET sorted = New Empty Array
  sorted[0] = input[0]
  FOR i from 1 up to input.length
    Insert(sorted, input[i])
  return sorted

## BigO

Time O(n^2): Worst case scenario (when a given array is reverse ordered), the algorithm must traverse through the entire second array
Space O(n): the most space required is two times the given array, which is a linear relationship

## Example Step-through

starting arr: [8,4,23,42,16,15]
starting sortedArr: [];

take arr[0] and set it to be sortedArr[0;
sortedArr = [8];
i = 1

2. take arr[1] and compare it to sortedArr[0];
// since 4 < 8, place 8 in a temp variable
let temp = arr[1]
sorted[0] = 4
i = i+1
sorted[1] = 8
sortedArr = [4, 8];

3. take arr[2] and compare it to sortedArr[0]
// since 23>4, move to sortedArr[1] ( i = 1)
//since 23 > 8 and it's the end of the sortedArr (i = 2)
sortedArr[2] = 23;
sortedArr = [4, 8, 23]

4. take arr[3] and compare to sortedArr[0]
// since 42 > 4,  i +=1, move to sortedArr[1]
// since 42 > 8, i += 1, move to sortedArr[2]
// since 42 > 23, i +=1, move to sortedArr[3], sortedArr[3] = 42
sortedArr = [4, 8, 23, 42]

5. take arr[4] and compare to sortedArr[0]
// since 16 > 4, move to sortedArr[1]
//since 16 > 8, move to sortedArr[2]
// since 16 < 23, hold everything from 23 and beyond in a temp variable
let temp = arr[2];
arr[2] = 16;
i += 1;
val = temp;
// insert(val, sortedArr), where val = 23
temp = arr[3]; //temp = 42
arr[3] = 23;  i +=1;  val = temp; //val = 42
//insert(val, sortedArr), where val =42;
arr[4] = 42
sortedArr = [4, 8, 16, 23, 42]

6. take arr[5] and compare to sortedArr[0]
// since 15 > 4, i +=1, move to sortedArr[1]
// since 15 > 8, i += 1, move to sortedArr[2]
// since 15< 16, hold everything from 16 and beyond in a temp variable
let temp = arr[2]; arr[2] = 15; i += 1; val = temp; //val = 16
insert(val, sortedArr)
temp = arr[3], i+=1; val = temp //val = 23
insert(val, sortedArr)
temp = arr[3], i+=1; val = temp //val = 42
sortedArr = [4, 8, 15, 16, 23, 42]

