/*
 * Spotify's server response is authoritative for account licensing and device
 * capabilities. Do not synthesize Premium or HiFi flags: inconsistent values
 * can make the client request a playback path the account cannot use.
 * $done({}) leaves the original response unchanged.
 */
console.log('spotifyjson2-safe-pass-through');
$done({});
