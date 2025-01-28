function findMaxFish(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    let maxFish = 0;

    // Função DFS para explorar e somar os peixes em uma área conectada
    function dfs(i: number, j: number): number {
        // Verifica se a célula está fora dos limites ou é um obstáculo
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 0) {
            return 0;
        }

        // Armazena o número de peixes na célula atual
        const fishCount = grid[i][j];
        // Marca a célula como visitada (definindo-a como 0)
        grid[i][j] = 0;

        // Soma os peixes das células adjacentes (cima, baixo, esquerda, direita)
        const totalFish = fishCount + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);

        return totalFish;
    }

    // Percorre todas as células da grade
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Se a célula contiver peixes, inicia a DFS
            if (grid[i][j] > 0) {
                const currentFish = dfs(i, j);
                // Atualiza o máximo de peixes encontrados
                maxFish = Math.max(maxFish, currentFish);
            }
        }
    }

    return maxFish;
}
