// this is to add to the readMe doc 

module.exports = templateData => {
    console.log(templateData);
  
    return `
# README.md Generator 

## Project Title: ${templateData.title}

* Description: ${templateData.description}

* Installation:${templateData.installation}

* Usage: ${templateData.usage}

* Who Contributied: ${templateData.contributors}

* Tests: ${templateData.tests}

* Questions:${templateData.githubUsername},
            ${templateData.email}
`;
  };
  