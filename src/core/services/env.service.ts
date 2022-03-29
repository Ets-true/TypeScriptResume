export enum EnvNamesEnum {
  apiPrefix = 'API_PREFIX',
}

interface EnvServiceInterface {
  get(varName: EnvNamesEnum): any;
}

class EnvService implements EnvServiceInterface {
  get(varName: EnvNamesEnum) {
    return process.env[`REACT_APP_${varName}`];
  }
}

const env = new EnvService();

export default env;
