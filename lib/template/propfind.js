import prop from './prop';

export default function propfind(object) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <A:propfind xmlns:A="DAV:">
    <A:prop>
      ${object.props.map(prop).join('\n')}
    </A:prop>
  </A:propfind>`;
}
