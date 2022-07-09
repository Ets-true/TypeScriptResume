const kebabize = require('../../helpers/kebabize');
const featuresPath = 'src/core/features';
const relativePath = 'core/features';

const { FEATURE_STATES } = require('../../helpers/constants');

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
      {
        type: 'select',
        name: 'stateType',
        message: 'Feature state',
        choices: [...FEATURE_STATES],
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { pluralName, singularName } = answers;

      const path = `${featuresPath}/${kebabize(pluralName)}`;
      const sagaPath = `${relativePath}/${kebabize(pluralName)}/${kebabize(
        pluralName
      )}.saga`;
      const storePath = `${relativePath}/${kebabize(pluralName)}/${kebabize(
        pluralName
      )}.store`;
      const slicePath = `${relativePath}/${kebabize(pluralName)}/${kebabize(
        pluralName
      )}.slice`;
      const actionsPath = `${relativePath}/${kebabize(pluralName)}/${kebabize(
        pluralName
      )}.actions`;
      const pluralPascalName = `${pluralName[0].toUpperCase()}${pluralName.substring(
        1
      )}`;
      const singularPascalName = `${singularName[0].toUpperCase()}${singularName.substring(
        1
      )}`;

      return {
        ...answers,
        path,
        sagaPath,
        storePath,
        slicePath,
        actionsPath,
        pluralPascalName,
        singularPascalName,
      };
    });
  },
};
