const { RESTDataSource, HTTPCache } = require('apollo-datasource-rest');

class LobbyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.leylobby.gob.cl/api/v1/';
    this.httpCache = new HTTPCache();
  }

  async getAllDonations(page, institutionId) {
    const donations = await this.get('donativos/', {
      page,
      institutionId,
    });
    return donations.data;
  }

  async getADonation(donationId) {
    const result = await this.get(`donativos/${donationId}`);
    return result;
  }
}
module.exports = { LobbyAPI };
