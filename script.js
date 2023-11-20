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
  let count = 0
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Soll nur ein 'e' enthalten
if (currentElement === 'e'){
  count = count + 1
}
 
// Soll grosses 'E' zählen
else if (currentElement === 'E'){
  count = count + 1
}
  }
  return count
}



export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //sollte alle leerzeichen zählen
    if (currentElement === ' '){
      count = count + 1
    }
  }
  return count

}

export function aufgabe05(args) {
  const input = args
  const result = []
  let capitalLetters = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //sollte ein Grossbuchstabe erkennen¨
    if (currentElement===".") {}
    else if (currentElement===" ") {}
    //ist ein element gleich, so rechnet es + 1.
    else if(currentElement === currentElement.toUpperCase() )
    {capitalLetters++}

   }
   if (capitalLetters>0) {
    return true
    
   }
   else {
    return false
   }
}





export function aufgabe06(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe07(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}









export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === 'e') {
      result.push("3")} 
      else { 
      result.push(currentElement)

  }

 

 }

 return result.join("")



}

export function aufgabe09(args) {
  const input = args
  const result = []
  let len = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //testet ob ein Eingabe genau 6 Zeichen beinhaltet.
    len = len + 1
  

  }
  if (len === 6) {
    return true }
    else {return false}

  }





export function aufgabe10(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe11(args) {
  const input = args
  //gibt den asciiwert an oder einzelne buschstaben
  let ascii = null

  if (input.length > 1 ) { //funktionswächter
    return null
  }
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    ascii = currentElement.charCodeAt (0)
    return ascii
  }
  return null
}

export function aufgabe14(args) {
  const input = args
  let countE = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      countE++
      if (countE === 3) {
        return i
      }
    }
  }
  return -1
}

export function aufgabe12(args) {
  const input = args
  const result = []
  

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e')
       return i
       
  }
  return -1
}

export function aufgabe13(args) {
  const input = args
  const result = []

  let positionOfLastE= -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === 'e') {
      positionOfLastE= i
    }  
    
      
  }
  return positionOfLastE
}


export function aufgabe15(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

   if (currentElement === ' ' ){
    return result.join("")
    }

   if (currentElement ==='_'){
    return result.join("")
   }
  
    
  }
  return result.join("")
}

export function aufgabe16(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe17(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe18(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe19(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe20(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe21(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe22(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe23(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe24(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe25(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe26(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe27(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

export function aufgabe28(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}

