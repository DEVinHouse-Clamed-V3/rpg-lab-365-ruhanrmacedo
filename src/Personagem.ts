import Arma from "./Arma";
import Magia from "./Magia";

export default class Personagem {
    private nome: string;
    private vida: number;
    private forca: number;
    private arma: Arma | null;
    private magia: Magia | null;

    constructor(nome: string, vida: number, forca: number, arma: Arma | null = null, magia: Magia | null = null) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.arma = arma;
        this.magia = magia;
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

    public getMagia(): Magia | null {
        return this.magia;
    }

    // Implementado método para uso de magia no Personagem
    public usarMagia(alvo?: Personagem): void {
        if (!this.magia) {
            console.log(`${this.nome} não tem uma magia para usar.`);
            return;
        }
    
        if (!this.magia.podeUsar()) {
            console.log(`${this.nome} já utilizou todas as vezes permitidas a magia ${this.magia.getNome()}.`);
            return;
        }
    
        this.magia.usar();
    
        // Verifica se a magia é de ataque ou cura e executa a ação correspondente
        if (this.magia.getTipo() === 'Ataque') {
            if (alvo) {
                const dano = this.magia.getIntensidade();
                console.log(`${this.nome} usou a magia ${this.magia.getNome()} causando ${dano} de dano em ${alvo.getNome()}.`);
                alvo.receberDano(dano);
                this.magia = null; 
            } else {
                console.log(`Magia de ataque precisa de um alvo.`);
            }
        } else if (this.magia.getTipo() === 'Cura') {
            const cura = this.magia.getIntensidade();
            this.setVida(this.getVida() + cura);
            console.log(`${this.nome} usou a magia ${this.magia.getNome()} e recuperou ${cura} de vida.`);
        }
    
        console.log(`Usos restantes para a magia ${this.magia?.getNome()}: ${this.magia?.getUsosRestantes()}`);
    }
}