// this is to add to the readMe doc 

module.exports = templateData => {
    console.log(templateData);
  
    return `
# README.md Generator 

Project Title: ${templateData.title}

Description: ${templateData.description}

Table Of Contents:${templateData.toc}

Installation:

Usage: 

Who Contributied: 

Tests: 

Questions:

    `;
  };
  