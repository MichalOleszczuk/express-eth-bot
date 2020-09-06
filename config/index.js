const joi = require('joi');
const path = require('path');

const envVarsSchema = joi
  .object({
    NODE_ENV: joi.string().allow('development', 'production', 'test', 'provision').default('development'),
    MORGAN_LOGGER_LEVEL: joi.string().allow('common', 'combined', 'dev', 'short', 'tiny').default('common'),
    EXPRESS_HOST: joi.string().default('127.0.0.1'),
    EXPRESS_PORT: joi.number().default(3000),
    LOGS_PATH: joi.string().default(path.resolve(__dirname, '../logs')),
    LOGS_INTERVAL: joi.string().default('1d'),
    LOGS_SIZE: joi.string().default('10M'),
  })
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = Object.freeze(envVars);
