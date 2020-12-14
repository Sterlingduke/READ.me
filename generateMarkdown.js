function generateMarkdown(data) {
    return `
  
    ##${data.projectTitle}
    
    ##Table of Content
    -[description](#description)
    -[installation](#installation)
    -[usage](#usage)
    -[licenses](#licenses)
    -[contribution](#contribution)
    -[test](#test)
    -[username](#username)
    -[profile](#profile)


     ##username:
        ${data.username}
  
     ##description:
        ${data.description}
     ##technology
        ${data.technology}
   
     ##installation:
        ${data.installation}
   
     ##usage:
        ${data.usage}
 
     ##licenses:
        ${data.licenses}
  
     ##contribution:
        ${data.contribution}
   
     ##test:
        ${data.test}
   
     ##email:
        ${data.email}
    
     ##profile:
        ${data.questions}
    
    `;
    }
    
    module.exports = generateMarkdown;