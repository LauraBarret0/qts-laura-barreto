let a = 'oi'
let b = 'olá'

Deno.test("Teste do oi", () =>{
    if (a != "oi" ){
        throw new Error (`${a} não é oi`);
    }
})

Deno.test("Não pode ser oi ", () =>{
    if (b == "oi" ){
        throw new Error (`${a}  é oi`);
    }
})