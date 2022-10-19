import express from "express";
import http from "http";

export class HttpMockServer {
  port = 9998;
  baseUrl = "http://localhost:9998";
  private app: express.Application;
  private server: http.Server;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }
  initServer = async () => {
    this.server = http.createServer(this.app);
    await new Promise((resolve) => {
      this.server.listen(this.port, null, null, () => {
        resolve({});
      });
    });
  };

  close() {
    this.server.close();
  }

  addRoute(route: express.Router) {
    this.app.use(route);
  }
}
