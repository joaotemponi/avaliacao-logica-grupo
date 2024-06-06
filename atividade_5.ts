const teclado = require(`prompt-sync`)();
function par(n: number): boolean {
    return n % 2 == 1;
}

function obterNumerosPares(): number[] {
    let numerosPares: number[] = [];

    for (let n1 = 0; n1 < 6; n1++) {
        let n2: number;
        do {
            n2 = parseFloat(teclado(`Digite o ${n1 + 1}º número: `));
            if (par(n2)) {
                console.log(`O número ${n2} não é par. Digite outro número.`);
            }
        } while (par(n2));

        numerosPares[n1] = n2;
    }

    return numerosPares;
}

let numerosParesObtidos = obterNumerosPares();
console.log(`Números pares armazenados: `);
console.log(numerosParesObtidos);
