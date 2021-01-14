## System Info

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

## Performance Marks

| What                                                            | Duration | Process          | Info                                    |
| --------------------------------------------------------------- | -------- | ---------------- | --------------------------------------- |
| start => app.isReady                                            | -        | [main]           | initial startup: false                  |
| nls:start => nls:end                                            | -        | [main]           | initial startup: false                  |
| require(main.bundle.js)                                         | -        | [main]           | initial startup: false                  |
| app.isReady => window.loadUrl()                                 | -        | [main]           | initial startup: false                  |
| window.loadUrl() => begin to require(workbench.desktop.main.js) | 156      | [main->renderer] | NewWindow                               |
| require(workbench.desktop.main.js)                              | 271      | [renderer]       | cached data: YES, node_modules took 0ms |
| wait for shell environment                                      | 0        | [renderer]       | -                                       |
| require & init workspace storage                                | 4        | [renderer]       | -                                       |
| init workspace service                                          | 31       | [renderer]       | -                                       |
| register extensions & spawn extension host                      | 139      | [renderer]       | -                                       |
| restore viewlet                                                 | 0        | [renderer]       | -                                       |
| restore panel                                                   | 0        | [renderer]       | -                                       |
| restore editors                                                 | 5        | [renderer]       | 1: workbench.editors.welcomePageInput   |
| overall workbench load                                          | 110      | [renderer]       | -                                       |
| workbench ready                                                 | 571      | [main->renderer] | -                                       |
| renderer ready                                                  | 421      | [renderer]       | -                                       |
| extensions registered                                           | 835      | [renderer]       | -                                       |

## Extension Activation Stats

| Extension                         | Eager | Load Code | Call Activate | Finish Activate | Event                                                 | By                                |
| --------------------------------- | ----- | --------- | ------------- | --------------- | ----------------------------------------------------- | --------------------------------- |
| vscode.debug-auto-launch          | true  | 2         | 0             | 6               | \*                                                    | vscode.debug-auto-launch          |
| vscode.git                        | true  | 16        | 5             | 96              | \*                                                    | vscode.github                     |
| vscode.github                     | true  | 3         | 2             | 0               | \*                                                    | vscode.github                     |
| vscode.emmet                      | false | 4         | 1             | 2               | onStartupFinished                                     | vscode.emmet                      |
| vscode.github-authentication      | false | 5         | 1             | 16              | onAuthenticationRequest:github                        | vscode.github-authentication      |
| vscode.markdown-language-features | false | 46        | 4             | 0               | onLanguage:markdown                                   | vscode.markdown-language-features |
| vscode.merge-conflict             | false | 2         | 1             | 0               | onStartupFinished                                     | vscode.merge-conflict             |
| vscode.microsoft-authentication   | false | 7         | 1             | 90              | onAuthenticationRequest:microsoft                     | vscode.microsoft-authentication   |
| ms-vscode.js-debug                | false | 56        | 6             | 0               | onCommand:extension.js-debug.clearAutoAttachVariables | ms-vscode.js-debug                |

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
code/willOpenNewWindow	1610625822059	478860	5208470
code/willOpenNewWindow	1610625829830	7771	5216241
```

## Raw Perf Marks: renderer

```
Name	Timestamp	Delta	Total
code/timeOrigin	1610625829832	0	0
code/didStartRenderer	1610625829980	148	148
code/willShowPartsSplash	1610625829981	1	149
code/didShowPartsSplash	1610625829982	1	150
code/willLoadWorkbenchMain	1610625829986	4	154
code/willWaitForShellEnv	1610625830257	271	425
code/didWaitForShellEnv	1610625830257	0	425
code/didLoadWorkbenchMain	1610625830257	0	425
code/registerFilesystem/file	1610625830258	1	426
code/registerFilesystem/vscode-userdata	1610625830258	0	426
code/willInitWorkspaceService	1610625830260	2	428
code/willInitWorkspaceStorage	1610625830272	12	440
code/didInitWorkspaceStorage	1610625830276	4	444
code/didInitWorkspaceService	1610625830291	15	459
code/willStartWorkbench	1610625830291	0	459
code/LifecyclePhase/Ready	1610625830292	1	460
code/registerFilesystem/trustedDomains	1610625830331	39	499
code/willRestoreEditors	1610625830396	65	564
code/didRestoreEditors	1610625830401	5	569
code/LifecyclePhase/Restored	1610625830401	0	569
code/didStartWorkbench	1610625830401	0	569
code/didRemovePartsSplash	1610625830401	0	569
code/willLoadExtensions	1610625830526	125	694
code/willHandleExtensionPoints	1610625830604	78	772
code/didHandleExtensionPoints	1610625830660	56	828
code/didLoadExtensions	1610625830665	5	833
```

## Raw Perf Marks: localExtHost

```
Name	Timestamp	Delta	Total
code/timeOrigin	1610625830574	0	0
code/fork/start	1610625830647	73	73
code/fork/willLoadCode	1610625830664	17	90
code/extHost/willConnectToRenderer	1610625830788	124	214
code/extHost/didConnectToRenderer	1610625830790	2	216
code/extHost/didWaitForInitData	1610625830832	42	258
code/extHost/didCreateServices	1610625830839	7	265
code/extHost/willWaitForConfig	1610625830841	2	267
code/extHost/didWaitForConfig	1610625830853	12	279
code/extHost/didInitAPI	1610625830853	0	279
code/extHost/didInitProxyResolver	1610625830855	2	281
code/extHost/ready	1610625830855	0	281
code/extHost/willLoadExtensionCode/vscode.microsoft-authentication	1610625830859	4	285
code/extHost/didLoadExtensionCode/vscode.microsoft-authentication	1610625830866	7	292
code/extHost/willLoadExtensionCode/vscode.debug-auto-launch	1610625830867	1	293
code/extHost/didLoadExtensionCode/vscode.debug-auto-launch	1610625830868	1	294
code/extHost/willLoadExtensionCode/vscode.git	1610625830869	1	295
code/extHost/didLoadExtensionCode/vscode.git	1610625830885	16	311
code/extHost/willActivateExtension/vscode.microsoft-authentication	1610625830890	5	316
code/extHost/willActivateExtension/vscode.debug-auto-launch	1610625830891	1	317
code/extHost/willActivateExtension/vscode.git	1610625830891	0	317
code/extHost/didActivateExtension/vscode.debug-auto-launch	1610625830897	6	323
code/extHost/willLoadExtensionCode/ms-vscode.js-debug	1610625830917	20	343
code/extHost/didLoadExtensionCode/ms-vscode.js-debug	1610625830973	56	399
code/extHost/willActivateExtension/ms-vscode.js-debug	1610625830974	1	400
code/extHost/didActivateExtension/ms-vscode.js-debug	1610625830980	6	406
code/extHost/didActivateExtension/vscode.microsoft-authentication	1610625830981	1	407
code/extHost/didActivateExtension/vscode.git	1610625830992	11	418
code/extHost/willLoadExtensionCode/vscode.github	1610625831004	12	430
code/extHost/didLoadExtensionCode/vscode.github	1610625831007	3	433
code/extHost/willActivateExtension/vscode.github	1610625831033	26	459
code/extHost/didActivateExtension/vscode.github	1610625831035	2	461
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
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/main-60fdb0f73c64d4e38e0fc7b08f1269a3.code
- /Users/marvinheilemann/Library/Application Support/Code -
  Insiders/CachedData/c265dff48a27868c7f0f84fd25a169897dc43d73/main-fda5377775f0fd157b980d58e68efb85.code
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

### cached data rejected

### cached data created (lazy, might need refreshes)
