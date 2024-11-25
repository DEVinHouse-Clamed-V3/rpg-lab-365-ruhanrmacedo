// Classe que representa uma magia que pode ser usada por um personagem ou inimigo.

export default class Magia {
    private nome: string;
    private tipo: "Ataque" | "Cura";
    private intensidade: number;
    private usosRestantes: number;

    constructor(nome: string, tipo: "Ataque" | "Cura", intensidade: number) {
        this.nome = nome;
        this.tipo = tipo;
        this.intensidade = intensidade;
        this.usosRestantes = tipo === "Cura" ? 2 : 1;
    }

    public getNome(): string {
        return this.nome;
    }

    public getTipo(): "Ataque" | "Cura" {
        return this.tipo;
    }

    public getIntensidade(): number {
        return this.intensidade;
    }

    public podeUsar(): boolean {
        return this.usosRestantes > 0;
    }

    public usar(): void {
        if (this.usosRestantes > 0) {
            this.usosRestantes--;
        } else {
            console.log(`A magia ${this.nome} não pode mais ser usada.`);
        }
    }

    public getUsosRestantes(): number {
        return this.usosRestantes;
    }
}