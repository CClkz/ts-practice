/*
 * @Name: 
 * @Author: smj
 * @Date: 2022-11-15 11:36:51
 * @LastEditors: smj
 * @LastEditTime: 2022-11-15 13:36:09
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

export { }