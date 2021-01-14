## System Info

- Code - Insiders: 1.53.0-insider (c265dff48a27868c7f0f84fd25a169897dc43d73)
- OS: darwin(19.6.0)
- CPUs: Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz(8 x 2800)
- Memory(System): 16.00 GB(0.65GB free)
- Memory(Process): NaN MB working set(141.80MB private, 0.83MB shared)
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
| window.loadUrl() => begin to require(workbench.desktop.main.js) | 236      | [main->renderer] | NewWindow                                  |
| require(workbench.desktop.main.js)                              | 285      | [renderer]       | cached data: YES, node_modules took 0ms    |
| wait for shell environment                                      | 1        | [renderer]       | -                                          |
| require & init workspace storage                                | 34       | [renderer]       | -                                          |
| init workspace service                                          | 47       | [renderer]       | -                                          |
| register extensions & spawn extension host                      | 899      | [renderer]       | -                                          |
| restore viewlet                                                 | 19       | [renderer]       | workbench.view.explorer                    |
| restore panel                                                   | 0        | [renderer]       | -                                          |
| restore editors                                                 | 428      | [renderer]       | 1: workbench.editors.files.fileEditorInput |
| overall workbench load                                          | 640      | [renderer]       | -                                          |
| workbench ready                                                 | 1215     | [main->renderer] | -                                          |
| renderer ready                                                  | 985      | [renderer]       | -                                          |
| extensions registered                                           | 1790     | [renderer]       | -                                          |

## Extension Activation Stats

| Extension                             | Eager | Load Code | Call Activate | Finish Activate | Event                                                 | By                                    |
| ------------------------------------- | ----- | --------- | ------------- | --------------- | ----------------------------------------------------- | ------------------------------------- |
| vscode.debug-auto-launch              | true  | 8         | 0             | 55              | \*                                                    | vscode.debug-auto-launch              |
| vscode.git                            | true  | 67        | 6             | 224             | \*                                                    | vscode.github                         |
| artdiniz.quitcontrol-vscode           | true  | 11        | 0             | 48              | \*                                                    | artdiniz.quitcontrol-vscode           |
| bierner.emojisense                    | true  | 15        | 4             | 44              | \*                                                    | bierner.emojisense                    |
| christian-kohler.path-intellisense    | true  | 40        | 0             | 43              | \*                                                    | christian-kohler.path-intellisense    |
| CoenraadS.bracket-pair-colorizer      | true  | 30        | 14            | 29              | \*                                                    | CoenraadS.bracket-pair-colorizer      |
| donjayamanne.githistory               | true  | 62        | 7             | 22              | \*                                                    | donjayamanne.githistory               |
| EditorConfig.EditorConfig             | true  | 43        | 1             | 21              | \*                                                    | EditorConfig.EditorConfig             |
| formulahendry.auto-rename-tag         | true  | 29        | 4             | 301             | \*                                                    | formulahendry.auto-rename-tag         |
| Gruntfuggly.todo-tree                 | true  | 34        | 16            | 2               | \*                                                    | Gruntfuggly.todo-tree                 |
| jock.svg                              | true  | 395       | 5             | 16              | \*                                                    | jock.svg                              |
| mhutchie.git-graph                    | true  | 44        | 5             | 104             | \*                                                    | mhutchie.git-graph                    |
| mkxml.vscode-filesize                 | true  | 59        | 4             | 7               | \*                                                    | mkxml.vscode-filesize                 |
| nhoizey.gremlins                      | true  | 1         | 3             | 5               | \*                                                    | nhoizey.gremlins                      |
| streetsidesoftware.code-spell-checker | true  | 52        | 1             | 549             | \*                                                    | streetsidesoftware.code-spell-checker |
| vscode.configuration-editing          | false | 13        | 1             | 4               | onLanguage:jsonc                                      | vscode.configuration-editing          |
| vscode.emmet                          | false | 34        | 2             | 57              | onStartupFinished                                     | vscode.emmet                          |
| vscode.github                         | false | 11        | 0             | 0               | \*                                                    | vscode.github                         |
| vscode.github-authentication          | false | 33        | 2             | 85              | onAuthenticationRequest:github                        | vscode.github-authentication          |
| vscode.json-language-features         | false | 55        | 4             | 0               | onLanguage:jsonc                                      | vscode.json-language-features         |
| vscode.markdown-language-features     | false | 68        | 1             | 91              | onLanguage:markdown                                   | vscode.markdown-language-features     |
| vscode.merge-conflict                 | false | 6         | 1             | 56              | onStartupFinished                                     | vscode.merge-conflict                 |
| vscode.microsoft-authentication       | false | 26        | 1             | 881             | onAuthenticationRequest:microsoft                     | vscode.microsoft-authentication       |
| ms-vscode.js-debug                    | false | 196       | 9             | 1               | onCommand:extension.js-debug.clearAutoAttachVariables | ms-vscode.js-debug                    |
| vscode.typescript-language-features   | false | 76        | 26            | 5               | onLanguage:typescript                                 | vscode.typescript-language-features   |
| bierner.markdown-checkbox             | false | 3         | 0             | 0               | api                                                   | yzhang.markdown-all-in-one            |
| bierner.markdown-emoji                | false | 3         | 0             | 27              | api                                                   | vscode.markdown-language-features     |
| bierner.markdown-yaml-preamble        | false | 1         | 0             | 26              | api                                                   | vscode.markdown-language-features     |
| christian-kohler.npm-intellisense     | false | 71        | 0             | 5               | onLanguage:typescript                                 | christian-kohler.npm-intellisense     |
| dbaeumer.vscode-eslint                | false | 34        | 7             | 49              | onStartupFinished                                     | dbaeumer.vscode-eslint                |
| eamodio.gitlens                       | false | 130       | 1             | 99              | onStartupFinished                                     | eamodio.gitlens                       |
| esbenp.prettier-vscode                | false | 144       | 48            | 5               | onStartupFinished                                     | esbenp.prettier-vscode                |
| ms-vscode-remote.remote-containers    | false | 91        | 0             | 76              | onStartupFinished                                     | ms-vscode-remote.remote-containers    |
| ms-vscode-remote.remote-wsl           | false | 25        | 0             | 1               | onStartupFinished                                     | ms-vscode-remote.remote-wsl           |
| yzhang.markdown-all-in-one            | false | 81        | 35            | 55              | onLanguage:markdown                                   | yzhang.markdown-all-in-one            |
| muuvmuuv.vscode-helper                | false | 121       | 0             | 110             | onStartupFinished                                     | muuvmuuv.vscode-helper                |

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
```

## Raw Perf Marks: renderer

```
Name	Timestamp	Delta	Total
code/timeOrigin	1610633312947	0	0
code/didStartRenderer	1610633313176	229	229
code/willShowPartsSplash	1610633313177	1	230
code/didShowPartsSplash	1610633313178	1	231
code/willLoadWorkbenchMain	1610633313182	4	235
code/willWaitForShellEnv	1610633313466	284	519
code/didWaitForShellEnv	1610633313467	1	520
code/didLoadWorkbenchMain	1610633313467	0	520
code/registerFilesystem/file	1610633313468	1	521
code/registerFilesystem/vscode-userdata	1610633313468	0	521
code/willInitWorkspaceService	1610633313474	6	527
code/willInitWorkspaceStorage	1610633313477	3	530
code/didInitWorkspaceStorage	1610633313511	34	564
code/didInitWorkspaceService	1610633313521	10	574
code/willStartWorkbench	1610633313521	0	574
code/LifecyclePhase/Ready	1610633313522	1	575
code/registerFilesystem/trustedDomains	1610633313591	69	644
code/willRestoreEditors	1610633313733	142	786
code/willRestoreViewlet	1610633313740	7	793
code/didRestoreViewlet	1610633313759	19	812
code/willResolveExplorer	1610633313780	21	833
code/willLoadExtensions	1610633313837	57	890
code/didResolveExplorer	1610633313968	131	1021
code/didRestoreEditors	1610633314161	193	1214
code/LifecyclePhase/Restored	1610633314161	0	1214
code/didStartWorkbench	1610633314161	0	1214
code/didRemovePartsSplash	1610633314161	0	1214
code/willHandleExtensionPoints	1610633314515	354	1568
code/didHandleExtensionPoints	1610633314726	211	1779
code/didLoadExtensions	1610633314736	10	1789
```

## Raw Perf Marks: localExtHost

```
Name	Timestamp	Delta	Total
code/timeOrigin	1610633313978	0	0
code/fork/start	1610633315205	1227	1227
code/fork/willLoadCode	1610633315244	39	1266
code/extHost/willConnectToRenderer	1610633315658	414	1680
code/extHost/didConnectToRenderer	1610633315660	2	1682
code/extHost/didWaitForInitData	1610633315764	104	1786
code/extHost/didCreateServices	1610633315777	13	1799
code/extHost/willWaitForConfig	1610633315783	6	1805
code/extHost/didWaitForConfig	1610633315950	167	1972
code/extHost/didInitAPI	1610633315950	0	1972
code/extHost/didInitProxyResolver	1610633315954	4	1976
code/extHost/ready	1610633315958	4	1980
code/extHost/willLoadExtensionCode/vscode.microsoft-authentication	1610633315980	22	2002
code/extHost/didLoadExtensionCode/vscode.microsoft-authentication	1610633316006	26	2028
code/extHost/willLoadExtensionCode/vscode.markdown-language-features	1610633316007	1	2029
code/extHost/didLoadExtensionCode/vscode.markdown-language-features	1610633316075	68	2097
code/extHost/willLoadExtensionCode/yzhang.markdown-all-in-one	1610633316078	3	2100
code/extHost/didLoadExtensionCode/yzhang.markdown-all-in-one	1610633316159	81	2181
code/extHost/willLoadExtensionCode/vscode.debug-auto-launch	1610633316160	1	2182
code/extHost/didLoadExtensionCode/vscode.debug-auto-launch	1610633316168	8	2190
code/extHost/willLoadExtensionCode/vscode.git	1610633316169	1	2191
code/extHost/didLoadExtensionCode/vscode.git	1610633316236	67	2258
code/extHost/willLoadExtensionCode/artdiniz.quitcontrol-vscode	1610633316236	0	2258
code/extHost/didLoadExtensionCode/artdiniz.quitcontrol-vscode	1610633316247	11	2269
code/extHost/willLoadExtensionCode/bierner.emojisense	1610633316248	1	2270
code/extHost/didLoadExtensionCode/bierner.emojisense	1610633316263	15	2285
code/extHost/willLoadExtensionCode/christian-kohler.path-intellisense	1610633316265	2	2287
code/extHost/didLoadExtensionCode/christian-kohler.path-intellisense	1610633316305	40	2327
code/extHost/willLoadExtensionCode/CoenraadS.bracket-pair-colorizer	1610633316306	1	2328
code/extHost/didLoadExtensionCode/CoenraadS.bracket-pair-colorizer	1610633316336	30	2358
code/extHost/willLoadExtensionCode/donjayamanne.githistory	1610633316337	1	2359
code/extHost/didLoadExtensionCode/donjayamanne.githistory	1610633316399	62	2421
code/extHost/willLoadExtensionCode/EditorConfig.EditorConfig	1610633316400	1	2422
code/extHost/didLoadExtensionCode/EditorConfig.EditorConfig	1610633316443	43	2465
code/extHost/willLoadExtensionCode/formulahendry.auto-rename-tag	1610633316444	1	2466
code/extHost/didLoadExtensionCode/formulahendry.auto-rename-tag	1610633316473	29	2495
code/extHost/willLoadExtensionCode/Gruntfuggly.todo-tree	1610633316473	0	2495
code/extHost/didLoadExtensionCode/Gruntfuggly.todo-tree	1610633316507	34	2529
code/extHost/willLoadExtensionCode/jock.svg	1610633316507	0	2529
code/extHost/didLoadExtensionCode/jock.svg	1610633316902	395	2924
code/extHost/willLoadExtensionCode/mhutchie.git-graph	1610633316903	1	2925
code/extHost/didLoadExtensionCode/mhutchie.git-graph	1610633316947	44	2969
code/extHost/willLoadExtensionCode/mkxml.vscode-filesize	1610633316948	1	2970
code/extHost/didLoadExtensionCode/mkxml.vscode-filesize	1610633317007	59	3029
code/extHost/willLoadExtensionCode/nhoizey.gremlins	1610633317008	1	3030
code/extHost/didLoadExtensionCode/nhoizey.gremlins	1610633317009	1	3031
code/extHost/willLoadExtensionCode/streetsidesoftware.code-spell-checker	1610633317010	1	3032
code/extHost/didLoadExtensionCode/streetsidesoftware.code-spell-checker	1610633317062	52	3084
code/extHost/willLoadExtensionCode/vscode-icons-team.vscode-icons	1610633317062	0	3084
code/extHost/didLoadExtensionCode/vscode-icons-team.vscode-icons	1610633317125	63	3147
code/extHost/willActivateExtension/vscode.microsoft-authentication	1610633317156	31	3178
code/extHost/willActivateExtension/vscode.markdown-language-features	1610633317158	2	3180
code/extHost/willActivateExtension/yzhang.markdown-all-in-one	1610633317160	2	3182
code/extHost/willActivateExtension/vscode.debug-auto-launch	1610633317195	35	3217
code/extHost/willActivateExtension/vscode.git	1610633317195	0	3217
code/extHost/willActivateExtension/artdiniz.quitcontrol-vscode	1610633317202	7	3224
code/extHost/willActivateExtension/bierner.emojisense	1610633317202	0	3224
code/extHost/willActivateExtension/christian-kohler.path-intellisense	1610633317207	5	3229
code/extHost/willActivateExtension/CoenraadS.bracket-pair-colorizer	1610633317207	0	3229
code/extHost/willActivateExtension/donjayamanne.githistory	1610633317221	14	3243
code/extHost/willActivateExtension/EditorConfig.EditorConfig	1610633317228	7	3250
code/extHost/willActivateExtension/formulahendry.auto-rename-tag	1610633317229	1	3251
code/extHost/willActivateExtension/Gruntfuggly.todo-tree	1610633317233	4	3255
code/extHost/didActivateExtension/vscode.markdown-language-features	1610633317251	18	3273
code/extHost/didActivateExtension/yzhang.markdown-all-in-one	1610633317251	0	3273
code/extHost/didActivateExtension/vscode.debug-auto-launch	1610633317251	0	3273
code/extHost/didActivateExtension/artdiniz.quitcontrol-vscode	1610633317251	0	3273
code/extHost/didActivateExtension/bierner.emojisense	1610633317251	0	3273
code/extHost/didActivateExtension/christian-kohler.path-intellisense	1610633317251	0	3273
code/extHost/didActivateExtension/CoenraadS.bracket-pair-colorizer	1610633317251	0	3273
code/extHost/didActivateExtension/donjayamanne.githistory	1610633317251	0	3273
code/extHost/didActivateExtension/EditorConfig.EditorConfig	1610633317251	0	3273
code/extHost/didActivateExtension/Gruntfuggly.todo-tree	1610633317251	0	3273
code/extHost/willLoadExtensionCode/bierner.markdown-checkbox	1610633317262	11	3284
code/extHost/didLoadExtensionCode/bierner.markdown-checkbox	1610633317265	3	3287
code/extHost/willActivateExtension/jock.svg	1610633317271	6	3293
code/extHost/willActivateExtension/mhutchie.git-graph	1610633317276	5	3298
code/extHost/willActivateExtension/mkxml.vscode-filesize	1610633317281	5	3303
code/extHost/willActivateExtension/nhoizey.gremlins	1610633317285	4	3307
code/extHost/willActivateExtension/streetsidesoftware.code-spell-checker	1610633317288	3	3310
code/extHost/willActivateExtension/vscode-icons-team.vscode-icons	1610633317289	1	3311
code/extHost/didActivateExtension/jock.svg	1610633317293	4	3315
code/extHost/didActivateExtension/mkxml.vscode-filesize	1610633317293	0	3315
code/extHost/didActivateExtension/nhoizey.gremlins	1610633317293	0	3315
code/extHost/didActivateExtension/mhutchie.git-graph	1610633317385	92	3407
code/extHost/didActivateExtension/vscode.git	1610633317425	40	3447
code/extHost/didActivateExtension/formulahendry.auto-rename-tag	1610633317535	110	3557
code/extHost/willActivateExtension/bierner.markdown-checkbox	1610633317838	303	3860
code/extHost/didActivateExtension/streetsidesoftware.code-spell-checker	1610633317838	0	3860
code/extHost/didActivateExtension/bierner.markdown-checkbox	1610633317838	0	3860
code/extHost/willLoadExtensionCode/bierner.markdown-emoji	1610633317875	37	3897
code/extHost/didLoadExtensionCode/bierner.markdown-emoji	1610633317878	3	3900
code/extHost/willLoadExtensionCode/bierner.markdown-yaml-preamble	1610633317884	6	3906
code/extHost/didLoadExtensionCode/bierner.markdown-yaml-preamble	1610633317885	1	3907
code/extHost/willLoadExtensionCode/vscode.typescript-language-features	1610633317887	2	3909
code/extHost/didLoadExtensionCode/vscode.typescript-language-features	1610633317963	76	3985
code/extHost/willLoadExtensionCode/christian-kohler.npm-intellisense	1610633317966	3	3988
code/extHost/didLoadExtensionCode/christian-kohler.npm-intellisense	1610633318037	71	4059
code/extHost/didActivateExtension/vscode.microsoft-authentication	1610633318038	1	4060
code/extHost/willLoadExtensionCode/ms-vscode.js-debug	1610633318492	454	4514
code/extHost/didLoadExtensionCode/ms-vscode.js-debug	1610633318688	196	4710
code/extHost/willLoadExtensionCode/vscode.github	1610633318689	1	4711
code/extHost/didLoadExtensionCode/vscode.github	1610633318700	11	4722
code/extHost/willActivateExtension/bierner.markdown-emoji	1610633318701	1	4723
code/extHost/willActivateExtension/bierner.markdown-yaml-preamble	1610633318702	1	4724
code/extHost/willActivateExtension/vscode.typescript-language-features	1610633318702	0	4724
code/extHost/willActivateExtension/christian-kohler.npm-intellisense	1610633318728	26	4750
code/extHost/didActivateExtension/bierner.markdown-emoji	1610633318741	13	4763
code/extHost/didActivateExtension/bierner.markdown-yaml-preamble	1610633318741	0	4763
code/extHost/didActivateExtension/vscode.typescript-language-features	1610633318741	0	4763
code/extHost/didActivateExtension/christian-kohler.npm-intellisense	1610633318741	0	4763
code/extHost/willActivateExtension/ms-vscode.js-debug	1610633318919	178	4941
code/extHost/willActivateExtension/vscode.github	1610633318929	10	4951
code/extHost/didActivateExtension/ms-vscode.js-debug	1610633318929	0	4951
code/extHost/didActivateExtension/vscode.github	1610633318929	0	4951
code/extHost/willLoadExtensionCode/vscode.github-authentication	1610633319135	206	5157
code/extHost/didLoadExtensionCode/vscode.github-authentication	1610633319168	33	5190
code/extHost/willActivateExtension/vscode.github-authentication	1610633319173	5	5195
code/extHost/didActivateExtension/vscode.github-authentication	1610633319260	87	5282
code/extHost/willLoadExtensionCode/vscode.configuration-editing	1610633320897	1637	6919
code/extHost/didLoadExtensionCode/vscode.configuration-editing	1610633320910	13	6932
code/extHost/willLoadExtensionCode/vscode.json-language-features	1610633320910	0	6932
code/extHost/didLoadExtensionCode/vscode.json-language-features	1610633320965	55	6987
code/extHost/willActivateExtension/vscode.configuration-editing	1610633320978	13	7000
code/extHost/willActivateExtension/vscode.json-language-features	1610633320979	1	7001
code/extHost/didActivateExtension/vscode.configuration-editing	1610633320983	4	7005
code/extHost/didActivateExtension/vscode.json-language-features	1610633320983	0	7005
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
