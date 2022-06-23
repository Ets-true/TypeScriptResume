import env, { EnvNamesEnum } from 'core/services/env.service';

export const isRequiredAuth = () =>
  env.get(EnvNamesEnum.authRequired) as boolean;
