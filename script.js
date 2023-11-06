export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Wenn das aktuelle Zeichen 'e' ist, hängt an  die Liste an
    if (currentElement === 'e') {
      result.push("")
      //Wenn das aktuelle Zeichen ein 'E' ist, hänge nichts an die Liste an
    } else if (currentElement === 'E') {
      result.push("")
    } else { //Das aktuelle zeichen ist weder ein'e' noch ein 'E', hängt also das aktuelle Zeichen an
      result.push(currentElement)
    }
  
  }
  return result.join("")

}




export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Wandle das aktulle Element in einen Grossbuchstaben um
    const capitalizedElement = currentElement.toUpperCase()

    //Hänge den Grossbuchstaben an das Resultat an...
    result.push(capitalizedElement)
}
return result.join("")

}



export function aufgabe03(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

   

  }
  return result.join("")

}
