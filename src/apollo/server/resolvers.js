const resolvers = {
  Query: {
    donation: async (parent, { donationId }, { dataSources }) => {
      const donation = await dataSources.lobbyAPI.getADonation(donationId);
      return {
        donativo: {
          id_donativo: donation.id_donativo,
          nombres: donation.nombres,
          apellidos: donation.apellidos,
          pais: donation.pais,
          cargo: donation.cargo,
          ocasion: donation.ocasion,
          descripcion: donation.descripcion,
          fecha: donation.fecha,
          nombre_institucion: donation.institucion.nombre,
        },
        donantes: donation.donantes
      }
    },
    donations: async (parent, args, { dataSources }) => {
      const { page, institutionId } = args
      const donativos = await dataSources.lobbyAPI.getAllDonativos(page, institutionId);
      return donations;
    },
  }
}

module.exports = resolvers
