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
