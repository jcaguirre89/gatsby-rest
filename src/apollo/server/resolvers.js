const resolvers = {
  Query: {
    donation: async (parent, { donationId }, { dataSources }) => {
      const donation = await dataSources.lobbyAPI.getADonation(donationId);
      return {
        data: {
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
        donors: donation.donantes
      }
    },
    donations: async (parent, args, { dataSources }) => {
      const { page, institutionId } = args
      const donations = await dataSources.lobbyAPI.getAllDonations(
        page,
        institutionId
      )
      return donations;
    },
  }
}

module.exports = resolvers
