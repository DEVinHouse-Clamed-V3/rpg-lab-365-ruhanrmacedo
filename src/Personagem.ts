import Arma from "./Arma";

export default class Personagem {
    private nome: string;
    private vida: number;
    private forca: number;
    private arma: Arma | null;

    constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.arma = arma;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getVida(): number {
        return this.vida;
    }

    public setVida(vida: number): void {
        if (vida >= 0) {
            this.vida = vida;
        } else {
            this.vida = 0;
            console.log("A vida não pode ser negativa");
        }
    }

    public getForca(): number {
        return this.forca;
    }

    public setForca(forca: number): void {
        this.forca = forca;
    }

    public getArma(): Arma | null {
        return this.arma;
    }

    public setArma(arma: Arma | null): void {
        this.arma = arma;
    }

    protected chanceDeAtaque(): boolean {
        return Math.random() > 0.5;
    }

    protected calcularDano(): number {
        return this.forca + (this.arma ? this.arma.getDano() : 0);
    }

    public equiparArma(arma: Arma): void {
        this.arma = arma;
        console.log(`${this.nome} equipou ${arma.getNome()}`);
    }

    public atacar(alvo: Personagem): void {
        if (this.chanceDeAtaque()) {
            const dano = this.calcularDano();
            if (!this.arma) {
                console.log(`${this.nome} atacou ${alvo.getNome()} com as mãos causando ${dano} de dano.`);
            } else {
                console.log(`${this.nome} atacou ${alvo.getNome()} com ${this.arma.getNome()} causando ${dano} de dano.`);
            }
            alvo.receberDano(dano);
        } else {
            console.log(`${this.nome} errou o ataque em ${alvo.getNome()}.`);
        }
    }

    public receberDano(dano: number): void {
        this.vida -= dano;
        console.log(
            `${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`
        );
        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        }
    }
}