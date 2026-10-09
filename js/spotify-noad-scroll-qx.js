// Quantumult X binary response body adapter for Spotify scroll responses.
const input = $response.bodyBytes;
if (!input) {
  $done({});
} else {
  const body = new Uint8Array(input);
  const limit = Math.min(666, Math.max(0, body.length - 1));
  let changed = false;

  for (let i = 0; i < limit; i++) {
    if (body[i] === 0xf2 && body[i + 1] === 0x01) {
      body[i] = 0xf7;
      body[i + 1] = 0x07;
      changed = true;
      console.log(`Spotify scroll ad field tag changed at offset ${i}`);
      break;
    }
  }

  if (changed) {
    const bytes = body.buffer.slice(body.byteOffset, body.byteOffset + body.byteLength);
    $done({ bodyBytes: bytes });
  } else {
    $done({});
  }
}
