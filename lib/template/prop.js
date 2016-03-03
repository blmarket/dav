import * as ns from '../namespace';

/**
 * @param {Object} filter looks like
 *
 *     {
 *       type: 'comp-filter',
 *       attrs: {
 *         name: 'VCALENDAR'
 *       }
 *     }
 *
 * Or maybe
 *
 *     {
 *       type: 'time-range',
 *       attrs: {
 *         start: '20060104T000000Z',
 *         end: '20060105T000000Z'
 *       }
 *     }
 *
 * You can nest them like so:
 *
 *     {
 *       type: 'comp-filter',
 *       attrs: { name: 'VCALENDAR' },
 *       children: [{
 *         type: 'comp-filter',
 *         attrs: { name: 'VEVENT' },
 *         children: [{
 *           type: 'time-range',
 *           attrs: { start: '20060104T000000Z', end: '20060105T000000Z' }
 *         }]
 *       }]
 *     }
 */
export default function prop(item) {
  return `<${xmlnsPrefix(item.namespace)}:${item.name} ${xmlnsPostfix(item.namespace)}/>`;
}

function xmlnsPostfix(namespace) {
  switch (namespace) {
    case ns.CALDAV:
      return 'xmlns:B="urn:ietf:params:xml:ns:caldav"';
    case ns.CALENDAR_SERVER:
      return 'xmlns:C="http://calendarserver.org/ns/"';
    default:
      return '';
  }
}

function xmlnsPrefix(namespace) {
  switch (namespace) {
    case ns.DAV:
      return 'A';
    case ns.CALENDAR_SERVER:
      return 'C';
    case ns.CALDAV:
      return 'B';
    case ns.CARDDAV:
      return 'card';
    default:
      throw new Error('Unrecognized xmlns ' + namespace);
  }
}
