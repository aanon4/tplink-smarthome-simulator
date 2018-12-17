'use strict';

const hs = require('./hs');

const hs105 = Object.assign({}, hs);
module.exports = hs105;

Object.assign(hs105, {
  system: {
    sysinfo: {
      sw_ver: '1.2.9 Build 170808 Rel.145916',
      hw_ver: '1.0',
      type: 'IOT.SMARTPLUGSWITCH',
      model: 'HS105(US)',
      dev_name: 'Smart Wi-Fi Plug Mini',
      icon_hash: '',
      relay_state: 0,
      on_time: 0,
      active_mode: 'schedule',
      feature: 'TIM',
      updating: 0,
      rssi: -65,
      led_off: 0
    }
  }
});
