import {Injectable}   from '@angular/core';

//const WEBSOCKET_URL = 'ws://localhost:5000/websocket';
//const WEBSOCKET_URL = 'wss://chat-deck.herokuapp.com/websocket';
const WEBSOCKET_URL = 'ws://electricnodes-env-2.eba-ucms2ear.ap-south-1.elasticbeanstalk.com/websocket';
@Injectable()
export class WebSocketService {

  
private websocket: any;
  constructor() { }

  createNew(): WebSocket {
    this.websocket = new WebSocket(WEBSOCKET_URL);
    return this.websocket;
  }
  
}