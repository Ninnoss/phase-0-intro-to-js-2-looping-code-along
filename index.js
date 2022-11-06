// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old! Happy birthday to me!`);
// }

const gifts = ['teddy bear', 'drone', 'dol'];

// const wrapGifts = (gifts) => {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow`);
//     }
//     return gifts;
// }
// wrapGifts(gifts);
////////////////////////////////////////////////////////////////////////////////
function writeCards(arr, event) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const msg = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
    newArray.push(msg);
    
  }
  return newArray;
}
console.log(writeCards(['Charlie', 'Samip', 'Ali'], 'birthday'));
///////////////////////////////////////////////////////////////////////////////
// using while loop:
function wrapGifts(gifts) {
    let i = 0;  // initialization is moved outside the loop body
    while (i < gifts.length) {
      console.log(`Wrapped ${gifts[i]} and added a bow`);
      i++; // incrementation is done inside the loop body
    }
    return gifts;
}
wrapGifts(gifts);
//////////////////////////////////////////////////////////////////////////////

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}
countDown(10);
