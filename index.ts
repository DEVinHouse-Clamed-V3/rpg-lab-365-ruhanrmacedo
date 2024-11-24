import Arma from './src/Arma';
import Personagem from './src/Personagem';
import Inimigo from './src/Inimigo';

// Criando armas
const espada = new Arma('Falcon Longsword', 156, 'Uma espada forjada em aço.');
const machado = new Arma('Battle Axe', 100, 'Um machado pesado e mortal.');
const arco = new Arma('Elvish Bow', 65, 'Um arco ideal para combates à distância.');

// Criando o personagem principal
const guerreiro = new Personagem('Knight', 1000, 200, null);
guerreiro.equiparArma(espada);

// Criando inimigos
const orc = new Inimigo('Orc Berserker', 210, 100, machado);
const elfo = new Inimigo('Elf Scout', 160, 15, arco);
const goblin = new Inimigo('Goblin', 50, 25, null);
const troll = new Inimigo('Troll', 50, 10, null);
const dragao = new Inimigo('Dragon', 1000, 130, null);

const inimigos = [orc, elfo, goblin, troll, dragao];

function exibirEstado() {
    console.log('Estado atual dos personagens:');
    console.log(`${guerreiro.getNome()}: ${guerreiro.getVida()} HP`);
    inimigos.forEach(inimigo => {
        console.log(`${inimigo.getNome()}: ${inimigo.getVida()} HP`);
    });
    console.log('-----------------------------');
}

console.log('Início do jogo!');
exibirEstado();

while (guerreiro.getVida() > 0 && inimigos.some(inimigo => inimigo.getVida() > 0)) {

    const inimigoAlvo = inimigos.find(inimigo => inimigo.getVida() > 0);
    if (inimigoAlvo) {
        guerreiro.atacar(inimigoAlvo);
    }

    inimigos.forEach(inimigo => {
        if (inimigo.getVida() > 0) {
            inimigo.comportamentoAleatorio(guerreiro);
        }
    });

    exibirEstado();
}

if (guerreiro.getVida() <= 0) {
    console.log('\nO Guerreiro foi derrotado! Fim de Jogo.');
} else if (inimigos.every(inimigo => inimigo.getVida() <= 0)) {
    console.log('\nTodos os inimigos foram derrotados! Vitória!');
}