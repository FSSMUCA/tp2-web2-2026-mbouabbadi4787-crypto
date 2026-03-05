let paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let compteur = 0;

for (let i = 0; i < paires.length; i++) {
    let a = paires[i][0];
    let b = paires[i][1];

    let eq = (a == b);
    let seq = (a === b);

    if (eq && !seq) {
        compteur++;
    }

    let strA = JSON.stringify(a);
    let strB = JSON.stringify(b);

    let ligne = `${strA} == ${strB}`.padEnd(25) + `-> ${eq}`.padEnd(10) + `| ${strA} === ${strB}`.padEnd(25) + `-> ${seq}`;
    console.log(ligne);
}

console.log('---');

console.log(`${compteur} paire(s) où == et === donnent des résultats différents`);