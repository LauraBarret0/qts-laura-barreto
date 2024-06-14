import { 
    assert,
    assertAlmostEquals,
    assertEquals,
    assertLess,
    assertFalse,
    assertGreaterOrEqual,
    assertNotEquals,
    assertArrayIncludes
    
} from "https://deno.land/std@0.223.0/assert/mod.ts";

Deno.test("Teste Assert", () =>{
    // Analisa se a afirmação é verdadeira, caso contrário dá erro.
    assert("10" == 10);
});

Deno.test("Teste Assert Almost Equals", () =>{
    // Analisa se os valores são "quase iguais" com uma determinada margem de erro.
    assertAlmostEquals(100, 120, 20);
});

Deno.test("Teste Assert Equals", () => {
    // Analisa se os valores são iguais.
    assertEquals(23, 23);
});

Deno.test("Teste Assert Less", () => {
    //Analisa se o primeiro valor é menor que o segundo.
    assertLess(-4, -3);
});

Deno.test("Teste Assert False", () => {
    //Analisa se o valor é falso
    assertFalse(0);
});

Deno.test("Teste Assert Greater Or Equal", () => {
    //Analisa se o primeiro valor é maior ou igual ao segundo.
    assertGreaterOrEqual(11, 10);
});

Deno.test("Teste Assert Not Equals", () => {
    //Analisa se os valores são diferentes.
    assertNotEquals(-4, 4);
});


Deno.test("Teste assertExists", () => {
    //Analisa se os valores estão incluídos no vetor.
    assertArrayIncludes(['Himym', 'Tbbt'], ['Tbbt']);
});



