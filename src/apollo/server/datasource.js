const { RESTDataSource, HTTPCache } = require('apollo-datasource-rest');

class LobbyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.leylobby.gob.cl/api/v1/';
    this.httpCache = new HTTPCache();
  }

  async getAllDonations(page, institutionId) {
    const params = {page, institucion: institutionId}
    // Remove undefined  params (weren't given in the query)
    Object.entries(params).forEach(o =>
      o[1] === undefined ? delete params[o[0]] : 0
    )
    const donations = await this.get('donativos/', params);
    return donations.data;
  }

  async getADonation(donationId) {
    const result = await this.get(`donativos/${donationId}`);
    return result;
  }
}
module.exports = { LobbyAPI };
