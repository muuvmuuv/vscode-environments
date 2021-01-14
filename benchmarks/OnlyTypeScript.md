## System Info

- Code - Insiders: 1.53.0-insider (c265dff48a27868c7f0f84fd25a169897dc43d73)
- OS: darwin(19.6.0)
- CPUs: Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz(8 x 2800)
- Memory(System): 16.00 GB(1.08GB free)
- Memory(Process): NaN MB working set(146.88MB private, 0.53MB shared)
- VM(likelyhood): 0%
- Initial Startup: false
- Has 1 other windows
- Screen Reader Active: false
- Empty Workspace: false

## Performance Marks

| What                                                            | Duration | Process          | Info                                       |
| --------------------------------------------------------------- | -------- | ---------------- | ------------------------------------------ |
| start => app.isReady                                            | -        | [main]           | initial startup: false                     |
| nls:start => nls:end                                            | -        | [main]           | initial startup: false                     |
| require(main.bundle.js)                                         | -        | [main]           | initial startup: false                     |
| app.isReady => window.loadUrl()                                 | -        | [main]           | initial startup: false                     |
| window.loadUrl() => begin to require(workbench.desktop.main.js) | 245      | [main->renderer] | ReloadedWindow                             |
| require(workbench.desktop.main.js)                              | 279      | [renderer]       | cached data: YES, node_modules took 0ms    |
| wait for shell environment                                      | 0        | [renderer]       | -                                          |
| require & init workspace storage                                | 20       | [renderer]       | -                                          |
| init workspace service                                          | 30       | [renderer]       | -                                          |
| register extensions & spawn extension host                      | 793      | [renderer]       | -                                          |
| restore viewlet                                                 | 19       | [renderer]       | workbench.view.explorer                    |
| restore panel                                                   | 0        | [renderer]       | -                                          |
| restore editors                                                 | 405      | [renderer]       | 1: workbench.editors.files.fileEditorInput |
| overall workbench load                                          | 594      | [renderer]       | -                                          |
| workbench ready                                                 | 1156     | [main->renderer] | -                                          |
| renderer ready                                                  | 919      | [renderer]       | -                                          |
| extensions registered                                           | 1660     | [renderer]       | -                                          |

## Extension Activation Stats

| Extension                             | Eager | Load Code | Call Activate | Finish Activate | Event                                                 | By                                    |
| ------------------------------------- | ----- | --------- | ------------- | --------------- | ----------------------------------------------------- | ------------------------------------- |
| vscode.debug-auto-launch              | true  | 3         | 1             | 109             | \*                                                    | vscode.debug-auto-launch              |
| vscode.git                            | true  | 59        | 6             | 620             | \*                                                    | vscode.github                         |
| vscode.npm                            | true  | 34        | 2             | 19              | workspaceContains:package.json                        | vscode.npm                            |
| alefragnani.project-manager           | true  | 12        | 6             | 97              | \*                                                    | alefragnani.project-manager           |
| artdiniz.quitcontrol-vscode           | true  | 5         | 0             | 97              | \*                                                    | artdiniz.quitcontrol-vscode           |
| bierner.emojisense                    | true  | 10        | 4             | 92              | \*                                                    | bierner.emojisense                    |
| christian-kohler.path-intellisense    | true  | 20        | 1             | 91              | \*                                                    | christian-kohler.path-intellisense    |
| CoenraadS.bracket-pair-colorizer      | true  | 40        | 11            | 80              | \*                                                    | CoenraadS.bracket-pair-colorizer      |
| donjayamanne.githistory               | true  | 58        | 9             | 71              | \*                                                    | donjayamanne.githistory               |
| EditorConfig.EditorConfig             | true  | 26        | 1             | 70              | \*                                                    | EditorConfig.EditorConfig             |
| formulahendry.auto-rename-tag         | true  | 23        | 2             | 448             | \*                                                    | formulahendry.auto-rename-tag         |
| Gruntfuggly.todo-tree                 | true  | 33        | 22            | 47              | \*                                                    | Gruntfuggly.todo-tree                 |
| hbenl.vscode-test-explorer            | true  | 25        | 3             | 44              | \*                                                    | raagh.angular-karma-test-explorer     |
| icrawl.discord-vscode                 | true  | 17        | 2             | 877             | \*                                                    | icrawl.discord-vscode                 |
| jock.svg                              | true  | 341       | 11            | 31              | \*                                                    | jock.svg                              |
| mhutchie.git-graph                    | true  | 45        | 6             | 441             | \*                                                    | mhutchie.git-graph                    |
| mkxml.vscode-filesize                 | true  | 85        | 3             | 22              | \*                                                    | mkxml.vscode-filesize                 |
| msjsdiag.debugger-for-chrome          | true  | 132       | 0             | 14              | \*                                                    | raagh.angular-karma-test-explorer     |
| muuvmuuv.vscode-sundial               | true  | 23        | 2             | 20              | \*                                                    | muuvmuuv.vscode-sundial               |
| nhoizey.gremlins                      | true  | 2         | 6             | 14              | \*                                                    | nhoizey.gremlins                      |
| streetsidesoftware.code-spell-checker | true  | 48        | 0             | 558             | \*                                                    | streetsidesoftware.code-spell-checker |
| stylelint.vscode-stylelint            | true  | 54        | 4             | 10              | \*                                                    | stylelint.vscode-stylelint            |
| vscode-icons-team.vscode-icons        | true  | 67        | 3             | 5367            | \*                                                    | vscode-icons-team.vscode-icons        |
| yzhang.markdown-all-in-one            | true  | 71        | 19            | 1               | workspaceContains:README.md                           | yzhang.markdown-all-in-one            |
| vscode.configuration-editing          | false | 6         | 0             | 5               | onLanguage:jsonc                                      | vscode.configuration-editing          |
| vscode.emmet                          | false | 25        | 1             | 5               | onStartupFinished                                     | vscode.emmet                          |
| vscode.github                         | false | 14        | 1             | 2               | \*                                                    | vscode.github                         |
| vscode.github-authentication          | false | 25        | 1             | 53              | onAuthenticationRequest:github                        | vscode.github-authentication          |
| vscode.json-language-features         | false | 84        | 4             | 1               | onLanguage:jsonc                                      | vscode.json-language-features         |
| vscode.markdown-language-features     | false | 72        | 3             | 0               | onLanguage:markdown                                   | vscode.markdown-language-features     |
| vscode.merge-conflict                 | false | 4         | 2             | 3               | onStartupFinished                                     | vscode.merge-conflict                 |
| vscode.microsoft-authentication       | false | 26        | 1             | 1033            | onAuthenticationRequest:microsoft                     | vscode.microsoft-authentication       |
| ms-vscode.js-debug                    | false | 368       | 12            | 3               | onCommand:extension.js-debug.clearAutoAttachVariables | ms-vscode.js-debug                    |
| vscode.testing-editor-contributions   | false | 2         | 0             | 3               | onStartupFinished                                     | vscode.testing-editor-contributions   |
| vscode.typescript-language-features   | false | 50        | 35            | 114             | onLanguage:typescript                                 | vscode.typescript-language-features   |
| Angular.ng-template                   | false | 129       | 5             | 109             | onLanguage:typescript                                 | Angular.ng-template                   |
| bierner.markdown-checkbox             | false | 1         | 0             | 0               | api                                                   | yzhang.markdown-all-in-one            |
| bierner.markdown-emoji                | false | 1         | 0             | 15              | api                                                   | yzhang.markdown-all-in-one            |
| bierner.markdown-yaml-preamble        | false | 2         | 0             | 0               | api                                                   | yzhang.markdown-all-in-one            |
| christian-kohler.npm-intellisense     | false | 35        | 0             | 109             | onLanguage:typescript                                 | christian-kohler.npm-intellisense     |
| dbaeumer.vscode-eslint                | false | 30        | 3             | 0               | onStartupFinished                                     | dbaeumer.vscode-eslint                |
| eamodio.gitlens                       | false | 117       | 1             | 97              | onStartupFinished                                     | eamodio.gitlens                       |
| esbenp.prettier-vscode                | false | 135       | 45            | 6               | onStartupFinished                                     | esbenp.prettier-vscode                |
| raagh.angular-karma-test-explorer     | false | 93        | 2             | 0               | \*                                                    | raagh.angular-karma-test-explorer     |
| muuvmuuv.vscode-helper                | false | 122       | 0             | 5               | onStartupFinished                                     | muuvmuuv.vscode-helper                |

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
code/willOpenNewWindow	1610633195511	529686	12581922
code/willOpenNewWindow	1610633312946	117435	12699357
code/willOpenNewWindow	1610634165538	852592	13551949
code/willOpenNewWindow	1610634196230	30692	13582641
code/willOpenNewWindow	1610634594862	398632	13981273
code/willOpenNewWindow	1610635033515	438653	14419926
code/willOpenNewWindow	1610635054872	21357	14441283
code/willOpenNewWindow	1610635069428	14556	14455839
```

## Raw Perf Marks: renderer

```
Name	Timestamp	Delta	Total
code/timeOrigin	1610635069433	0	0
code/didStartRenderer	1610635069665	232	232
code/willShowPartsSplash	1610635069666	1	233
code/didShowPartsSplash	1610635069667	1	234
code/willLoadWorkbenchMain	1610635069673	6	240
code/willWaitForShellEnv	1610635069952	279	519
code/didWaitForShellEnv	1610635069952	0	519
code/didLoadWorkbenchMain	1610635069952	0	519
code/registerFilesystem/file	1610635069953	1	520
code/registerFilesystem/vscode-userdata	1610635069953	0	520
code/willInitWorkspaceService	1610635069960	7	527
code/willInitWorkspaceStorage	1610635069962	2	529
code/didInitWorkspaceStorage	1610635069982	20	549
code/didInitWorkspaceService	1610635069990	8	557
code/willStartWorkbench	1610635069990	0	557
code/LifecyclePhase/Ready	1610635069991	1	558
code/registerFilesystem/trustedDomains	1610635070046	55	613
code/willRestoreEditors	1610635070179	133	746
code/willRestoreViewlet	1610635070186	7	753
code/didRestoreViewlet	1610635070205	19	772
code/willResolveExplorer	1610635070229	24	796
code/willLoadExtensions	1610635070295	66	862
code/didResolveExplorer	1610635070403	108	970
code/didRestoreEditors	1610635070584	181	1151
code/LifecyclePhase/Restored	1610635070584	0	1151
code/didStartWorkbench	1610635070584	0	1151
code/didRemovePartsSplash	1610635070585	1	1152
code/willHandleExtensionPoints	1610635070873	288	1440
code/didHandleExtensionPoints	1610635071078	205	1645
code/didLoadExtensions	1610635071088	10	1655
```

## Raw Perf Marks: localExtHost

```
Name	Timestamp	Delta	Total
code/timeOrigin	1610635070424	0	0
code/fork/start	1610635071688	1264	1264
code/fork/willLoadCode	1610635071718	30	1294
code/extHost/willConnectToRenderer	1610635071995	277	1571
code/extHost/didConnectToRenderer	1610635071997	2	1573
code/extHost/didWaitForInitData	1610635072144	147	1720
code/extHost/didCreateServices	1610635072156	12	1732
code/extHost/willWaitForConfig	1610635072162	6	1738
code/extHost/didWaitForConfig	1610635072268	106	1844
code/extHost/didInitAPI	1610635072268	0	1844
code/extHost/didInitProxyResolver	1610635072273	5	1849
code/extHost/ready	1610635072276	3	1852
code/extHost/willLoadExtensionCode/vscode.microsoft-authentication	1610635072299	23	1875
code/extHost/didLoadExtensionCode/vscode.microsoft-authentication	1610635072325	26	1901
code/extHost/willLoadExtensionCode/vscode.typescript-language-features	1610635072326	1	1902
code/extHost/didLoadExtensionCode/vscode.typescript-language-features	1610635072376	50	1952
code/extHost/willLoadExtensionCode/Angular.ng-template	1610635072377	1	1953
code/extHost/didLoadExtensionCode/Angular.ng-template	1610635072506	129	2082
code/extHost/willLoadExtensionCode/christian-kohler.npm-intellisense	1610635072509	3	2085
code/extHost/didLoadExtensionCode/christian-kohler.npm-intellisense	1610635072544	35	2120
code/extHost/willLoadExtensionCode/vscode.debug-auto-launch	1610635072544	0	2120
code/extHost/didLoadExtensionCode/vscode.debug-auto-launch	1610635072547	3	2123
code/extHost/willLoadExtensionCode/vscode.git	1610635072548	1	2124
code/extHost/didLoadExtensionCode/vscode.git	1610635072607	59	2183
code/extHost/willLoadExtensionCode/alefragnani.project-manager	1610635072608	1	2184
code/extHost/didLoadExtensionCode/alefragnani.project-manager	1610635072620	12	2196
code/extHost/willLoadExtensionCode/artdiniz.quitcontrol-vscode	1610635072620	0	2196
code/extHost/didLoadExtensionCode/artdiniz.quitcontrol-vscode	1610635072625	5	2201
code/extHost/willLoadExtensionCode/bierner.emojisense	1610635072625	0	2201
code/extHost/didLoadExtensionCode/bierner.emojisense	1610635072635	10	2211
code/extHost/willLoadExtensionCode/christian-kohler.path-intellisense	1610635072636	1	2212
code/extHost/didLoadExtensionCode/christian-kohler.path-intellisense	1610635072656	20	2232
code/extHost/willLoadExtensionCode/CoenraadS.bracket-pair-colorizer	1610635072656	0	2232
code/extHost/didLoadExtensionCode/CoenraadS.bracket-pair-colorizer	1610635072696	40	2272
code/extHost/willLoadExtensionCode/donjayamanne.githistory	1610635072697	1	2273
code/extHost/didLoadExtensionCode/donjayamanne.githistory	1610635072755	58	2331
code/extHost/willLoadExtensionCode/EditorConfig.EditorConfig	1610635072756	1	2332
code/extHost/didLoadExtensionCode/EditorConfig.EditorConfig	1610635072782	26	2358
code/extHost/willLoadExtensionCode/formulahendry.auto-rename-tag	1610635072783	1	2359
code/extHost/didLoadExtensionCode/formulahendry.auto-rename-tag	1610635072806	23	2382
code/extHost/willLoadExtensionCode/Gruntfuggly.todo-tree	1610635072807	1	2383
code/extHost/didLoadExtensionCode/Gruntfuggly.todo-tree	1610635072840	33	2416
code/extHost/willLoadExtensionCode/hbenl.vscode-test-explorer	1610635072841	1	2417
code/extHost/didLoadExtensionCode/hbenl.vscode-test-explorer	1610635072866	25	2442
code/extHost/willLoadExtensionCode/icrawl.discord-vscode	1610635072866	0	2442
code/extHost/didLoadExtensionCode/icrawl.discord-vscode	1610635072883	17	2459
code/extHost/willLoadExtensionCode/jock.svg	1610635072884	1	2460
code/extHost/didLoadExtensionCode/jock.svg	1610635073225	341	2801
code/extHost/willLoadExtensionCode/mhutchie.git-graph	1610635073225	0	2801
code/extHost/didLoadExtensionCode/mhutchie.git-graph	1610635073270	45	2846
code/extHost/willLoadExtensionCode/mkxml.vscode-filesize	1610635073271	1	2847
code/extHost/didLoadExtensionCode/mkxml.vscode-filesize	1610635073356	85	2932
code/extHost/willLoadExtensionCode/muuvmuuv.vscode-sundial	1610635073357	1	2933
code/extHost/didLoadExtensionCode/muuvmuuv.vscode-sundial	1610635073380	23	2956
code/extHost/willLoadExtensionCode/nhoizey.gremlins	1610635073381	1	2957
code/extHost/didLoadExtensionCode/nhoizey.gremlins	1610635073382	1	2958
code/extHost/willLoadExtensionCode/msjsdiag.debugger-for-chrome	1610635073383	1	2959
code/extHost/didLoadExtensionCode/msjsdiag.debugger-for-chrome	1610635073515	132	3091
code/extHost/willLoadExtensionCode/streetsidesoftware.code-spell-checker	1610635073515	0	3091
code/extHost/didLoadExtensionCode/streetsidesoftware.code-spell-checker	1610635073563	48	3139
code/extHost/willLoadExtensionCode/stylelint.vscode-stylelint	1610635073564	1	3140
code/extHost/didLoadExtensionCode/stylelint.vscode-stylelint	1610635073618	54	3194
code/extHost/willLoadExtensionCode/vscode-icons-team.vscode-icons	1610635073619	1	3195
code/extHost/didLoadExtensionCode/vscode-icons-team.vscode-icons	1610635073686	67	3262
code/extHost/willLoadExtensionCode/vscode.npm	1610635073688	2	3264
code/extHost/didLoadExtensionCode/vscode.npm	1610635073722	34	3298
code/extHost/willLoadExtensionCode/yzhang.markdown-all-in-one	1610635073722	0	3298
code/extHost/didLoadExtensionCode/yzhang.markdown-all-in-one	1610635073793	71	3369
code/extHost/willActivateExtension/vscode.microsoft-authentication	1610635073814	21	3390
code/extHost/willActivateExtension/vscode.typescript-language-features	1610635073815	1	3391
code/extHost/willActivateExtension/Angular.ng-template	1610635073850	35	3426
code/extHost/willActivateExtension/christian-kohler.npm-intellisense	1610635073855	5	3431
code/extHost/willActivateExtension/vscode.debug-auto-launch	1610635073855	0	3431
code/extHost/willActivateExtension/vscode.git	1610635073856	1	3432
code/extHost/willActivateExtension/alefragnani.project-manager	1610635073862	6	3438
code/extHost/willActivateExtension/artdiniz.quitcontrol-vscode	1610635073868	6	3444
code/extHost/willActivateExtension/bierner.emojisense	1610635073869	1	3445
code/extHost/willActivateExtension/christian-kohler.path-intellisense	1610635073873	4	3449
code/extHost/willActivateExtension/CoenraadS.bracket-pair-colorizer	1610635073874	1	3450
code/extHost/willActivateExtension/donjayamanne.githistory	1610635073885	11	3461
code/extHost/willActivateExtension/EditorConfig.EditorConfig	1610635073894	9	3470
code/extHost/willActivateExtension/formulahendry.auto-rename-tag	1610635073895	1	3471
code/extHost/willActivateExtension/Gruntfuggly.todo-tree	1610635073897	2	3473
code/extHost/willActivateExtension/hbenl.vscode-test-explorer	1610635073919	22	3495
code/extHost/willActivateExtension/icrawl.discord-vscode	1610635073922	3	3498
code/extHost/willActivateExtension/jock.svg	1610635073924	2	3500
code/extHost/willActivateExtension/mhutchie.git-graph	1610635073935	11	3511
code/extHost/willActivateExtension/mkxml.vscode-filesize	1610635073941	6	3517
code/extHost/willActivateExtension/muuvmuuv.vscode-sundial	1610635073944	3	3520
code/extHost/willActivateExtension/nhoizey.gremlins	1610635073946	2	3522
code/extHost/willActivateExtension/msjsdiag.debugger-for-chrome	1610635073953	7	3529
code/extHost/willActivateExtension/streetsidesoftware.code-spell-checker	1610635073953	0	3529
code/extHost/willActivateExtension/stylelint.vscode-stylelint	1610635073953	0	3529
code/extHost/willActivateExtension/vscode-icons-team.vscode-icons	1610635073957	4	3533
code/extHost/didActivateExtension/vscode.typescript-language-features	1610635074047	90	3623
code/extHost/didActivateExtension/Angular.ng-template	1610635074047	0	3623
code/extHost/didActivateExtension/christian-kohler.npm-intellisense	1610635074047	0	3623
code/extHost/didActivateExtension/vscode.debug-auto-launch	1610635074047	0	3623
code/extHost/didActivateExtension/alefragnani.project-manager	1610635074047	0	3623
code/extHost/didActivateExtension/artdiniz.quitcontrol-vscode	1610635074047	0	3623
code/extHost/didActivateExtension/bierner.emojisense	1610635074047	0	3623
code/extHost/didActivateExtension/christian-kohler.path-intellisense	1610635074047	0	3623
code/extHost/didActivateExtension/CoenraadS.bracket-pair-colorizer	1610635074047	0	3623
code/extHost/didActivateExtension/donjayamanne.githistory	1610635074047	0	3623
code/extHost/didActivateExtension/EditorConfig.EditorConfig	1610635074047	0	3623
code/extHost/didActivateExtension/Gruntfuggly.todo-tree	1610635074047	0	3623
code/extHost/didActivateExtension/hbenl.vscode-test-explorer	1610635074047	0	3623
code/extHost/didActivateExtension/jock.svg	1610635074047	0	3623
code/extHost/didActivateExtension/mkxml.vscode-filesize	1610635074047	0	3623
code/extHost/didActivateExtension/muuvmuuv.vscode-sundial	1610635074047	0	3623
code/extHost/didActivateExtension/nhoizey.gremlins	1610635074047	0	3623
code/extHost/didActivateExtension/msjsdiag.debugger-for-chrome	1610635074047	0	3623
code/extHost/didActivateExtension/stylelint.vscode-stylelint	1610635074047	0	3623
code/extHost/willLoadExtensionCode/bierner.markdown-checkbox	1610635074295	248	3871
code/extHost/didLoadExtensionCode/bierner.markdown-checkbox	1610635074296	1	3872
code/extHost/willActivateExtension/vscode.npm	1610635074298	2	3874
code/extHost/willActivateExtension/yzhang.markdown-all-in-one	1610635074300	2	3876
code/extHost/didActivateExtension/vscode.npm	1610635074320	20	3896
code/extHost/didActivateExtension/yzhang.markdown-all-in-one	1610635074320	0	3896
code/extHost/didActivateExtension/formulahendry.auto-rename-tag	1610635074345	25	3921
code/extHost/didActivateExtension/mhutchie.git-graph	1610635074382	37	3958
code/extHost/didActivateExtension/vscode.git	1610635074482	100	4058
code/extHost/didActivateExtension/streetsidesoftware.code-spell-checker	1610635074512	30	4088
code/extHost/didActivateExtension/icrawl.discord-vscode	1610635074806	294	4382
code/extHost/willActivateExtension/bierner.markdown-checkbox	1610635074848	42	4424
code/extHost/didActivateExtension/vscode.microsoft-authentication	1610635074848	0	4424
code/extHost/didActivateExtension/bierner.markdown-checkbox	1610635074848	0	4424
code/extHost/willLoadExtensionCode/bierner.markdown-emoji	1610635076432	1584	6008
code/extHost/didLoadExtensionCode/bierner.markdown-emoji	1610635076433	1	6009
code/extHost/willLoadExtensionCode/ms-vscode.js-debug	1610635076435	2	6011
code/extHost/didLoadExtensionCode/ms-vscode.js-debug	1610635076803	368	6379
code/extHost/willLoadExtensionCode/vscode.github	1610635076803	0	6379
code/extHost/didLoadExtensionCode/vscode.github	1610635076817	14	6393
code/extHost/willLoadExtensionCode/raagh.angular-karma-test-explorer	1610635076818	1	6394
code/extHost/didLoadExtensionCode/raagh.angular-karma-test-explorer	1610635076911	93	6487
code/extHost/willActivateExtension/bierner.markdown-emoji	1610635077075	164	6651
code/extHost/willActivateExtension/ms-vscode.js-debug	1610635077075	0	6651
code/extHost/willActivateExtension/vscode.github	1610635077087	12	6663
code/extHost/willActivateExtension/raagh.angular-karma-test-explorer	1610635077088	1	6664
code/extHost/didActivateExtension/bierner.markdown-emoji	1610635077092	4	6668
code/extHost/didActivateExtension/ms-vscode.js-debug	1610635077092	0	6668
code/extHost/didActivateExtension/vscode.github	1610635077092	0	6668
code/extHost/didActivateExtension/raagh.angular-karma-test-explorer	1610635077092	0	6668
code/extHost/willLoadExtensionCode/bierner.markdown-yaml-preamble	1610635077515	423	7091
code/extHost/didLoadExtensionCode/bierner.markdown-yaml-preamble	1610635077517	2	7093
code/extHost/willLoadExtensionCode/vscode.github-authentication	1610635077566	49	7142
code/extHost/didLoadExtensionCode/vscode.github-authentication	1610635077591	25	7167
code/extHost/willLoadExtensionCode/vscode.configuration-editing	1610635077591	0	7167
code/extHost/didLoadExtensionCode/vscode.configuration-editing	1610635077597	6	7173
code/extHost/willLoadExtensionCode/vscode.json-language-features	1610635077597	0	7173
code/extHost/didLoadExtensionCode/vscode.json-language-features	1610635077681	84	7257
code/extHost/willActivateExtension/bierner.markdown-yaml-preamble	1610635077682	1	7258
code/extHost/didActivateExtension/bierner.markdown-yaml-preamble	1610635077682	0	7258
code/extHost/willActivateExtension/vscode.github-authentication	1610635077777	95	7353
code/extHost/willActivateExtension/vscode.configuration-editing	1610635077778	1	7354
code/extHost/willActivateExtension/vscode.json-language-features	1610635077778	0	7354
code/extHost/didActivateExtension/vscode.configuration-editing	1610635077783	5	7359
code/extHost/didActivateExtension/vscode.json-language-features	1610635077783	0	7359
code/extHost/didActivateExtension/vscode.github-authentication	1610635077831	48	7407
code/extHost/didActivateExtension/vscode-icons-team.vscode-icons	1610635079327	1496	8903
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
