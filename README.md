> https://github.com/microsoft/vscode/issues/114355

Many developers do not only touch one language during their life so VS Code extensions and settings can get a real mess after some time, especially if you have two or more languages you deeply care about to have ideal environments and developer experience.

I would like to present an idea about environments that hold extensions and settings for specific languages (identifiers).

The performance increase is not huge (see [tests](#tests)) in my example TypeScript project but it can be higher in other projects, it totally depends on activated global extensions. If e.g. you are a Go dev and try out React you would have an isolated environment from your Go settings, so nothing messes around and you can remove/uninstall stuff easier later (with a command like "Uninstall extensions from environment") and we could replace `"[python]": { }` for example.

### What would environments do and what are they?

You would install all extension you need globally like you do currently but then choose which are not ideally to use in a global scope or new workspace/project. For example Rust extensions when you are a frontend developer who mainly codes in JavaScript. Most extension wont activate in certain workspaces but still be loaded on startup.

After that you create a new environment (via command "Add new environment") and add VS Code settings and extension that you would like to activate explicitly for it.

VS Code will test each on startup and cache environment changes and their workspace. If either changes it will test again. This should speed up recuring start up times so it does not need to do identification tests again everytime. (wip)

The auto-detection can be disabled, so you choose an environment manually via "Select environment".

Editing environments can be done through the standard VS Code settings panel or manually in a JSON format.

Bonus: An option to async load an environment to apply settings/extensions. to speed up start up times. If it has extensions that require a reload it will reload after it has cached the environment or display a hint with a reload now button.

The format for environments would be as follow:

<details><summary>Environments</summary>

```jsonc
[
  {
    // For the cache to create
    "name": "python",
    // For the extension panel or manual selection
    "label": "Python",
    // Identifiers auto activate this environment for you.
    // For performance reasons it will not search anything recursively
    // but you can choose if you want that. This is optional!
    "identify": {
      // If a .py file was found
      "extensions": [".py"],
      // If a file with language python was found
      "languages": ["python"],
      // If a file `.python-version` etc. was found (regex allowed)
      "files": [".python-version", "requirements.txt"],
      // If e.g. extensions should be search recursively (default: false)
      "recursively": false
    },
    // Settings only for this environment
    "settings": {
      // This allows us to no longer need to do `"[python]": { }`
      "editor.defaultFormatter": "ms-python.vscode-pylance",
      // All settings are allowed
      "python.languageServer": "Pylance",
      "python.linting.enabled": true,
      "python.linting.pylintEnabled": true,
      "python.showStartPage": false,
      "python.venvPath": "~/.pyenv"
    },
    // Extensions that should be enabled
    "extensions": [
      "vscode.python", // builtin's are supported as well
      "visualstudioexptteam.vscodeintellicode",
      "ms-python.python",
      "ms-python.vscode-pylance",
      "ms-toolsai.jupyter"
    ]
  }
]
```

</details>

> In my case it would reduce my extensions from 156 to 92 with builtin extensions in an TypeScript project, see below.

### Benchmarks

#### System Info

- Code - Insiders: 1.53.0-insider (c265dff48a27868c7f0f84fd25a169897dc43d73)
- OS: darwin(19.6.0)
- CPUs: Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz(8 x 2800)
- Memory(System): 16.00 GB(0.26GB free)
- Memory(Process): NaN MB working set(100.37MB private, 0.10MB shared)
- VM(likelyhood): 0%
- Initial Startup: false
- Has 0 other windows
- Screen Reader Active: false
- Empty Workspace: true

#### Tests

Tests can vary. I tested through a example VS Code extensions launcher.

1. Opened test extension workspace
2. Adjusted extensions and settings
3. Run launcher in TypeScript or empty workspace a few times
4. Collected "Startup Performance" report
5. Collected installed extensions through test extension

| Setup | Startup time (ms) | Extensions load (ms) | Extensions count | Description |
| --- | --- | --- | --- | --- |
| Vanilla | 3312 | 445 | default | No changes. |
| Minimal | 2543 | 372 | [42](benchmarks/MinimalExtensions.md) | Deactivated all extensions not related to web + go,rust,python |
| Recommended Markdown | 5772 | 4743 | [86](benchmarks/RecommendedExtensions.md) | Added some personal recommended extensions and settings |
| Recommended TypeScript | 6579 | 5423 | [126](benchmarks/RecommendedTypeScriptExtensions.md) | above plus TypeScript/Angular stuff |
| All TypeScript | 6339 | 28188 | [156](benchmarks/AllExtensions.md) | All extensions activated + my extensions |
| Only TypeScript | 6120 | 13617 | [92](benchmarks/OnlyTypeScriptExtensions.md) | What I would use only for TypeScript + Angular |
