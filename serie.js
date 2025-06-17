let inicio = 5
let final = 120
const serie= (inicio,final) => {
    let serie_F= []
    let consecutivo = inicio + 1
    let resultado = consecutivo
    serie_F.push(inicio,consecutivo)
    while(consecutivo<=resultado){
        resultado= inicio+consecutivo
        if (resultado>final) break
        serie_F.push(resultado)
        inicio= consecutivo
        consecutivo= resultado
        }
        return serie_F
}
console.log('funcion con array')
console.log(serie(inicio,final))

let set1 = new Set()
   const serie20= (inicio,final) => {
   let consecutivo = inicio + 1
    let resultado = consecutivo
    set1.add(inicio,consecutivo)
    while(consecutivo<=resultado){
        resultado= inicio+consecutivo
        if (resultado>final) break
        set1.add(resultado)
        inicio= consecutivo
        consecutivo= resultado
        }
        return set1
}
console.log('funcion con set')
console.log(serie20(inicio,final))

let map_s = new Map () 
   const serie3= (inicio,final) => {
    let consecutivo = inicio + 1
    let resultado = consecutivo
    let i = 0
    map_s.set(i++, inicio)
    map_s.set(i++, consecutivo)
    while(consecutivo<=resultado){
        resultado= inicio+consecutivo
        if (resultado>final) break
        map_s.set(i++,resultado )
        inicio= consecutivo
        consecutivo= resultado
    }
        return map_s
}
console.log('funcion con map')
console.log(serie3(inicio,final))