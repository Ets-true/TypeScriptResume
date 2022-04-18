const kebabize = require('../../kebabize');

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
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { component_name: componentName, dir } = answers;

      const path = `${dir ? dir : 'src/app/components'}/${kebabize(
        componentName
      )}`;
      const componentFileName = `${kebabize(componentName)}.component`;

      return { ...answers, path, component_file_name: componentFileName };
    });
  },
};
