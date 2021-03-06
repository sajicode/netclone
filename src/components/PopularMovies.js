import React, { Fragment, PureComponent } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MovieItem from './MovieItem';
import LoadingPage from './LoadingPage';

const POPULAR_MOVIES_QUERY = gql`
	query PopularMoviesQuery {
		popularMovies {
			id
			title
			poster_path
			release_date
		}
	}
`;

export class PopularMovies extends PureComponent {
	render() {
		return (
			<Fragment>
				<div className="container">
					<h1 className="movies__title">Popular</h1>
					<Query query={POPULAR_MOVIES_QUERY}>
						{({ loading, error, data }) => {
							if (loading) return <LoadingPage />;
							if (error) console.log(error);

							return (
								<Fragment>
									<div className="movies__posters">
										{data.popularMovies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
									</div>
								</Fragment>
							);
						}}
					</Query>
				</div>
			</Fragment>
		);
	}
}

export default PopularMovies;
