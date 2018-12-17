'use strict';

const EventEmitter = require('events');
const dgram = require('dgram');
const debug = require('debug');

const UdpServer = new EventEmitter();
UdpServer.setMaxListeners(25);

const log = debug('udp-server');
const logErr = debug('udp-server:error');

UdpServer.start = function ({port = 9999} = {}) {
  const self = UdpServer;
  self.socketBound = false;

  return new Promise((resolve, reject) => {
    self.socket = dgram.createSocket({type: 'udp4', reuseAddr: true});

    self.socket.on('listening', () => {
      const address = self.socket.address();
      self.socketBound = true;
      log('UDP server listening', address);
      resolve(UdpServer);
    });

    self.socket.on('message', (msg, rinfo) => {
      self.emit('message', msg, rinfo);
    });

    self.socket.on('error', (exception) => {
      logErr(exception);
      self.socket.close();
      self.socketBound = false;
      resolve(exception);
    });

    self.socket.bind(port);
  });
};

UdpServer.stop = function () {
  const self = UdpServer;
  if (self.socketBound) {
    self.socket.close();
    self.socketBound = false;
  }
};

module.exports = UdpServer;
