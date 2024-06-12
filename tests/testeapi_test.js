import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
    
} from "https://deno.land/std@0.221.0/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['João', 'Lais', 'Davi', 'Bruno Aparecido Cano']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Cróvis José");
    assertStringIncludes(aluno, "José");
}) 

Deno.test("Testando array do professpr (API)", () => {

    assertArrayIncludes(professores,
         ["Davi", "Lais"],
          "Opa! Algo deu errado!");
})