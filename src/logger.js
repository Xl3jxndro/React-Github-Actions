import log from 'loglevel';

// Detectar entorno de Vite y navegador
const isDev = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV;
log.setLevel(isDev ? 'debug' : 'warn');

export default log;
