const kebabize = require('../../kebabize');
const camelize = require('../../camelize');

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'page_name',
        message: 'What is the page component name? ("Ui", "Auth", ...)',
      },

      {
        type: 'input',
        name: 'dir',
        message: 'Location of the page? ("src/app")',
      },

      {
        type: 'select',
        name: 'protected_route',
        message: 'It is a protected route?',
        choices: ['yes', 'no'],
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const {
        dir,
        page_name: pageName,
        protected_route: protectedRoute,
      } = answers;

      let camelName = `${camelize(kebabize(pageName))}`;
      camelName[0] = camelName[0].toLowerCase();

      const path = `${dir ? dir : 'src/app'}/${kebabize(pageName)}`;
      const protected = protectedRoute === 'yes';
      const kebabName = `${kebabize(pageName)}`;
      const sagaFileName = `${kebabize(pageName)}.saga`;
      const pageFileName = `${kebabize(pageName)}.page`;
      const routeFileName = `${kebabize(pageName)}.route`;
      const srcRelativePath = path.replace('src/', '');

      return {
        ...answers,
        path,
        protected,

        camel_name: camelName,
        kebab_name: kebabName,
        saga_file_name: sagaFileName,
        page_file_name: pageFileName,
        route_file_name: routeFileName,
        src_relative_path: srcRelativePath,
      };
    });
  },
};
