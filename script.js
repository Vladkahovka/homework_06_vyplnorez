/* Zadání
Napište funkci fillcut, která jako svůj první parametr str 
očekává řetězec a jako druhý parametr len kladné celé číslo. 
Úkolem funkce je oříznout nebo prodloužit zadaný řetězec tak, 
aby měl délku přesně len.
Pokud je vstupní řetězec delší než len, tak funkce odřízne 
jeho konec a vrátí výsledek.
Pokud je vstupní řetězec kratší než len, tak jej doplní od 
začátku znakem tečky a vrátí výsledek.
Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí 
beze změny.
Příklad použití:

document.body.innerHTML += fillcut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillcut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillcut('petr', 4) + '<br>'; // vypíše „petr“ */

function fillcut(str, len) {
     if (str.length > len) {
         return str.slice(0, len)
     } else if (str.length < len) {
        return str.padStart(len, '.')
          } else {
         return str
     }
 }

 const str = "Vladka"
 const len = 6
 const vysledek = fillcut(str, len)

 document.body.innerHTML += `
 <p> ${fillcut("Vladka", 15) } </p>
 <p> ${fillcut("Vladka", 3) } </p>
 <p> ${fillcut("Vladka", 6) } </p>
 `