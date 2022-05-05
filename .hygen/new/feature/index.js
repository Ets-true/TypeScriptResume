const kebabize = require('../../kebabize');
const featuresPath = 'src/core/features';
const relativePath = 'core/features';

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        name: 'pluralName',
        type: 'input',
        message: 'What is the feature plural name? ("users", "images", ...)',
      },
      {
        name: 'singularName',
        type: 'input',
        message: 'What is the feature singular name? ("user", "image", ...)',
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { pluralName } = answers;

      const path = `${featuresPath}/${kebabize(pluralName)}`;
      const sagaPath = `${relativePath}/${kebabize(pluralName)}/${kebabize(
        pluralName
      )}.saga`;
      const slicePath = `${relativePath}/${kebabize(pluralName)}/${kebabize(
        pluralName
      )}.slice`;
      const actionsPath = `${relativePath}/${kebabize(pluralName)}/${kebabize(
        pluralName
      )}.actions`;

      return {
        ...answers,
        path,
        sagaPath,
        slicePath,
        actionsPath,
      };
    });
  },
};
