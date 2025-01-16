class Mate{
   static #Pi = 3.1416;
   static get Pi(){
       return this.#Pi;
   }
   static suma(a,b){
       return a+b;
   }
}
console.log(Mate.Pi);
console.log(Mate.suma(30,32));