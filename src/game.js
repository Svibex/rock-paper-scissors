import Table from './table.js';
import Referee from './referee';
import RandomNumber from "./randomNumber";

const console = require('console');
const process = require('process');
const readLineSync = require('readline-sync');

let args = process.argv.slice(2);
const maxMoviesLength = args.length;
const min = 3;
const max = maxMoviesLength;

const game = new Game();
game.getMenu();


class Game {
    constructor() {
        this.movies = [];
    }

    getMenu() {
        let userRes;
        while (userRes !== '0' || this.movies.length !== maxMoviesLength) {
            args.forEach((item, index) => console.log(index+1 + " - " + item));
            console.log("0 - exit");
            console.log("? - help");
            userRes = readLineSync.question("Pick an option: ");
            if (userRes === '?') {
                const table = new Table;
                table.getTable(this.movies, args);
            } else if (+userRes > 1) {
                this.doMovie(userRes);
            } else {
                this.showError()
            }
        }
        // args.splice(0, args.length);
    }

    doMovie(userMovie) {
        const computerMovie = RandomNumber;
        const result = new Referee(userMovie, computerMovie).getResult();
        this.movies.push({ player: userMovie, computer: computerMovie, result})
    }

    showError() {
        console.log("Error");
    }
}
