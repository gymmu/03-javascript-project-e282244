export function aufgabe01(args) {
  const input = args //Das was in der Eingabeleiste Steht wird gespeichert als "input"
  const result = [] // man will die verarbeiteten Elemnte speichern
  
   // Durchlauft jedes Element in der Eingabeleiste
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
  
  } //Das Ergebnis wird wieder zurückgegeben
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
  }// Das Ergebnis wird wieder zurückgegeben
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
    //Soll mit alle Sonderzeichen umhalten
  if (currentElement === '.'){
  count = count - 1
  }
// Sollte Zahlen als Wörter zählen
else if (currentElement === '.'){
  count = count - 1
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
    //sollte ein Grossbuchstabe erkennen
   
    const ascii = currentElement.charCodeAt(0)
    if (65 <= ascii && ascii <= 90) {
      return true // Falls wahr wird sofort true zurückgegeben, die Funktion wird beendet
 
    }
  }
  return false // Falls es keine Grossbuchstben gibt, wird false zurückgegeben
}
    


export function aufgabe06(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const asciiCode = currentElement.charCodeAt (0)

    // Überprüfen, ob das aktuelle Element ein Sonderzeichen ist, mithilfe des asciicodes.
    if (
        (asciiCode <= 31 || asciiCode >= 33 && asciiCode <= 64
          || asciiCode >= 91 && asciiCode <= 96 || asciiCode >= 123)
    ) {
      return true
    }
  }
  return result.join("")
}



export function aufgabe07(args) {
  const input = args
  const result = []
  
  // eine Schlaufe durchläuft alle Elemente im input
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //sollte ein u und die nächsten Elemente n und danach d erkennen (Alle sind klein geschrieben)
    if (currentElement==="u") 
      if (input[i+1]=== "n")
      if (input[i+2]=== "d") {
        return true
    }
     //sollte ein U und die nächsten Elemente n und danach d erkennen (Das erste Elemnt muss unbedingt gross geschieben sein)
    if (currentElement==="U") 
      if (input[i+1]=== "n")
      if (input[i+2]=== "d") {
        return true
    }
  }
  return false
}



//ähnlich wie Aufgabe 1
export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 // Überprüft, ob das aktuelle Element ein 'e' ist und fügt ggf. '3' dem Ergebnis hinzu
    if (currentElement === 'e') {
      result.push("3")} 
      else { 
      result.push(currentElement)

  }
}
 return result.join("") //gibt das Ergebnis zurück

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


  //überprüft, ob die Eingabe nicht genau 7 Zeichen lang ist, Ja= false
  if (input.length !== 7) return false

  //überprüft ob das erste zeichen kein # ist, Ja= false
  if (input[0] !== "#")  return false 

  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt (0)
     // mache nichts; ist eine Zahl
    if(48 <= ascii && ascii <= 57) {
    // mache nichts; ist A-F
    }else if (65 <= ascii && ascii <= 70) {
    } else {
      return false
    }

  }
  return true
}



//ähnlich wie aufgabe 3
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



export function aufgabe12(args) {
  const input = args
  const result = [] 

  // eine schleife die jedes Element in der Eingabeleiste durchläuft
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // überprüft, on das aktuelle Element dem Buchstaben e entspricht.
    if (currentElement === "e") {
      return i
    }

  }
  return -1 // fals kein e gefunden ist, gibt es -1 zurück
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



//ähnlich wie aufgabe 13
export function aufgabe14(args) {
  const input = args
  let countE = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      countE++ // Erhöht den Zähler, wenn ein 'e'Zeichen gefunden wird
      if (countE === 3) {
        return i
      }
    }
  }
  return -1
}



export function aufgabe15(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //überprüft, ob aktuelles Element ein Leerzeichen ist
   if (currentElement === ' ' ) {
    return result.join("")
    }

   result.push(currentElement)
    
  }
  return result.join("")
}



export function aufgabe16(args) {
  const input = args
  const result = []
 
  for (let i= 0; i < input.length; i++) {
    const currentElement = input [i];

    //überprüft, ob das aktuelle zeichen ein Dollarzeichen ist $
    if (currentElement === '$'){
      break; //beendet die schelife sofort, wenn es auch ein $ stösst
    }
    result.push(currentElement);
  }
  return result.join('') //gibt die die gesammelten Buchstaben zurück
}



export function aufgabe17(args) {
  const input = args;
  const result = input.split(',')
 
  // Schleifen des Bubblesorts
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
       //vergleicht aufeinanderdolfende Elemente in der Eingabeleiste und tauscht sie, fals die Reihenfolge nicht stimmt 
        [result[j], result[j + 1]] = [result[j + 1], result[j]] //vertauscht die Position der Elemente
      }
    }
  }
 
  return result.join(',')
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
  const input = args //Alle Zeichen sollen verdoppelt werden
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input [i]
    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}



export function aufgabe20 (args) {
  const input = args
  const result = []
 
 
  for(let i =0; i < input.length; i++) {
    const currentElement = input[i]
 
    if (currentElement === ".") {
      if (input[i+1] === " ")  {
        return true
      }
 
    }
  
  }
  return false
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



//ähnlich wie Aufgbe 6
export function aufgabe27(args) {
  const input = args
  if (input.length === 0) return false
 

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt (0)
    if(48 <= ascii && ascii <= 57) {
      // mache nichts; ist eine Zahl
    } else {
      return false
    }

  }
  return true
}



export function aufgabe28(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

  }
  return result.join("")
}



export function bubbleSort(args) {
  const text = args 
  const list = text.split("") // Mit deisem Code wandlet man den Text um, somit wird das Element vertauscht

  for (let i = 0; i < list.length - 1; i++) { //Schleife drchläuft die Eingabeleiste
    const currentElement = list[i] //Das Aktuelle Element in der Eingabeleiste
    const nextElement = list[i + 1] //Das nächste Element in der Eingabeleiste
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      //Da die Reihenfolge nicht richtig ist, müssen Elemetne vertauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i] //vertauschen der ELemente in der Eingabeleiste
      list[i] = tmp
      i = -1 //es fängt von vorne an
    }
  }
  const result = list.join("") //die sortierte Eingabeleiste wird wieder zu einem Text zusammengefügt
  console.log(result) 
 
  return result //rückgabe des sortierten texts
}

