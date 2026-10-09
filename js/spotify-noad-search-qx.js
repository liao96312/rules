// Quantumult X binary response body adapter for Spotify browse/search responses.
const input = $response.bodyBytes;
if (!input) {
  $done({});
} else {
  const body = new Uint8Array(input);
  const limit = Math.min(666, body.length);

  function readVarint(buffer, offset) {
    let result = 0;
    let shift = 0;
    let pos = offset;
    while (pos < buffer.length && shift < 35) {
      const byte = buffer[pos++];
      result |= (byte & 0x7f) << shift;
      if ((byte & 0x80) === 0) {
        return { value: result >>> 0, length: pos - offset };
      }
      shift += 7;
    }
    return null;
  }

  let changed = false;
  for (let i = 0; i < limit; i++) {
    if (body[i] === 0x32) {
      const field = readVarint(body, i + 1);
      if (field && field.value > 12000) {
        body[i] = 0x7a;
        changed = true;
        console.log(`Spotify search ad field tag changed at offset ${i}`);
        break;
      }
    }
  }

  if (changed) {
    const bytes = body.buffer.slice(body.byteOffset, body.byteOffset + body.byteLength);
    $done({ bodyBytes: bytes });
  } else {
    $done({});
  }
}
