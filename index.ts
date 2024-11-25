import Arma from './src/Arma';
import Personagem from './src/Personagem';
import Inimigo from './src/Inimigo';
import Magia from './src/Magia';

// Criando armas
const espada = new Arma('Falcon Longsword', 156, 'Uma espada forjada em aço.');
const machado = new Arma('Battle Axe', 100, 'Um machado pesado e mortal.');
const arco = new Arma('Elvish Bow', 65, 'Um arco ideal para combates à distância.');

// Criando magias
const curaExura = new Magia('Exura', 'Cura', 100);
const curaExuraGran = new Magia('Exura Gran', 'Cura', 400);
const ataqueExori = new Magia('Exori', 'Ataque', 400);
const ataqueExevoFlamHur = new Magia('Exevo Flam Hur', 'Ataque', 400);


// Criando o personagem principal
const guerreiro = new Personagem('Knight', 1000, 200, espada, curaExuraGran);

// Criando inimigos
const orc = new Inimigo('Orc Berserker', 210, 100, machado, ataqueExori);
const elfo = new Inimigo('Elf Scout', 160, 15, arco, curaExuraGran);
const goblin = new Inimigo('Goblin', 50, 25, null, null);
const troll = new Inimigo('Troll', 50, 10, null, curaExura);
const dragao = new Inimigo('Dragon', 1000, 130, null, ataqueExevoFlamHur);

const inimigos = [orc, elfo, goblin, troll, dragao];

function exibirEstado() {
    console.log('\nEstado atual dos personagens:');
    console.log(`${guerreiro.getNome()}: ${guerreiro.getVida()} HP`);
    inimigos.forEach(inimigo => {
        console.log(`${inimigo.getNome()}: ${inimigo.getVida()} HP`);
    });
    console.log('-----------------------------');
}

console.log('Início do jogo!');
exibirEstado();

// Início do jogo com simulação de rodadas
while (guerreiro.getVida() > 0 && inimigos.some(inimigo => inimigo.getVida() > 0)) {
    console.log('\n--- Nova rodada ---');

    // Ação do Knight
    const inimigoAlvo = inimigos.find(inimigo => inimigo.getVida() > 0);
    if (inimigoAlvo) {
        if (guerreiro.getMagia()?.getTipo() === 'Cura' && guerreiro.getVida() < 700 && guerreiro.getMagia()?.podeUsar()) {
            guerreiro.usarMagia();
        } else {
            guerreiro.atacar(inimigoAlvo);
        }
    }

    // Ação dos inimigos
    inimigos.forEach(inimigo => {
        if (inimigo.getVida() > 0) {
            const acaoInimigo = Math.random();
            if (inimigo.getMagia() && inimigo.getVida() < 100 && inimigo.getMagia()?.podeUsar()) {
                inimigo.usarMagia(guerreiro); 
            } else if (acaoInimigo > 0.4) {
                inimigo.atacar(guerreiro); 
            } else {
                console.log(`${inimigo.getNome()} está observando.`); 
            }
        }
    });

    exibirEstado();
}

// Fim do jogo
if (guerreiro.getVida() <= 0) {
    console.log('\nO Guerreiro foi derrotado! Fim de Jogo.');
} else if (inimigos.every(inimigo => inimigo.getVida() <= 0)) {
    console.log('\nTodos os inimigos foram derrotados! Vitória!');
}
