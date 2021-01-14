const vscode = require('vscode')
const prettier = require('prettier')

const output = vscode.window.createOutputChannel('vscode-helper')

function makeMd(ext) {
  return `|${ext.id}|${ext.extensionKind}|`
}

async function runCommand() {
  const extensions = vscode.extensions.all.map((ext) => ({
    id: ext.id,
    extensionKind: ext.extensionKind,
    isBuiltIn: ext.packageJSON.isBuiltin,
    isActive: ext.isActive,
  }))

  extensions.forEach((ext) => {
    output.append(JSON.stringify(ext, null, 2))
  })

  const activated = extensions
    .filter((ext) => ext.isActive)
    .filter((ext) => !ext.isBuiltIn)
    .map(makeMd)
  const activatedBuiltin = extensions
    .filter((ext) => ext.isActive)
    .filter((ext) => ext.isBuiltIn)
    .map(makeMd)

  const deactivated = extensions
    .filter((ext) => !ext.isActive)
    .filter((ext) => !ext.isBuiltIn)
    .map(makeMd)
  const deactivatedBuiltin = extensions
    .filter((ext) => !ext.isActive)
    .filter((ext) => ext.isBuiltIn)
    .map(makeMd)

  const content = `
# Extensions

## Active (${activated.length})

|ID|Kind|
|-|-|
${activated.join('\n')}

### Builtin (${activatedBuiltin.length})

|ID|Kind|
|-|-|
${activatedBuiltin.join('\n')}

## Inactive (${deactivated.length})

|ID|Kind|
|-|-|
${deactivated.join('\n')}

### Builtin (${deactivatedBuiltin.length})

|ID|Kind|
|-|-|
${deactivatedBuiltin.join('\n')}

## Raw (${extensions.length})
\`\`\`json
${JSON.stringify(extensions, null, 2)}
\`\`\`
        `

  const contentFormatted = prettier.format(content, {
    parser: 'markdown',
  })

  await vscode.workspace.openTextDocument({
    language: 'markdown',
    content: contentFormatted,
  })
}

async function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('vscode-helper.log-extensions', runCommand)
  )
}

module.exports = {
  activate,
}
