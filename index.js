var r = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?) *\. *){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
function toInteger (ipv4) {
  if (!r.test(ipv4)) {
    throw new Error('error ipv4');
  }
  let segments = ipv4.split('.')
  return (+segments[0] * 16777216) + (+segments[1] * 65536) + (+segments[2] * 256) + (+segments[3]);
}

module.exports = toInteger;
