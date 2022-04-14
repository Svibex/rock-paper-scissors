class Referee {
    constructor(props) {
        this.movie = props.movie;
    }

    getResult() {
        if(+userMovie < 4) {
            this.movies.push({ Player: "Lose", Computer: "Win" })
        } else if (+userMovie === 4) {
            this.movies.push({ Player: "Draw", Computer: "Draw" })
        } else {
            this.movies.push({ Player: "Win", Computer: "Lose" })
        }
    }
}

export default Referee;