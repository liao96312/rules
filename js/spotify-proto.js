/*
 * Preserve Spotify's server-owned subscription, playback, and device
 * capabilities. The previous protobuf rewrite synthesized account entitlements
 * that could conflict with the real account and interrupt playback.
 * Pass the response through unchanged.
 */
$done({});
