const services = [
    "help",
]

services.sort()

console.log(`  strm
  ^^^^

Description
***********
A Command-Line Interface for 
Interaction with Cloud Services

Available Commands
******************

${services.map(v=>`*${v}`).join('\n\n')}`)
