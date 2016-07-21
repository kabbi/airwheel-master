import React from 'react';
import { render } from 'react-blessed';
import blessed from 'blessed';

import Root from './views/Root';
import CounterView from './views/CounterView';

// Creating our screen
const screen = blessed.screen({
  // TODO: remove when hyperterm unicode support is fixed
  forceUnicode: true,
  autoPadding: true,
  smartCSR: true,
  title: 'Airwheel Master',
});

// Adding a way to quit the program
screen.key(['escape', 'q', 'C-c'], () => (
  process.exit(0)
));

// Rendering the React app using our screen
render((
  <Root>
    <CounterView/>
  </Root>
), screen);

/* eslint-disable no-console */

// const makeErrorHandler = name => error => {
//   if (!error) {
//     return;
//   }
//   console.log('x', 'ble api call failed', name, error);
// };
//
// const formatUUID = uuid => {
//   if (uuid.length !== 32) {
//     return uuid;
//   }
//   const parts = [
//     uuid.slice(0, 8),
//     uuid.slice(8, 12),
//     uuid.slice(12, 16),
//     uuid.slice(16, 20),
//     uuid.slice(20),
//   ];
//   return parts.join('-');
// };
//
// noble.on('stateChange', state => {
//   console.log('i', 'new state', state);
//   if (state === 'poweredOn') {
//     noble.on('scanStart', () => {
//       console.log('i', 'started scanning');
//     })
//     noble.on('scanStop', () => {
//       console.log('i', 'finished scanning');
//     });
//     noble.on('discover', peripheral => {
//       console.log('i', 'discovered device, connecting', peripheral.id);
//       peripheral.on('connect', () => {
//         console.log('i', 'connected to device');
//         peripheral.discoverAllServicesAndCharacteristics();
//       });
//       peripheral.on('disconnect', () => {
//         console.log('i', 'disconnected from device');
//       });
//       peripheral.on('rssiUpdate', rssi => {
//         console.log('i', 'rssi updated', rssi);
//       });
//       peripheral.on('servicesDiscover', services => {
//         for (const service of services) {
//           console.log('i', 'found service', formatUUID(service.uuid));
//           service.on('characteristicsDiscover', characteristics => {
//             for (const characteristic of characteristics) {
//               console.log('i',
//                 'service', formatUUID(service.uuid),
//                 'characteristic', formatUUID(characteristic.uuid),
//                 characteristic.properties.join(',')
//               );
//             }
//           });
//         }
//       });
//       peripheral.connect(makeErrorHandler('connect'));
//     });
//     noble.startScanning([
//       '00009e00a37de411bedb50ed7800a5a5',
//     ], false, makeErrorHandler('startScanning'));
//   }
// });
//
// noble.on('warning', message => {
//   console.log('!', message);
// });
