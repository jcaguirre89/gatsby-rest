const resolvers = {
  Query: {
    donativo: async (parent, { donativoId }, { dataSources }) => {
      const donativo = await dataSources.lobbyAPI.getADonativo(donativoId);
      return {
        donativo: {
          id_donativo: donativo.id_donativo,
          nombres: donativo.nombres,
          apellidos: donativo.apellidos,
          pais: donativo.pais,
          cargo: donativo.cargo,
          ocasion: donativo.ocasion,
          descripcion: donativo.descripcion,
          fecha: donativo.fecha,
          nombre_institucion: donativo.institucion.nombre,
        },
        donantes: donativo.donantes
      }
    },
    donativos: async (parent, args, { dataSources }) => {
      const page = args.page || null
      const institucionId = args.institucionId || null
      const donativos = await dataSources.lobbyAPI.getAllDonativos(page, institucionId);
      return donativos;
    },
  }
}

module.exports = resolvers
