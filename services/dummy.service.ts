import { HttpService } from "~/services/http.service";

export class DummyService {
  httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
  }

  getDummyData() {
    return this.httpService.get(`/dummy-endpoint`);
  }
}
