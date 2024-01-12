import { ILoggerLevel, Logger, setGlobalLogLevel } from 'ah-logger';

const LOGGER_LEVEL = 'LOGGER_LEVEL';

if (typeof localStorage !== 'undefined') {
  // 从 localStorage 中读取初始日志级别
  const _initGlLogLevel = (ILoggerLevel as any)[localStorage.getItem(LOGGER_LEVEL) || 'INFO'];
  setGlobalLogLevel(_initGlLogLevel);

  // 监听 localStorage 中日志级别的变化
  window.addEventListener('storage', ev => {
    if (ev.key === LOGGER_LEVEL) {
      setGlobalLogLevel(ev.newValue ? (ILoggerLevel as any)[ev.newValue] : null);
    }
  });
}

export const DefaultBizLogger = new Logger('DEFAULT');
