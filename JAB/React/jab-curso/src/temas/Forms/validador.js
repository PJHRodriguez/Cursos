const prefijos=[33,52]
const validador = (valor)=>{
    const inicio=Number(valor.substring(0,2));
    const evaluar= prefijos.indexOf(inicio)
    return evaluar >=0 && valor.length>=9 && valor.length<=12
}

export {validador}