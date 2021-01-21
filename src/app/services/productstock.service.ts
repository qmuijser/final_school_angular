import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class ProductstockService {

  constructor() { }

  hubConnection:signalR.HubConnection;

  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/getProductAmount', {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();

    this.hubConnection
    .start()
    .then(() => {
      console.log("hub connection started");
    })
    .catch(err => console.log(""))
  }

  askServer(productId) {
    this.hubConnection.invoke("getProductAmount", productId)
    .catch(err => console.log(err));
  }

  askServerListener() {
    this.hubConnection.on("getProductAmount", (response) => {
      console.log(response);
    })
  }
}

