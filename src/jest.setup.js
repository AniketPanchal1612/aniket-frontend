import matchMediaPolyfill from 'match-media';

// Provide support for window.matchMedia in the test environment
window.matchMedia = window.matchMedia || matchMediaPolyfill;
