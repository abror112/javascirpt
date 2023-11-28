"use strict";
const futbol = prompt("futbolni yaxshi korasizmi", "");

const newfutbol ={
    count: futbol,
    players: {},
 footballwatch: {},
 match: [],
};
const a = prompt("oxirgi korgan futboligiz")
const b = prompt("qaysi futbolchini yaxshi korasiz")
newfutbol.players[a] = b;
console.log(newfutbol);