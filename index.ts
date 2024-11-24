import Arma from './src/Arma';
import Personagem from './src/Personagem';

const espada = new Arma('Espada Longa', 25, 'Uma espada forjada em aço.');
const machado = new Arma('Machado de Guerra', 30, 'Um machado pesado e mortal.');
const guerreiro = new Personagem('Guerreiro', 100, 15, null);
const orc = new Personagem('Orc', 150, 20, null);
const elfo = new Personagem('Elfo', 80, 10, null);


guerreiro.equiparArma(espada);

guerreiro.atacar(orc);
orc.atacar(guerreiro);
elfo.atacar(guerreiro);
orc.atacar(guerreiro);
orc.atacar(guerreiro);
orc.atacar(guerreiro);
elfo.atacar(guerreiro);
orc.atacar(guerreiro);
orc.atacar(guerreiro);
orc.atacar(guerreiro);
elfo.atacar(guerreiro);
orc.atacar(guerreiro);
orc.atacar(guerreiro);
orc.atacar(guerreiro);
elfo.atacar(guerreiro);
orc.atacar(guerreiro);
orc.atacar(guerreiro);