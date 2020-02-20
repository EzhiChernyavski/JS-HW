let a = 8,
    b = 3,
    x = (16 - a +2 * b) / 2;

console.log(x);

let x1 = (15 * b - a) / (6 - b);
console.log(x1);

let x2 = 23780/(1 + 2 + a + b);
console.log(x2);
    
/**1. a + 2x - 2b = 16
 * 2x = 16 - a +2b;
 * x = (16 - a +2b)/2
 */

/**2. b(x + 15) = a + 6x
  * bx + 15b = a + 6x
  * 15b - a = 6x - bx
  * (15b - a)/(6-b) = x
  */

/**3. x + 2x + ax + bx = 23780
 *  x (1 + 2 + a + b) = 23780
 *  x = 23780/(1 + 2 + a + b)
 */
