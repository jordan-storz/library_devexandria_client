import Ember from 'ember';

export default Ember.Component.extend({
  elementId: 'followee-feed-component',
  websockets: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  click() {
    let thisUser = this.get('currentUser').getUser();
    let messageInfo = {
      user: thisUser.id
    };
    const jsonMessageInfo = JSON.stringify(messageInfo);
    const socket = this.get('socketRef');
    socket.send(jsonMessageInfo);
  },

  didInsertElement() {
    this._super(...arguments);
    const socket = this.get('websockets').socketFor('ws://localhost:3200/');

    socket.on('open', this.openHandler, this);
    socket.on('message', this.messageHandler, this);
    socket.on('close', this.closeHandler, this);

    this.set('socketRef', socket);
  },

  willDestroyElement() {
    this._super(...arguments);

    const socket = this.get('socketRef');
    socket.off('open', this.openHandler);
    socket.off('message', this.messageHandler);
    socket.off('close', this.closeHandler);
  },

  openHandler(event) {
    console.log('Socket opened');
    console.log(event);
  },

  messageHandler(event) {
    console.log('message received!');
    console.log(event);
  },

  closeHandler(event) {
    console.log('socket closed');
    console.log(event);
  },

  actions: {
    sendSocket() {
      const socket = this.get('socketRef');
      socket.send('Ember app message outbound');
    }
  }
});
