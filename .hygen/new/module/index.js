const kebabize = require('../../kebabize');
const camelize = require('../../camelize');

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'module_name',
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
    ];

    return inquirer.prompt(questions).then((answers) => {
      const {
        dir,
        route,
        module_name: moduleName,
        protected_route: protectedRoute,
      } = answers;

      let camelName = `${camelize(kebabize(moduleName))}`;
      camelName[0] = camelName[0].toLowerCase();

      const path = `${dir ? dir : 'src/app'}/${kebabize(moduleName)}`;
      const protected = protectedRoute === 'yes';
      const kebabName = `${kebabize(moduleName)}`;
      const kebabRoute = `${kebabize(route || moduleName)}`;
      const sagaFileName = `${kebabize(moduleName)}.saga`;
      const moduleFileName = `${kebabize(moduleName)}.module`;
      const routeFileName = `${kebabize(moduleName)}.route`;
      const srcRelativePath = path.replace('src/', '');

      return {
        ...answers,
        path,
        protected,

        camel_name: camelName,
        kebab_name: kebabName,
        kebab_route: kebabRoute,
        saga_file_name: sagaFileName,
        module_file_name: moduleFileName,
        route_file_name: routeFileName,
        src_relative_path: srcRelativePath,
      };
    });
  },
};
