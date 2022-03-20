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
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { page_name: pageName, dir } = answers;

      let camelName = `${camelize(kebabize(pageName))}`;
      camelName[0] = camelName[0].toLowerCase();

      const path = `${dir ? dir : 'src/app'}/${kebabize(pageName)}`;
      const kebabName = `${kebabize(pageName)}`;
      const pageFileName = `${kebabize(pageName)}.page`;
      const srcRelativePath = path.replace('src/', '');

      return {
        ...answers,
        path,

        camel_name: camelName,
        kebab_name: kebabName,
        page_file_name: pageFileName,
        src_relative_path: srcRelativePath,
      };
    });
  },
};
