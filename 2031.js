const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");


const jogadas = {
    'ataque': {
        'ataque': 'Aniquilacao mutua',
        'pedra': 'Jogador 1 venceu',
        'papel': 'Jogador 1 venceu'
    },
    'pedra': {
        'ataque': 'Jogador 2 venceu',
        'pedra': 'Sem ganhador',
        'papel': 'Jogador 1 venceu'
    },
    'papel': {
        'ataque': 'Jogador 2 venceu',
        'pedra': 'Jogador 2 venceu',
        'papel': 'Ambos venceram'
    }
}
const casos = parseInt(lines.shift())
let jogador1 = lines.shift()
let jogador2 = lines.shift()

while (jogador1 && jogador2) {
    console.log(jogadas[jogador1][jogador2])
    jogador1 = lines.shift()
    jogador2 = lines.shift()
}









// Ataque Aéreo vs. Pedra: Neste caso, o jogador com o Ataque Aéreo derrota o jogador com a Pedra, por razões óbvias. 
// Pedra vs. Papel: Neste caso, o jogador com a Pedra derrota o com Papel, porque a Pedra machuca muito mais.
// Papel vs. Ataque Aéreo: Aqui o Ataque Aéreo ganha, porque Ataque Aéreo sempre ganha e o Papel é patético.
// Papel vs. Papel: Nesta variação, ambos os jogadores ganham, porque o Papel é inútil e ninguém que enfrenta o Papel pode perder.
// Pedra vs. Pedra: Para este caso não há ganhador, porque depende do que os jogadores decidem fazer com a Pedra e normalmente não fazem nada.
// Ataque Aéreo vs. Ataque Aéreo: Quando isto acontece, todos os jogadores perdem, devido a Aniquilação Mútua.




// “Jogador 1 venceu”: se o Jogador Um tiver vencido a partida
// “Jogador 2 venceu”: se o Jogador Dois tiver vencido a partida
// “Ambos venceram”: se os dois jogadores tiverem vencido a partida
// “Sem ganhador”: se não houver ganhador
// “Aniquilacao mutua”: se ocorrer Aniquilação Mútua