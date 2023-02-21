function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}


luckyDraw("Joe")
    .then((player) => console.log("Player 1 Result:", player))
    .then(() => luckyDraw("Caroline "))
    .then((player2) => console.log("Player 2 Result:", player2))
    .then(() => luckyDraw("Sabrina"))
    .then((player3) => console.log("Player 3 Result:", player3))
    .catch((error) => console.error(error))

