import Arma from './src/Arma';
import Personagem from './src/Personagem';
import Inimigo from './src/Inimigo';

const espada = new Arma('Espada Longa', 25, 'Uma espada forjada em aço.');
const machado = new Arma('Machado de Guerra', 30, 'Um machado pesado e mortal.');
const guerreiro = new Personagem('Guerreiro', 100, 15, null);
const orc = new Inimigo('Orc', 150, 20, null);
const elfo = new Inimigo('Elfo', 80, 10, null);


guerreiro.equiparArma(espada);

guerreiro.atacar(orc);
orc.comportamentoAleatorio(guerreiro);
elfo.comportamentoAleatorio(guerreiro);
guerreiro.atacar(orc);
orc.comportamentoAleatorio(guerreiro);
orc.comportamentoAleatorio(guerreiro);
orc.comportamentoAleatorio(guerreiro);
guerreiro.atacar(orc);
elfo.comportamentoAleatorio(guerreiro);
guerreiro.atacar(orc);
orc.comportamentoAleatorio(guerreiro);
orc.comportamentoAleatorio(guerreiro);
orc.comportamentoAleatorio(guerreiro);
elfo.comportamentoAleatorio(guerreiro);
orc.comportamentoAleatorio(guerreiro);
guerreiro.atacar(orc);
orc.comportamentoAleatorio(guerreiro);
orc.comportamentoAleatorio(guerreiro);
elfo.comportamentoAleatorio(guerreiro);
orc.comportamentoAleatorio(guerreiro);
orc.comportamentoAleatorio(guerreiro);