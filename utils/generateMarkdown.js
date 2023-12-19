function generateMarkdown(data) {
    return `
  # ${data.title}

  ## Table of Contents
  1. [Description](#description)
  2. [Requirements for Installation](#requirements-for-installation)
  3. [Usage](#usage)
  4. [License Used](#license-used)
  5. [Contributors](#contributors)
  6. [Instructions for Testing](#instructions-for-testing)
  7. [Repo](#repo)
  8. [Questions](#questions)
  
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

  ## Questions
  Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;