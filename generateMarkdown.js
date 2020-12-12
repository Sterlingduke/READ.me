function generateMarkdown(data) {
    return `
  
    # ${data.projectTitle}
    
    # Table of Content
    -[description](#description)
    -[installation](#installation)
    -[usage](#usage)
    -[licenses](#licenses)
    -[contribution](#contribution)
    -[test](#test)
    -[username](#username)
    -[profile](#profile)
    
    ${data.username}
    ##username:
    
        ${data.description}
    ##description:
    
        ${data.installation}
    ##installation:
    
        ${data.usage}
    ##usage:
    
        ${data.licenses}
    ##licenses:
    
        ${data.contribution}
    ##contribution:
    
        ${data.test}
    ##test:
    
        ${data.email}
    ##email:
    
        ${data.questions}
    ##profile:
    `;
    }
    
    module.exports = generateMarkdown;