const { ApolloServer, gql } = require("apollo-server-lambda");
const { LobbyAPI } = require('../apollo/server/datasource');
const resolvers = require('../apollo/server/resolvers')


const typeDefs = gql`
  scalar DateTime

  type Query {
    donativos(page: Int, donativoId: Int): [Donativo!]!
    donativo(donativoId: Int!): DonativoDetalle!
  }

  type Donativo {
    id_donativo: Int!
    nombres: String!
    apellidos: String!
    pais: String
    cargo: String
    ocasion: String
    descripcion: String
    fecha: DateTime
    nombre_institucion: String
  }

  type DonativoDetalle {
    donativo: Donativo!
    donantes: [Donante!]!
  }

  type Donante {
    id_donativo: Int!
    nombre: String!
      pais: String!
      tipo: String!
      giro: String
      actividades: String
      domicilio: String
      representante_legal: String
      naturaleza: String
      directorio: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    lobbyAPI: new LobbyAPI(),
  }),
});

exports.handler = server.createHandler();
