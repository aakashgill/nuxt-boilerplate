export class HttpService {
  config = useRuntimeConfig();
  constructor() {}

  get(url: string) {
    return $fetch(`${this.config.public.apiBase}${url}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
  }

  post(url: string, body: any, params: any = null) {
    return $fetch(`${this.config.public.apiBase}${url}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: body,
    });
  }

  put(url: string, body: any) {
    return $fetch(`${this.config.public.apiBase}${url}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: body,
    });
  }

  delete(url: string) {
    return $fetch(`${this.config.public.apiBase}${url}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
  }
}
