import {Injectable}   from '@angular/core';

const WEBSOCKET_URL = 'ws://chat-deck.herokuapp.com/websocket';

@Injectable()
export class WebSocketService {

  
private websocket: any;
  constructor() { }

  createNew(): WebSocket {
    this.websocket = new WebSocket(WEBSOCKET_URL);
    return this.websocket;
  }
  
}