/**
 * Created by moksha on 10/01/17.
 */

const games = ['Cricket', 'Football', 'Hockey', 'Kabaddi'];

for (let i = 0; i < games.length; i++) {
    console.log(games[i]);
}

games.forEach((e) => {
    console.log(e)
});

for (const index in games) {
    console.log(games[index]);
}


