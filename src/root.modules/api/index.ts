import axios from 'axios';
class API {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = "https://api-nodejs-todolist.herokuapp.com";
  }

  async CALL({ url = '', method = '', data = null }) {
    try {
      const response: any = await axios({
        method,
        data,
        url: this.apiUrl + url,
      });

      return response;
    } catch (error:any) {
      return { ...error.response };
    } 
  }

  GET(urlData:any) {
    return this.CALL({
      method: 'GET',
      url: urlData,
    });
  }

  POST(params:any) {
    return this.CALL({
      ...params,
      method: 'POST',
      url: params.url,
    });
  }

  PATCH(params:any) {
    return this.CALL({
      ...params,
      method: 'PATCH',
      url: params.url,
    });
  }

  PUT(params:any) {
    return this.CALL({
      ...params,
      method: 'PUT',
      url: params.url,
    });
  }

  DELETE(params:any) {
    return this.CALL({
      ...params,
      method: 'DELETE',
      url: params.url,
    });
  }
}

export default new API();