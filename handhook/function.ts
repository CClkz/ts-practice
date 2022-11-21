/*
 * @Name: 
 * @Author: smj
 * @Date: 2022-11-15 11:36:51
 * @LastEditors: smj
 * @LastEditTime: 2022-11-17 00:40:32
 * @FilePath: \ts-practice\handhook\function.ts
 */

function buildName(firstName: string = "Firstname", lastName?: string) {
  if (lastName)
    return firstName + " " + lastName;
  else
    return firstName;
}

let result1 = buildName("Bob");  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");  // ah, just right

let suits = ["hearts", "spades", "clubs", "diamonds"];

// 重载
function pickCard(x: { suit: string; card: number; }[]): number
function pickCard(x: number): { suit: string; card: number; }
function pickCard(x): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

pickCard([{ suit: "", card: 1 }])
pickCard(1)
pickCard("str")

export { }