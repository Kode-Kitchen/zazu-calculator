module.exports = {
  name: 'Calculator',
  version: '0.0.1',
  author: 'blainesch',
  description: 'Calculate stuff.',
  icon: 'icon.png',
  homepage: 'https://github.com/tinytacoteam/calculator',
  git: 'git@github.com:tinytacoteam/calculator.git',
  blocks: {
    input: [
      {
        id: 1,
        type: 'RootScript',
        respondsTo: (input) => {
          const hasEquation = input.match(/^[\d\.\(\)\+\-*\/\s]+$/)
          const hasNumbers = input.match(/\d/)
          return hasEquation && hasNumbers
        },
        script: 'node calculator.js {query}',
        connections: [2],
      },
    ],
    output: [
      {
        id: 2,
        type: 'CopyToClipboard',
      },
    ],
  },
}
