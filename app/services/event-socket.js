import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    const socket = this.get('websockets').socketFor(ENV.APP.SOCKET_HOST);

    socket.on('open', this.openHandler, this);
    socket.on('message', this.messageHandler, this);
    socket.on('close', this.closeHandler, this);

    this.set('socketRef', socket);
  },

  websockets: Ember.inject.service(),

  openHandler() {
    console.log('Socket opened');
  },

  closeHandler() {
    console.log('Socket closed');
  },

  messageHandler(msg) {
    this.set('newMessage', msg);
  },

  sendEventMessage(event) {
    console.log('sending event');
    console.log(event);
    let jsonEvent = JSON.stringify(event);
    const socket = this.get('socketRef');
    socket.send(jsonEvent);
  }

});
