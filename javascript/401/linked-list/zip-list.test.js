'use strict';

'use strict';

// const LinkedList = require('./linked-list');
const LinkedList = require('./linked-list');

const list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);
list1.append(7);
// console.log(list1);

const list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);
list2.append(8);
// console.log(list2);

describe('Should zip two linked lists in an alternating manner', () => {
  test('list1 and list2 have the same length, and should be zipped in an alternating manner', () => {
    let list = new LinkedList();
    let zipped = list.zipLists(list1, list2);
    console.log(zipped);
    // expect(list1.zipLists(list1, list2));
  });

});
