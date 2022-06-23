export enum EnvNamesEnum {
  apiPrefix = 'API_PREFIX',
  companyName = 'COMPANY_NAME',
  authRequired = 'AUTH_REQUIRED',
}

interface EnvServiceInterface {
  get(varName: EnvNamesEnum): any;
}

class EnvService implements EnvServiceInterface {
  get(varName: EnvNamesEnum) {
    const value = process.env[`REACT_APP_${varName}`];

    switch (value) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        return process.env[`REACT_APP_${varName}`];
    }
  }
}

const env = new EnvService();

export default env;
