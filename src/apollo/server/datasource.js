const { RESTDataSource, HTTPCache } = require('apollo-datasource-rest');

class LobbyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.leylobby.gob.cl/api/v1/';
    this.httpCache = new HTTPCache();
  }

  async getAllDonativos(page, institucionId) {
    const donations = await this.get('donativos/', {
      page,
      institucionId,
    });
    return donations.data;
  }

  async getADonativo(donativoId) {
    const result = await this.get(`donativos/${donativoId}`);
    return result;
  }
}
module.exports = { LobbyAPI };
