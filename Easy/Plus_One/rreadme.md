# PLus One

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
A primeira ideia ao resolver o problema é observar que estamos lidando com um array de dígitos que representa um número inteiro. Ao adicionar 1 a esse número, a alteração normalmente ocorre no último dígito, a menos que haja um "vai-um" para os dígitos anteriores. Isso é especialmente relevante quando o último dígito é 9, o que faz com que ele se torne 0 e o "vai-um" se propague para a esquerda. Precisamos cuidar dessa propagação e, se todos os dígitos forem 9, precisamos adicionar um dígito extra.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Percorrer de trás para frente**: Começamos pelo último dígito, pois é o que será diretamente afetado pelo incremento.
2. **Incremento simples**: Se o último dígito for menor que 9, basta incrementá-lo e retornar o array, pois o incremento não afetará os dígitos anteriores.
3. **Propagar o "vai-um"**: Quando o último dígito for 9, ele se tornará 0, e o "vai-um" será propagado para o dígito anterior. Continuamos esse processo até encontrar um dígito que não seja 9 ou até termos que adicionar um novo dígito no início.
4. **Caso especial**: Se todos os dígitos forem 9, ao final do loop, teremos um array de zeros e precisamos adicionar um 1 no início.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
  - A complexidade de tempo é $$O(n)$$, onde **n** é o tamanho do array `digits`. Isso ocorre porque no pior caso (todos os dígitos sendo 9), precisamos percorrer todos os dígitos para propagar o "vai-um".

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
  - A complexidade de espaço também é $$O(n)$$. No pior caso, quando todos os dígitos são 9, precisamos criar um novo array com um dígito adicional, o que resulta em espaço extra proporcional a **n**.

# Code
```typescript
function plusOne(digits: number[]): number[] {
    // Percorre o array de trás para frente
    for (let i = digits.length - 1; i >= 0; i--) {
        // Se o dígito atual não for 9, basta incrementá-lo e retornar o array
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        // Se for 9, transformá-lo em 0
        digits[i] = 0;
    }

    // Se todos os dígitos forem 9, adicionar 1 no início
    return [1, ...digits];
}
```