import {Buffer} from "buffer";
const  { SHA3 } = require("sha3");

class RandomNumber {
    constructor(props) {
        this.movies = props.movies;
    }

    getHMAC() {
        const Promise = require("bluebird");
        const randomNumber = require("random-number-csprng");

        Promise.try(function() {
            return randomNumber(32, 32);
        }).then(function(number) {
            console.log("Your random number:", number);
        }).catch({code: "RandomGenerationError"}, function(err) {
            console.log("Something went wrong!");
        });
    }

    getHash = (data) => {
        const hash = new SHA3(256);
        hash.update(Buffer.concat(data))
        console.log(hash.digest('hex'))
    }

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default RandomNumber;