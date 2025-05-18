import log from 'loglevel';

// Configuración global del nivel de log
log.setLevel(process.env.NODE_ENV === 'development' ? 'debug' : 'warn');

export default log;
