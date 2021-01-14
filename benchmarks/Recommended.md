## System Info

- Code - Insiders: 1.53.0-insider (c265dff48a27868c7f0f84fd25a169897dc43d73)
- OS: darwin(19.6.0)
- CPUs: Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz(8 x 2800)
- Memory(System): 16.00 GB(0.79GB free)
- Memory(Process): NaN MB working set(132.92MB private, 0.57MB shared)
- VM(likelyhood): 0%
- Initial Startup: false
- Has 1 other windows
- Screen Reader Active: false
- Empty Workspace: true

## Performance Marks

| What                                                            | Duration | Process          | Info                                       |
| --------------------------------------------------------------- | -------- | ---------------- | ------------------------------------------ |
| start => app.isReady                                            | -        | [main]           | initial startup: false                     |
| nls:start => nls:end                                            | -        | [main]           | initial startup: false                     |
| require(main.bundle.js)                                         | -        | [main]           | initial startup: false                     |
| app.isReady => window.loadUrl()                                 | -        | [main]           | initial startup: false                     |
| window.loadUrl() => begin to require(workbench.desktop.main.js) | 191      | [main->renderer] | ReloadedWindow                             |
| require(workbench.desktop.main.js)                              | 303      | [renderer]       | cached data: YES, node_modules took 0ms    |
| wait for shell environment                                      | 0        | [renderer]       | -                                          |
| require & init workspace storage                                | 43       | [renderer]       | -                                          |
| init workspace service                                          | 46       | [renderer]       | -                                          |
| register extensions & spawn extension host                      | 722      | [renderer]       | -                                          |
| restore viewlet                                                 | 42       | [renderer]       | workbench.view.explorer                    |
| restore panel                                                   | 30       | [renderer]       | workbench.panel.output                     |
| restore editors                                                 | 337      | [renderer]       | 1: workbench.editors.files.fileEditorInput |
| overall workbench load                                          | 517      | [renderer]       | -                                          |
| workbench ready                                                 | 1067     | [main->renderer] | -                                          |
| renderer ready                                                  | 884      | [renderer]       | -                                          |
| extensions registered                                           | 1590     | [renderer]       | -                                          |

## Extension Activation Stats

| Extension                             | Eager | Load Code | Call Activate | Finish Activate | Event                                                 | By                                    |
| ------------------------------------- | ----- | --------- | ------------- | --------------- | ----------------------------------------------------- | ------------------------------------- |
| vscode.debug-auto-launch              | true  | 5         | 0             | 50              | \*                                                    | vscode.debug-auto-launch              |
| vscode.git                            | true  | 60        | 6             | 683             | \*                                                    | vscode.github                         |
| artdiniz.quitcontrol-vscode           | true  | 7         | 0             | 44              | \*                                                    | artdiniz.quitcontrol-vscode           |
| bierner.emojisense                    | true  | 11        | 5             | 39              | \*                                                    | bierner.emojisense                    |
| christian-kohler.path-intellisense    | true  | 26        | 0             | 39              | \*                                                    | christian-kohler.path-intellisense    |
| CoenraadS.bracket-pair-colorizer      | true  | 38        | 13            | 26              | \*                                                    | CoenraadS.bracket-pair-colorizer      |
| donjayamanne.githistory               | true  | 111       | 7             | 19              | \*                                                    | donjayamanne.githistory               |
| EditorConfig.EditorConfig             | true  | 42        | 1             | 18              | \*                                                    | EditorConfig.EditorConfig             |
| formulahendry.auto-rename-tag         | true  | 26        | 4             | 723             | \*                                                    | formulahendry.auto-rename-tag         |
| Gruntfuggly.todo-tree                 | true  | 39        | 13            | 6               | \*                                                    | Gruntfuggly.todo-tree                 |
| jock.svg                              | true  | 379       | 4             | 23              | \*                                                    | jock.svg                              |
| mhutchie.git-graph                    | true  | 53        | 9             | 82              | \*                                                    | mhutchie.git-graph                    |
| mkxml.vscode-filesize                 | true  | 59        | 3             | 11              | \*                                                    | mkxml.vscode-filesize                 |
| nhoizey.gremlins                      | true  | 2         | 2             | 9               | \*                                                    | nhoizey.gremlins                      |
| streetsidesoftware.code-spell-checker | true  | 46        | 0             | 94              | \*                                                    | streetsidesoftware.code-spell-checker |
| vscode.emmet                          | false | 37        | 2             | 12              | onStartupFinished                                     | vscode.emmet                          |
| vscode.github-authentication          | false | 31        | 1             | 176             | onAuthenticationRequest:github                        | vscode.github-authentication          |
| vscode.markdown-language-features     | false | 63        | 2             | 97              | onLanguage:markdown                                   | vscode.markdown-language-features     |
| vscode.merge-conflict                 | false | 6         | 1             | 11              | onStartupFinished                                     | vscode.merge-conflict                 |
| vscode.microsoft-authentication       | false | 27        | 1             | 232             | onAuthenticationRequest:microsoft                     | vscode.microsoft-authentication       |
| ms-vscode.js-debug                    | false | 348       | 6             | 0               | onCommand:extension.js-debug.clearAutoAttachVariables | ms-vscode.js-debug                    |
| bierner.markdown-checkbox             | false | 1         | 0             | 0               | api                                                   | yzhang.markdown-all-in-one            |
| bierner.markdown-emoji                | false | 1         | 0             | 1               | api                                                   | vscode.markdown-language-features     |
| bierner.markdown-yaml-preamble        | false | 1         | 0             | 0               | api                                                   | vscode.markdown-language-features     |
| dbaeumer.vscode-eslint                | false | 38        | 0             | 11              | onStartupFinished                                     | dbaeumer.vscode-eslint                |
| eamodio.gitlens                       | false | 129       | 1             | 34              | onStartupFinished                                     | eamodio.gitlens                       |
| esbenp.prettier-vscode                | false | 149       | 10            | 5               | onStartupFinished                                     | esbenp.prettier-vscode                |
| ms-vscode-remote.remote-containers    | false | 96        | 0             | 38              | onStartupFinished                                     | ms-vscode-remote.remote-containers    |
| ms-vscode-remote.remote-wsl           | false | 25        | 0             | 0               | onStartupFinished                                     | ms-vscode-remote.remote-wsl           |
| yzhang.markdown-all-in-one            | false | 76        | 48            | 49              | onLanguage:markdown                                   | yzhang.markdown-all-in-one            |
| muuvmuuv.vscode-helper                | false | 120       | 0             | 20              | onStartupFinished                                     | muuvmuuv.vscode-helper                |

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
code/willOpenNewWindow	1610626821778	991948	6208189
code/willOpenNewWindow	1610627748907	927129	7135318
code/willOpenNewWindow	1610627754361	5454	7140772
code/willOpenNewWindow	1610628227331	472970	7613742
code/willOpenNewWindow	1610628253804	26473	7640215
code/willOpenNewWindow	1610628362005	108201	7748416
code/willOpenNewWindow	1610628451271	89266	7837682
code/willOpenNewWindow	1610628533387	82116	7919798
code/willOpenNewWindow	1610628775466	242079	8161877
code/willOpenNewWindow	1610628827999	52533	8214410
code/willOpenNewWindow	1610628882982	54983	8269393
code/willOpenNewWindow	1610629022261	139279	8408672
code/willOpenNewWindow	1610629062493	40232	8448904
code/willOpenNewWindow	1610629169047	106554	8555458
code/willOpenNewWindow	1610629449099	280052	8835510
code/willOpenNewWindow	1610629664429	215330	9050840
code/willOpenNewWindow	1610629724620	60191	9111031
code/willOpenNewWindow	1610629795235	70615	9181646
code/willOpenNewWindow	1610629935568	140333	9321979
code/willOpenNewWindow	1610630060034	124466	9446445
code/willOpenNewWindow	1610630125396	65362	9511807
code/willOpenNewWindow	1610630311511	186115	9697922
code/willOpenNewWindow	1610630594466	282955	9980877
code/willOpenNewWindow	1610630692866	98400	10079277
code/willOpenNewWindow	1610630857216	164350	10243627
code/willOpenNewWindow	1610631036397	179181	10422808
code/willOpenNewWindow	1610631123306	86909	10509717
code/willOpenNewWindow	1610631206968	83662	10593379
code/willOpenNewWindow	1610631263381	56413	10649792
code/willOpenNewWindow	1610631891743	628362	11278154
code/willOpenNewWindow	1610632018605	126862	11405016
code/willOpenNewWindow	1610632044192	25587	11430603
code/willOpenNewWindow	1610632256472	212280	11642883
code/willOpenNewWindow	1610632342956	86484	11729367
code/willOpenNewWindow	1610632665825	322869	12052236
```

## Raw Perf Marks: renderer

```
Name	Timestamp	Delta	Total
code/timeOrigin	1610632665829	0	0
code/didStartRenderer	1610632666008	179	179
code/willShowPartsSplash	1610632666009	1	180
code/didShowPartsSplash	1610632666011	2	182
code/willLoadWorkbenchMain	1610632666016	5	187
code/willWaitForShellEnv	1610632666319	303	490
code/didWaitForShellEnv	1610632666319	0	490
code/didLoadWorkbenchMain	1610632666319	0	490
code/registerFilesystem/file	1610632666320	1	491
code/registerFilesystem/vscode-userdata	1610632666320	0	491
code/willInitWorkspaceService	1610632666322	2	493
code/willInitWorkspaceStorage	1610632666332	10	503
code/didInitWorkspaceService	1610632666368	36	539
code/didInitWorkspaceStorage	1610632666375	7	546
code/willStartWorkbench	1610632666375	0	546
code/LifecyclePhase/Ready	1610632666376	1	547
code/registerFilesystem/trustedDomains	1610632666433	57	604
code/willRestoreEditors	1610632666555	122	726
code/willRestoreViewlet	1610632666561	6	732
code/willRestorePanel	1610632666574	13	745
code/didRestoreViewlet	1610632666603	29	774
code/didRestorePanel	1610632666604	1	775
code/willLoadExtensions	1610632666693	89	864
code/didRestoreEditors	1610632666892	199	1063
code/LifecyclePhase/Restored	1610632666892	0	1063
code/didStartWorkbench	1610632666892	0	1063
code/didRemovePartsSplash	1610632666892	0	1063
code/willHandleExtensionPoints	1610632667178	286	1349
code/didHandleExtensionPoints	1610632667403	225	1574
code/didLoadExtensions	1610632667415	12	1586
```

## Raw Perf Marks: localExtHost

```
Name	Timestamp	Delta	Total
code/timeOrigin	1610632666786	0	0
code/fork/start	1610632668105	1319	1319
code/fork/willLoadCode	1610632668141	36	1355
code/extHost/willConnectToRenderer	1610632668472	331	1686
code/extHost/didConnectToRenderer	1610632668474	2	1688
code/extHost/didWaitForInitData	1610632668557	83	1771
code/extHost/didCreateServices	1610632668565	8	1779
code/extHost/willWaitForConfig	1610632668568	3	1782
code/extHost/didWaitForConfig	1610632668813	245	2027
code/extHost/didInitAPI	1610632668813	0	2027
code/extHost/didInitProxyResolver	1610632668822	9	2036
code/extHost/ready	1610632668833	11	2047
code/extHost/willLoadExtensionCode/vscode.microsoft-authentication	1610632668866	33	2080
code/extHost/didLoadExtensionCode/vscode.microsoft-authentication	1610632668893	27	2107
code/extHost/willLoadExtensionCode/vscode.markdown-language-features	1610632668894	1	2108
code/extHost/didLoadExtensionCode/vscode.markdown-language-features	1610632668957	63	2171
code/extHost/willLoadExtensionCode/yzhang.markdown-all-in-one	1610632668958	1	2172
code/extHost/didLoadExtensionCode/yzhang.markdown-all-in-one	1610632669034	76	2248
code/extHost/willLoadExtensionCode/vscode.debug-auto-launch	1610632669034	0	2248
code/extHost/didLoadExtensionCode/vscode.debug-auto-launch	1610632669039	5	2253
code/extHost/willLoadExtensionCode/vscode.git	1610632669040	1	2254
code/extHost/didLoadExtensionCode/vscode.git	1610632669100	60	2314
code/extHost/willLoadExtensionCode/artdiniz.quitcontrol-vscode	1610632669101	1	2315
code/extHost/didLoadExtensionCode/artdiniz.quitcontrol-vscode	1610632669108	7	2322
code/extHost/willLoadExtensionCode/bierner.emojisense	1610632669108	0	2322
code/extHost/didLoadExtensionCode/bierner.emojisense	1610632669119	11	2333
code/extHost/willLoadExtensionCode/christian-kohler.path-intellisense	1610632669119	0	2333
code/extHost/didLoadExtensionCode/christian-kohler.path-intellisense	1610632669145	26	2359
code/extHost/willLoadExtensionCode/CoenraadS.bracket-pair-colorizer	1610632669146	1	2360
code/extHost/didLoadExtensionCode/CoenraadS.bracket-pair-colorizer	1610632669184	38	2398
code/extHost/willLoadExtensionCode/donjayamanne.githistory	1610632669184	0	2398
code/extHost/didLoadExtensionCode/donjayamanne.githistory	1610632669295	111	2509
code/extHost/willLoadExtensionCode/EditorConfig.EditorConfig	1610632669296	1	2510
code/extHost/didLoadExtensionCode/EditorConfig.EditorConfig	1610632669338	42	2552
code/extHost/willLoadExtensionCode/formulahendry.auto-rename-tag	1610632669339	1	2553
code/extHost/didLoadExtensionCode/formulahendry.auto-rename-tag	1610632669365	26	2579
code/extHost/willLoadExtensionCode/Gruntfuggly.todo-tree	1610632669366	1	2580
code/extHost/didLoadExtensionCode/Gruntfuggly.todo-tree	1610632669405	39	2619
code/extHost/willLoadExtensionCode/jock.svg	1610632669406	1	2620
code/extHost/didLoadExtensionCode/jock.svg	1610632669785	379	2999
code/extHost/willLoadExtensionCode/mhutchie.git-graph	1610632669786	1	3000
code/extHost/didLoadExtensionCode/mhutchie.git-graph	1610632669839	53	3053
code/extHost/willLoadExtensionCode/mkxml.vscode-filesize	1610632669840	1	3054
code/extHost/didLoadExtensionCode/mkxml.vscode-filesize	1610632669899	59	3113
code/extHost/willLoadExtensionCode/nhoizey.gremlins	1610632669900	1	3114
code/extHost/didLoadExtensionCode/nhoizey.gremlins	1610632669902	2	3116
code/extHost/willLoadExtensionCode/streetsidesoftware.code-spell-checker	1610632669903	1	3117
code/extHost/didLoadExtensionCode/streetsidesoftware.code-spell-checker	1610632669949	46	3163
code/extHost/willLoadExtensionCode/vscode-icons-team.vscode-icons	1610632669950	1	3164
code/extHost/didLoadExtensionCode/vscode-icons-team.vscode-icons	1610632670013	63	3227
code/extHost/willActivateExtension/vscode.microsoft-authentication	1610632670034	21	3248
code/extHost/willActivateExtension/vscode.markdown-language-features	1610632670035	1	3249
code/extHost/willActivateExtension/yzhang.markdown-all-in-one	1610632670037	2	3251
code/extHost/willActivateExtension/vscode.debug-auto-launch	1610632670085	48	3299
code/extHost/willActivateExtension/vscode.git	1610632670085	0	3299
code/extHost/willActivateExtension/artdiniz.quitcontrol-vscode	1610632670091	6	3305
code/extHost/willActivateExtension/bierner.emojisense	1610632670091	0	3305
code/extHost/willActivateExtension/christian-kohler.path-intellisense	1610632670096	5	3310
code/extHost/willActivateExtension/CoenraadS.bracket-pair-colorizer	1610632670096	0	3310
code/extHost/willActivateExtension/donjayamanne.githistory	1610632670109	13	3323
code/extHost/willActivateExtension/EditorConfig.EditorConfig	1610632670116	7	3330
code/extHost/willActivateExtension/formulahendry.auto-rename-tag	1610632670117	1	3331
code/extHost/willActivateExtension/Gruntfuggly.todo-tree	1610632670121	4	3335
code/extHost/didActivateExtension/vscode.markdown-language-features	1610632670140	19	3354
code/extHost/didActivateExtension/yzhang.markdown-all-in-one	1610632670140	0	3354
code/extHost/didActivateExtension/vscode.debug-auto-launch	1610632670140	0	3354
code/extHost/didActivateExtension/artdiniz.quitcontrol-vscode	1610632670140	0	3354
code/extHost/didActivateExtension/bierner.emojisense	1610632670140	0	3354
code/extHost/didActivateExtension/christian-kohler.path-intellisense	1610632670140	0	3354
code/extHost/didActivateExtension/CoenraadS.bracket-pair-colorizer	1610632670140	0	3354
code/extHost/didActivateExtension/donjayamanne.githistory	1610632670140	0	3354
code/extHost/didActivateExtension/EditorConfig.EditorConfig	1610632670140	0	3354
code/extHost/didActivateExtension/Gruntfuggly.todo-tree	1610632670140	0	3354
code/extHost/willLoadExtensionCode/bierner.markdown-checkbox	1610632670151	11	3365
code/extHost/didLoadExtensionCode/bierner.markdown-checkbox	1610632670152	1	3366
code/extHost/willActivateExtension/jock.svg	1610632670154	2	3368
code/extHost/willActivateExtension/mhutchie.git-graph	1610632670158	4	3372
code/extHost/willActivateExtension/mkxml.vscode-filesize	1610632670167	9	3381
code/extHost/willActivateExtension/nhoizey.gremlins	1610632670170	3	3384
code/extHost/willActivateExtension/streetsidesoftware.code-spell-checker	1610632670172	2	3386
code/extHost/willActivateExtension/vscode-icons-team.vscode-icons	1610632670173	1	3387
code/extHost/didActivateExtension/jock.svg	1610632670182	9	3396
code/extHost/didActivateExtension/mkxml.vscode-filesize	1610632670182	0	3396
code/extHost/didActivateExtension/nhoizey.gremlins	1610632670182	0	3396
code/extHost/didActivateExtension/mhutchie.git-graph	1610632670250	68	3464
code/extHost/willLoadExtensionCode/bierner.markdown-emoji	1610632670257	7	3471
code/extHost/didLoadExtensionCode/bierner.markdown-emoji	1610632670258	1	3472
code/extHost/willLoadExtensionCode/bierner.markdown-yaml-preamble	1610632670259	1	3473
code/extHost/didLoadExtensionCode/bierner.markdown-yaml-preamble	1610632670260	1	3474
code/extHost/willActivateExtension/bierner.markdown-checkbox	1610632670267	7	3481
code/extHost/didActivateExtension/streetsidesoftware.code-spell-checker	1610632670267	0	3481
code/extHost/didActivateExtension/vscode.microsoft-authentication	1610632670269	2	3483
code/extHost/didActivateExtension/bierner.markdown-checkbox	1610632670269	0	3483
code/extHost/willLoadExtensionCode/ms-vscode.js-debug	1610632670294	25	3508
code/extHost/didLoadExtensionCode/ms-vscode.js-debug	1610632670642	348	3856
code/extHost/willActivateExtension/bierner.markdown-emoji	1610632670643	1	3857
code/extHost/willActivateExtension/bierner.markdown-yaml-preamble	1610632670644	1	3858
code/extHost/didActivateExtension/bierner.markdown-emoji	1610632670644	0	3858
code/extHost/didActivateExtension/bierner.markdown-yaml-preamble	1610632670644	0	3858
code/extHost/didActivateExtension/vscode.git	1610632670774	130	3988
code/extHost/willActivateExtension/ms-vscode.js-debug	1610632670824	50	4038
code/extHost/didActivateExtension/ms-vscode.js-debug	1610632670831	7	4045
code/extHost/didActivateExtension/formulahendry.auto-rename-tag	1610632670844	13	4058
code/extHost/willLoadExtensionCode/vscode.github-authentication	1610632670871	27	4085
code/extHost/didLoadExtensionCode/vscode.github-authentication	1610632670901	30	4115
code/extHost/willActivateExtension/vscode.github-authentication	1610632670916	15	4130
code/extHost/didActivateExtension/vscode.github-authentication	1610632671093	177	4307
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
