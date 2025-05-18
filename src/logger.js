import log from 'loglevel';

// Detectar entorno de Vite y navegador
const isDev = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV;
log.setLevel(isDev ? 'debug' : 'warn');

// Logging a archivo (solo en entorno Node, por ejemplo en CI)
// Evitar errores de lint: solo declarar variables si existen
let fs, logFile, originalFactory;
if (typeof process !== 'undefined' && process.release && process.release.name === 'node') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
  fs = require('fs');
  logFile = './app.log';
  originalFactory = log.methodFactory;
  log.methodFactory = function (methodName, logLevel, loggerName) {
    const rawMethod = originalFactory(methodName, logLevel, loggerName);
    return function (...args) {
      fs.appendFileSync(logFile, `[${methodName.toUpperCase()}] ${args.join(' ')}\n`);
      rawMethod(...args);
    };
  };
  log.setLevel(log.getLevel());
}

export default log;
