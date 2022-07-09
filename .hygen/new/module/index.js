const kebabize = require('../../helpers/kebabize');
const camelize = require('../../helpers/camelize');
const pascalize = require('../../helpers/pascalize');
const { FEATURE_STATES, paths } = require('../../helpers/constants');

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'moduleName',
        message: 'What is the module component name? ("Ui", "Auth", ...)',
      },

      {
        type: 'input',
        name: 'dir',
        message: 'Location of the module? ("src/app")',
      },

      {
        type: 'select',
        name: 'protected_route',
        message: 'It is a protected route?',
        choices: ['yes', 'no'],
      },

      {
        type: 'input',
        name: 'route',
        message: 'Enter route name ("home", "..."). Empty to use module name:',
      },

      {
        type: 'select',
        name: 'stateType',
        message: 'Feature state',
        choices: [...FEATURE_STATES],
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const {
        dir,
        route,
        moduleName,
        protected_route: protectedRoute,
      } = answers;

      let camelName = `${camelize(kebabize(moduleName))}`;
      camelName[0] = camelName[0].toLowerCase();

      const path = `${dir ? dir : 'src/app'}/${kebabize(moduleName)}`;
      const protected = protectedRoute === 'yes';
      const kebabName = `${kebabize(moduleName)}`;
      const pascalName = `${pascalize(kebabize(moduleName))}`;
      const kebabRoute = `${kebabize(route || moduleName)}`;
      const sagaFileName = `${kebabize(moduleName)}.saga`;
      const routeFileName = `${kebabize(moduleName)}.route`;
      const moduleFileName = `${kebabize(moduleName)}.module`;
      const srcRelativePath = path.replace('src/', '');

      const moduleMobxStorePath = `${srcRelativePath}/${kebabName}.store`;

      return {
        ...answers,
        path,
        paths,
        protected,
        camelName,
        kebabName,
        pascalName,
        kebabRoute,
        sagaFileName,
        routeFileName,
        moduleFileName,
        srcRelativePath,
        moduleMobxStorePath,
      };
    });
  },
};
