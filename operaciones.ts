function sumar(a: number, b: number): number {
    return a + b;
}
function dividir(a: number, b: number): number {
    return b != 0 ? a / b : 0;
}
console.log('Operación iniciada');
function opAdd(a: number, b: number, c: number): number {
    return a + b + c;
}
function opLess(a: number, b: number): number {
    return a - b;
}
function porcentaje(a, b) {
    if(isNaN(a) || isNaN(b))
        new Error("Los parametros deben ser numericos");
    return (a*b)/100;
}