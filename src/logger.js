import log from 'loglevel';

// Detectar entorno de Vite y navegador
const isDev = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV;
log.setLevel(isDev ? 'debug' : 'warn');

// Logging a archivo (solo en entorno Node, por ejemplo en CI)
if (typeof process !== 'undefined' && process.release && process.release.name === 'node') {
  try {
    const fs = require('fs');
    const logFile = './app.log';
    const originalFactory = log.methodFactory;
    log.methodFactory = function (methodName, logLevel, loggerName) {
      const rawMethod = originalFactory(methodName, logLevel, loggerName);
      return function (...args) {
        fs.appendFileSync(logFile, `[${methodName.toUpperCase()}] ${args.join(' ')}\n`);
        rawMethod(...args);
      };
    };
    log.setLevel(log.getLevel());
  } catch (e) {
    // No hacer nada si require falla (por ejemplo, en navegador)
  }
}

export default log;
