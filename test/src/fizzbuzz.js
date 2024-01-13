/* Escribir una funcion que al pasarle un numero:
-Muestre "fizz" si es multiplo de 3.
-Muestre "buzz" si es multiplo de 5.
-Muestre "fizzbuzz" si es multiplo de 3 y 5.
-Muestre el numero si no es multiplo de ninguno de los anteriores.
*/

export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('Parameter provided not number')
//   if (number % 15 === 0) return 'fizzbuzz'
//   if (number % 3 === 0) return 'fizz'
//   if (number % 5 === 0) return 'buzz'
//   return number
// REFACTORIZANDO
  const multiplies = {3: 'fizz', 5: 'buzz'}
  let output = ''

  Object.entries(multiplies).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word
  })
  return output
}
