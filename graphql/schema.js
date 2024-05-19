const { ApolloServer } = require('@apollo/server');

const typeDefs = `
  type users {
    name: String!
    email: String!
    password: String!
    id: ID!
  }

  type theaters{
    id: ID!
    theater_id: Int!
    location: Location,
  }

  type Location {
    address: Address!,
    geo: Geo!
  }

  type Address {
    street1: String!
    city: String!
    state: String!
    zipcode: String!
  }

  type Geo {
    type: String!,
    coordinates: [Float]!
  }

  type Movie {
    plot: String!,
    genres: [String]!,
    runtime: Int!,
    cast: [String]!,
    poster: String!,
    title: String!,
    fullplot: String!,
    languages: [String]!,
    released: String!,
    directors: [String]!,
    rated: String!,
    awards: Awards!,
    lastupdated: String!,
    year: Int!,
    imdb: Imdb!,
    countries: [String]!,
    type: String!,
    tomatoes: Tomatoes!,
    num_mflix_comments: Int,
  }

  type Awards {
    wins: Int!,
    nominations: Int!,
    text: String!,
  }

  type Imdb {
    rating: Float!,
    votes: Int!,
    id: Int!,
  }

  type Tomatoes {
    viewer: Viewer!,
    fresh: Int!,
    critic: Critic!,
    rotten: Int!,
    lastupdated: String!,
  }

  type Viewer {
    rating: Float!,
    numReviews: Int!,
    meter: Int!,
  }

  type Critic {
    rating: Float!,
    numReviews: Int!,
    meter: Int!,
  }

  type Awards {
    wins: Int!,
    nominations: Int!,
    text: String!,
  }

  type Imdb {
    rating: Float!,
    votes: Int!,
    id: Int!,
  }

  type Tomatoes {
    viewer: Viewer!,
    dvd: String!,
    critic: Critic!,
    fresh: Int!,
    rotten: Int!,
    production: String!,
    lastupdated: String!,
  }

  type Viewer {
    rating: Float!,
    numReviews: Int!,
    meter: Int!,
  }

  type Critic {
    rating: Float!,
    numReviews: Int!,
    meter: Int!,
  }

  type EmbeddedMovie {
    plot: String!,
    genres: [String]!,
    runtime: Int!,
    rated: String!,
    cast: [String]!,
    num_mflix_comments: Int!,
    poster: String!,
    title: String!,
    fullplot: String!,
    languages: [String]!,
    released: String!,
    directors: [String]!,
    writers: [String]!,
    awards: Awards!,
    lastupdated: String!,
    year: Int!,
    imdb: Imdb!,
    countries: [String]!,
    type: String!,
    tomatoes: Tomatoes!,
    plot_embeddings: [Float]!,
  }

  type Query {
    findUserByEmail(email: String!): users,
    findUserByName(name: String!): users,
    findUsersCount: Int!
    findTheaterById(theaterId: Int!): theaters,
    getTheaterAddress(theaterId: Int!): Address,
    findMovieById(movieId: String!): Movie,
    findMovieByTitle(title: String!): Movie,
    getMovies: [Movie],
    getEmbeddedMovies: [EmbeddedMovie],
    findEmbeddedMovieByTitle(title: String!): EmbeddedMovie,
  }
`

module.exports = typeDefs;
