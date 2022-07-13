const kebabize = require('../../helpers/kebabize');

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the component name? ("Button", "Select", ...)',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Location of the component? ("src/app/components")',
      },
      {
        type: 'select',
        name: 'generateTest',
        message: 'Generate test file?',
        choices: ['yes', 'no'],
      },
      {
        type: 'select',
        name: 'generateStory',
        message: 'Generate story file?',
        choices: ['yes', 'no'],
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const {
        dir,
        generateTest,
        generateStory,

        component_name: componentName,
      } = answers;

      const path = `${dir ? dir : 'src/app/components'}/${kebabize(
        componentName
      )}`;
      const componentFileName = `${kebabize(componentName)}.component`;

      return {
        ...answers,
        path,

        generateTest: generateTest === 'yes',
        generateStory: generateStory === 'yes',
        component_file_name: componentFileName,
      };
    });
  },
};
