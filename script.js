const movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: 'Krol_Lew.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'Harry_Potter.jpg'
    },
    {
        id: 3,
        title: 'Dzień Patriotów',
        desc: 'Film o zamachu podczas maratonu bostońskiego',
        image: 'Dzien_Patriotow.jpg'
    }


];

const MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

const MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    },
});

const MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('img', { src: this.props.image })
        )
    },
});


const Movie = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },

    render: function () {
        const list = this.props.movies.map(function (movie) {
            return React.createElement('li', { key: movie.id },
                React.createElement(MovieTitle, { title: movie.title}),
                React.createElement(MovieDesc, { desc: movie.desc}),
                React.createElement(MovieImage, { image: movie.image})
            )
        })
        return (
            React.createElement('ul', {className: 'FilmList'}, list)
          );
    },
});

const element = React.createElement(Movie, { movies: movies });
ReactDOM.render(element, document.getElementById('app'));