class Table {
    constructor(props) {
        this.movies = props.movies;
        this.headers = props.args;
    }

    getTable() {
        console.table(this.movies, this.headers);
    }
}

export default Table;