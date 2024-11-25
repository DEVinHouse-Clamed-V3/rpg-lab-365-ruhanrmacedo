import Personagem from "./Personagem";
import Arma from "./Arma";
import Magia from "./Magia";

export default class Inimigo extends Personagem {
    constructor(nome: string, vida: number, forca: number, arma: Arma | null = null, magia: Magia | null = null) {
        super(nome, vida, forca, arma, magia);
    }

    protected chanceDeAtaque(): boolean {
        return Math.random() > 0.2;
    }

    public atacar(alvo: Personagem): void {
        if (this.chanceDeAtaque()) {
            const dano = this.calcularDano();
            console.log(`${this.getNome()} atacou ${alvo.getNome()} com ${dano} de dano.`);
            alvo.receberDano(dano);
        } else {
            console.log(`${this.getNome()} errou o ataque.`);
        }
    }

    public receberDano(dano: number): void {
        super.receberDano(dano); 
        if (this.getVida() <= 0) {
            console.log(`O inimigo ${this.getNome()} foi derrotado!`);
        }
    }

    public comportamentoAleatorio(jogador: Personagem): void {
        const acao = Math.random() > 0.5;
        if (acao) {
            this.atacar(jogador);
            console.log(`Vida do jogador (${jogador.getNome()}): ${jogador.getVida()}`);
        } else {
            console.log(`${this.getNome()} está observando.`);
        }
    }

    public usarMagia(alvo?: Personagem): void {
        super.usarMagia(alvo);
    } 
}
