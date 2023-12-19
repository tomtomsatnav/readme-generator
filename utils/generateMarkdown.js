function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Requirements for Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License Used
  ${data.licenses}
  
  ## Contributors
  ${data.contributorsQuestion === 'yes' ? data.contributors : 'none'}
  
  ## Instructions for Testing
  ${data.tests}

  ## Repo
  [Click here for repo](https://www.github.com/${data.github}/${data.title})

  ## Contact for any questions
  Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;