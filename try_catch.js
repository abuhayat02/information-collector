
let me = 'Hayat';
try {
    if (me === 'Hayat') {
        console.log('Okey! You are always right');
    } else {
        throw `Hey, ${me} you are a loser ? `;
    }
} catch (error) {
    console.log(error);
}
