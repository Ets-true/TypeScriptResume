export const getProfileRoute = (login: string = ''): string =>
  '/:login'.replace(/:login/g, login);
