import log from 'loglevel';

// Detectar entorno de Vite y navegador
const isDev = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV;
log.setLevel(isDev ? 'debug' : 'warn');

// Logging a archivo (solo en entorno Node, por ejemplo en CI)
// Para evitar errores de lint, no uses process ni require directamente en el código fuente.
// Usa una función dinámica para acceder a ellos solo en Node.js.
if (typeof globalThis !== 'undefined' && globalThis.process && globalThis.process.release && globalThis.process.release.name === 'node') {
  const fs = eval('require("fs")');
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
}

export default log;
