export function requireEnv(name) {
  const value = process.env[name];
  if (typeof value === "string" && value.trim().length > 0) return value;

  const err = new Error(`Missing required environment variable: ${name}`);
  err.code = "ERR_MISSING_ENV";
  throw err;
}

export function getJwtSecret() {
  // Support a couple of common aliases so deployments don't break on naming.
  return (
    process.env.JWT_SECRET ||
    process.env.JWT_SECRET_KEY ||
    process.env.SECRET_KEY ||
    requireEnv("JWT_SECRET")
  );
}
