## System Info

- Code - Insiders: 1.53.0-insider (c265dff48a27868c7f0f84fd25a169897dc43d73)
- OS: darwin(19.6.0)
- CPUs: Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz(8 x 2800)
- Memory(System): 16.00 GB(0.06GB free)
- Memory(Process): NaN MB working set(133.72MB private, 0.10MB shared)
- VM(likelyhood): 0%
- Initial Startup: false
- Has 0 other windows
- Screen Reader Active: false
- Empty Workspace: true

## Performance Marks

| What                                                            | Duration | Process          | Info                                    |
| --------------------------------------------------------------- | -------- | ---------------- | --------------------------------------- |
| start => app.isReady                                            | -        | [main]           | initial startup: false                  |
| nls:start => nls:end                                            | -        | [main]           | initial startup: false                  |
| require(main.bundle.js)                                         | -        | [main]           | initial startup: false                  |
| app.isReady => window.loadUrl()                                 | -        | [main]           | initial startup: false                  |
| window.loadUrl() => begin to require(workbench.desktop.main.js) | 223      | [main->renderer] | NewWindow                               |
| require(workbench.desktop.main.js)                              | 335      | [renderer]       | cached data: YES, node_modules took 0ms |
| wait for shell environment                                      | 0        | [renderer]       | -                                       |
| require & init workspace storage                                | 4        | [renderer]       | -                                       |
| init workspace service                                          | 17       | [renderer]       | -                                       |
| register extensions & spawn extension host                      | 190      | [renderer]       | -                                       |
| restore viewlet                                                 | 0        | [renderer]       | -                                       |
| restore panel                                                   | 0        | [renderer]       | -                                       |
| restore editors                                                 | 4        | [renderer]       | 1: workbench.editors.welcomePageInput   |
| overall workbench load                                          | 171      | [renderer]       | -                                       |
| workbench ready                                                 | 762      | [main->renderer] | -                                       |
| renderer ready                                                  | 545      | [renderer]       | -                                       |
| extensions registered                                           | 1061     | [renderer]       | -                                       |

## Extension Activation Stats

| Extension                           | Eager | Load Code | Call Activate | Finish Activate | Event                                                 | By                                  |
| ----------------------------------- | ----- | --------- | ------------- | --------------- | ----------------------------------------------------- | ----------------------------------- |
| vscode.debug-auto-launch            | true  | 3         | 0             | 6               | \*                                                    | vscode.debug-auto-launch            |
| vscode.git                          | true  | 18        | 6             | 96              | \*                                                    | vscode.github                       |
| vscode.github                       | true  | 4         | 0             | 0               | \*                                                    | vscode.github                       |
| vscode.emmet                        | false | 6         | 1             | 1               | onStartupFinished                                     | vscode.emmet                        |
| vscode.extension-editing            | false | 19        | 1             | 5               | onLanguage:markdown                                   | vscode.extension-editing            |
| vscode.github-authentication        | false | 7         | 0             | 39              | onAuthenticationRequest:github                        | vscode.github-authentication        |
| vscode.markdown-language-features   | false | 51        | 5             | 0               | onLanguage:markdown                                   | vscode.markdown-language-features   |
| vscode.merge-conflict               | false | 4         | 1             | 0               | onStartupFinished                                     | vscode.merge-conflict               |
| vscode.microsoft-authentication     | false | 10        | 1             | 89              | onAuthenticationRequest:microsoft                     | vscode.microsoft-authentication     |
| ms-vscode.js-debug                  | false | 65        | 5             | 0               | onCommand:extension.js-debug.clearAutoAttachVariables | ms-vscode.js-debug                  |
| vscode.testing-editor-contributions | false | 2         | 0             | 0               | onStartupFinished                                     | vscode.testing-editor-contributions |

## Raw Perf Marks: main

```
Name	Timestamp	Delta	Total
code/timeOrigin	1610620613589	0	0
code/didStartMain	1610620613742	153	153
code/mainAppReady	1610620613863	121	274
code/willGenerateNls	1610620613864	1	275
code/didGenerateNls	1610620613864	0	275
code/willLoadMainBundle	1610620613878	14	289
code/fork/willLoadCode	1610620613894	16	305
code/registerFilesystem/file	1610620613976	82	387
code/didLoadMainBundle	1610620613980	4	391
code/willOpenNewWindow	1610620614152	172	563
code/willOpenNewWindow	1610625256020	4641868	4642431
code/willOpenNewWindow	1610625343199	87179	4729610
```

## Raw Perf Marks: renderer

```
Name	Timestamp	Delta	Total
code/timeOrigin	1610625343201	0	0
code/didStartRenderer	1610625343416	215	215
code/willShowPartsSplash	1610625343416	0	215
code/didShowPartsSplash	1610625343418	2	217
code/willLoadWorkbenchMain	1610625343422	4	221
code/willWaitForShellEnv	1610625343757	335	556
code/didWaitForShellEnv	1610625343757	0	556
code/didLoadWorkbenchMain	1610625343757	0	556
code/registerFilesystem/file	1610625343758	1	557
code/registerFilesystem/vscode-userdata	1610625343758	0	557
code/willInitWorkspaceService	1610625343760	2	559
code/didInitWorkspaceService	1610625343777	17	576
code/willInitWorkspaceStorage	1610625343778	1	577
code/didInitWorkspaceStorage	1610625343782	4	581
code/willStartWorkbench	1610625343790	8	589
code/LifecyclePhase/Ready	1610625343790	0	589
code/registerFilesystem/trustedDomains	1610625343832	42	631
code/willRestoreEditors	1610625343956	124	755
code/didRestoreEditors	1610625343960	4	759
code/LifecyclePhase/Restored	1610625343961	1	760
code/didStartWorkbench	1610625343961	0	760
code/didRemovePartsSplash	1610625343961	0	760
code/willLoadExtensions	1610625344070	109	869
code/willHandleExtensionPoints	1610625344151	81	950
code/didHandleExtensionPoints	1610625344253	102	1052
code/didLoadExtensions	1610625344260	7	1059
```

## Raw Perf Marks: localExtHost

```
Name	Timestamp	Delta	Total
code/timeOrigin	1610625344122	0	0
code/fork/start	1610625344234	112	112
code/fork/willLoadCode	1610625344255	21	133
code/extHost/willConnectToRenderer	1610625344426	171	304
code/extHost/didConnectToRenderer	1610625344428	2	306
code/extHost/didWaitForInitData	1610625344493	65	371
code/extHost/didCreateServices	1610625344503	10	381
code/extHost/willWaitForConfig	1610625344505	2	383
code/extHost/didWaitForConfig	1610625344526	21	404
code/extHost/didInitAPI	1610625344526	0	404
code/extHost/didInitProxyResolver	1610625344528	2	406
code/extHost/ready	1610625344528	0	406
code/extHost/willLoadExtensionCode/vscode.microsoft-authentication	1610625344535	7	413
code/extHost/didLoadExtensionCode/vscode.microsoft-authentication	1610625344545	10	423
code/extHost/willLoadExtensionCode/vscode.debug-auto-launch	1610625344546	1	424
code/extHost/didLoadExtensionCode/vscode.debug-auto-launch	1610625344549	3	427
code/extHost/willLoadExtensionCode/vscode.git	1610625344549	0	427
code/extHost/didLoadExtensionCode/vscode.git	1610625344567	18	445
code/extHost/willActivateExtension/vscode.microsoft-authentication	1610625344572	5	450
code/extHost/willActivateExtension/vscode.debug-auto-launch	1610625344573	1	451
code/extHost/willActivateExtension/vscode.git	1610625344573	0	451
code/extHost/didActivateExtension/vscode.debug-auto-launch	1610625344579	6	457
code/extHost/willLoadExtensionCode/ms-vscode.js-debug	1610625344596	17	474
code/extHost/didLoadExtensionCode/ms-vscode.js-debug	1610625344661	65	539
code/extHost/didActivateExtension/vscode.microsoft-authentication	1610625344662	1	540
code/extHost/willActivateExtension/ms-vscode.js-debug	1610625344663	1	541
code/extHost/didActivateExtension/ms-vscode.js-debug	1610625344668	5	546
code/extHost/didActivateExtension/vscode.git	1610625344675	7	553
code/extHost/willLoadExtensionCode/vscode.github	1610625344687	12	565
code/extHost/didLoadExtensionCode/vscode.github	1610625344691	4	569
code/extHost/willLoadExtensionCode/vscode.github-authentication	1610625344693	2	571
code/extHost/didLoadExtensionCode/vscode.github-authentication	1610625344700	7	578
code/extHost/willActivateExtension/vscode.github	1610625344701	1	579
code/extHost/didActivateExtension/vscode.github	1610625344701	0	579
```

## Node Cached Data Stats

### cached data used

- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/bindings-fa1cf9342e3cc9f03c4413a47ee16e49.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/clone-5e5f8ebeb23f3bdcecae065fdfc7f73d.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/graceful-fs-d9fd72a45cf5bf1b02487f11815a633b.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/index-658bb71bcd32983dc6e0e4e664ac364f.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/index-cf948f19799f065861a311185cf4448b.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/index-d88c50af7db8af72a1f9788d2cd127cd.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/legacy-streams-04aa7389e1b186dc64782779f6b04134.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/paths-65f41c17fadedc26737aca9093fced0a.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/polyfills-8862182a5c0ea9b23f61438f073687fe.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/sqlite3-0499df10dbcd62a2756495de1e432dcb.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/tas-client-umd-89a1067a913fcb1b65c852345efde050.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/workbench.desktop.main-dee26deb68b4017c6c75f4cacfdb0c1b.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/workbench.desktop.main.nls-e6f164acf4c464cf9dfac95d43f62cb5.code

### cached data missed

- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/main-60fdb0f73c64d4e38e0fc7b08f1269a3.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/main-fda5377775f0fd157b980d58e68efb85.code

### cached data rejected

### cached data created (lazy, might need refreshes)
