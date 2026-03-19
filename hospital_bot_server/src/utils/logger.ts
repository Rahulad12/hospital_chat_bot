const logger = {
  info: (msg: string): void => console.log(`[INFO] ${new Date().toISOString()} - ${msg}`),
  error: (msg: string, err?: unknown): void =>
    console.error(`[ERROR] ${new Date().toISOString()} - ${msg}`, err ?? ''),
  warn: (msg: string): void => console.warn(`[WARN] ${new Date().toISOString()} - ${msg}`),
};

export default logger;