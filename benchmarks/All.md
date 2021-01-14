## System Info

- Code - Insiders: 1.53.0-insider (c265dff48a27868c7f0f84fd25a169897dc43d73)
- OS: darwin(19.6.0)
- CPUs: Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz(8 x 2800)
- Memory(System): 16.00 GB(1.08GB free)
- Memory(Process): NaN MB working set(148.20MB private, 0.52MB shared)
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
| window.loadUrl() => begin to require(workbench.desktop.main.js) | 252      | [main->renderer] | ReloadedWindow                             |
| require(workbench.desktop.main.js)                              | 300      | [renderer]       | cached data: YES, node_modules took 0ms    |
| wait for shell environment                                      | 0        | [renderer]       | -                                          |
| require & init workspace storage                                | 28       | [renderer]       | -                                          |
| init workspace service                                          | 38       | [renderer]       | -                                          |
| register extensions & spawn extension host                      | 936      | [renderer]       | -                                          |
| restore viewlet                                                 | 16       | [renderer]       | workbench.view.explorer                    |
| restore panel                                                   | 0        | [renderer]       | -                                          |
| restore editors                                                 | 363      | [renderer]       | 1: workbench.editors.files.fileEditorInput |
| overall workbench load                                          | 549      | [renderer]       | -                                          |
| workbench ready                                                 | 1146     | [main->renderer] | -                                          |
| renderer ready                                                  | 901      | [renderer]       | -                                          |
| extensions registered                                           | 1810     | [renderer]       | -                                          |

## Extension Activation Stats

| Extension                              | Eager | Load Code | Call Activate | Finish Activate | Event                                                 | By                                     |
| -------------------------------------- | ----- | --------- | ------------- | --------------- | ----------------------------------------------------- | -------------------------------------- |
| vscode.debug-auto-launch               | true  | 6         | 0             | 58              | \*                                                    | vscode.debug-auto-launch               |
| vscode.git                             | true  | 57        | 6             | 776             | \*                                                    | vscode.github                          |
| vscode.npm                             | true  | 35        | 1             | 20              | workspaceContains:package.json                        | vscode.npm                             |
| alefragnani.project-manager            | true  | 12        | 6             | 45              | \*                                                    | alefragnani.project-manager            |
| artdiniz.quitcontrol-vscode            | true  | 9         | 0             | 45              | \*                                                    | artdiniz.quitcontrol-vscode            |
| bierner.emojisense                     | true  | 10        | 5             | 40              | \*                                                    | bierner.emojisense                     |
| christian-kohler.path-intellisense     | true  | 29        | 1             | 39              | \*                                                    | christian-kohler.path-intellisense     |
| CoenraadS.bracket-pair-colorizer       | true  | 26        | 15            | 24              | \*                                                    | CoenraadS.bracket-pair-colorizer       |
| donjayamanne.githistory                | true  | 56        | 7             | 17              | \*                                                    | donjayamanne.githistory                |
| EditorConfig.EditorConfig              | true  | 30        | 1             | 88              | \*                                                    | EditorConfig.EditorConfig              |
| formulahendry.auto-rename-tag          | true  | 22        | 2             | 686             | \*                                                    | formulahendry.auto-rename-tag          |
| Gruntfuggly.todo-tree                  | true  | 33        | 24            | 62              | \*                                                    | Gruntfuggly.todo-tree                  |
| hbenl.vscode-test-explorer             | true  | 24        | 2             | 59              | \*                                                    | raagh.angular-karma-test-explorer      |
| icrawl.discord-vscode                  | true  | 13        | 2             | 1954            | \*                                                    | icrawl.discord-vscode                  |
| jock.svg                               | true  | 347       | 3             | 54              | \*                                                    | jock.svg                               |
| mhutchie.git-graph                     | true  | 44        | 15            | 593             | \*                                                    | mhutchie.git-graph                     |
| mkxml.vscode-filesize                  | true  | 50        | 4             | 34              | \*                                                    | mkxml.vscode-filesize                  |
| msjsdiag.debugger-for-chrome           | true  | 158       | 0             | 30              | \*                                                    | raagh.angular-karma-test-explorer      |
| muuvmuuv.vscode-sundial                | true  | 22        | 2             | 33              | \*                                                    | muuvmuuv.vscode-sundial                |
| nhoizey.gremlins                       | true  | 2         | 2             | 31              | \*                                                    | nhoizey.gremlins                       |
| streetsidesoftware.code-spell-checker  | true  | 50        | 0             | 1006            | \*                                                    | streetsidesoftware.code-spell-checker  |
| stylelint.vscode-stylelint             | true  | 72        | 6             | 24              | \*                                                    | stylelint.vscode-stylelint             |
| vscode-icons-team.vscode-icons         | true  | 63        | 3             | 7340            | \*                                                    | vscode-icons-team.vscode-icons         |
| yzhang.markdown-all-in-one             | true  | 74        | 8             | 3               | workspaceContains:README.md                           | yzhang.markdown-all-in-one             |
| vscode.configuration-editing           | false | 11        | 0             | 12              | onLanguage:jsonc                                      | vscode.configuration-editing           |
| vscode.docker                          | false | -1        | -1            | -1              | onLanguage:yaml                                       | ms-azuretools.vscode-docker            |
| vscode.emmet                           | false | 24        | 1             | 53              | onStartupFinished                                     | vscode.emmet                           |
| vscode.extension-editing               | false | 27        | 0             | 92              | onLanguage:typescript                                 | vscode.extension-editing               |
| vscode.github                          | false | 10        | 1             | 5               | \*                                                    | vscode.github                          |
| vscode.github-authentication           | false | 76        | 7             | 112             | onAuthenticationRequest:github                        | vscode.github-authentication           |
| vscode.json-language-features          | false | 133       | 12            | 0               | onLanguage:jsonc                                      | vscode.json-language-features          |
| vscode.markdown-language-features      | false | 80        | 2             | 1               | onLanguage:markdown                                   | vscode.markdown-language-features      |
| vscode.merge-conflict                  | false | 6         | 1             | 52              | onStartupFinished                                     | vscode.merge-conflict                  |
| vscode.microsoft-authentication        | false | 26        | 1             | 2147            | onAuthenticationRequest:microsoft                     | vscode.microsoft-authentication        |
| ms-vscode.js-debug                     | false | 428       | 10            | 6               | onCommand:extension.js-debug.clearAutoAttachVariables | ms-vscode.js-debug                     |
| vscode.testing-editor-contributions    | false | 4         | 1             | 51              | onStartupFinished                                     | vscode.testing-editor-contributions    |
| vscode.typescript-language-features    | false | 49        | 33            | 64              | onLanguage:typescript                                 | vscode.typescript-language-features    |
| vscode.yaml                            | false | -1        | -1            | -1              | onLanguage:yaml                                       | ms-azuretools.vscode-docker            |
| Angular.ng-template                    | false | 103       | 4             | 60              | onLanguage:typescript                                 | Angular.ng-template                    |
| bierner.markdown-checkbox              | false | 2         | 0             | 0               | api                                                   | yzhang.markdown-all-in-one             |
| bierner.markdown-emoji                 | false | 2         | 0             | 0               | api                                                   | yzhang.markdown-all-in-one             |
| bierner.markdown-yaml-preamble         | false | 8         | 0             | 0               | api                                                   | yzhang.markdown-all-in-one             |
| christian-kohler.npm-intellisense      | false | 37        | 0             | 60              | onLanguage:typescript                                 | christian-kohler.npm-intellisense      |
| dbaeumer.vscode-eslint                 | false | 31        | 4             | 47              | onStartupFinished                                     | dbaeumer.vscode-eslint                 |
| denoland.vscode-deno                   | false | 385       | 0             | 2121            | onLanguage:typescript                                 | denoland.vscode-deno                   |
| eamodio.gitlens                        | false | 116       | 2             | 110             | onStartupFinished                                     | eamodio.gitlens                        |
| esbenp.prettier-vscode                 | false | 135       | 45            | 6               | onStartupFinished                                     | esbenp.prettier-vscode                 |
| ms-azuretools.vscode-docker            | false | 1093      | 7             | 50              | onLanguage:yaml                                       | ms-azuretools.vscode-docker            |
| ms-vscode-remote.remote-containers     | false | 96        | 0             | 107             | onStartupFinished                                     | ms-vscode-remote.remote-containers     |
| ms-vscode-remote.remote-wsl            | false | 26        | 0             | 6               | onStartupFinished                                     | ms-vscode-remote.remote-wsl            |
| raagh.angular-karma-test-explorer      | false | 129       | 4             | 1               | \*                                                    | raagh.angular-karma-test-explorer      |
| redhat.vscode-yaml                     | false | 153       | 3             | 0               | onLanguage:yaml                                       | redhat.vscode-yaml                     |
| VisualStudioExptTeam.vscodeintellicode | false | 90        | 2             | 5059            | onLanguage:typescript                                 | VisualStudioExptTeam.vscodeintellicode |
| muuvmuuv.vscode-helper                 | false | 126       | 0             | 6               | onStartupFinished                                     | muuvmuuv.vscode-helper                 |

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
```

## Raw Perf Marks: renderer

```
Name	Timestamp	Delta	Total
code/timeOrigin	1610634594869	0	0
code/didStartRenderer	1610634595107	238	238
code/willShowPartsSplash	1610634595107	0	238
code/didShowPartsSplash	1610634595109	2	240
code/willLoadWorkbenchMain	1610634595114	5	245
code/willWaitForShellEnv	1610634595414	300	545
code/didWaitForShellEnv	1610634595414	0	545
code/didLoadWorkbenchMain	1610634595414	0	545
code/registerFilesystem/file	1610634595415	1	546
code/registerFilesystem/vscode-userdata	1610634595415	0	546
code/willInitWorkspaceService	1610634595421	6	552
code/willInitWorkspaceStorage	1610634595423	2	554
code/didInitWorkspaceStorage	1610634595451	28	582
code/didInitWorkspaceService	1610634595459	8	590
code/willStartWorkbench	1610634595459	0	590
code/LifecyclePhase/Ready	1610634595460	1	591
code/registerFilesystem/trustedDomains	1610634595515	55	646
code/willRestoreEditors	1610634595645	130	776
code/willRestoreViewlet	1610634595650	5	781
code/didRestoreViewlet	1610634595666	16	797
code/willResolveExplorer	1610634595686	20	817
code/willLoadExtensions	1610634595736	50	867
code/didResolveExplorer	1610634595836	100	967
code/didRestoreEditors	1610634596008	172	1139
code/LifecyclePhase/Restored	1610634596008	0	1139
code/didStartWorkbench	1610634596008	0	1139
code/didRemovePartsSplash	1610634596008	0	1139
code/willHandleExtensionPoints	1610634596326	318	1457
code/didHandleExtensionPoints	1610634596664	338	1795
code/didLoadExtensions	1610634596672	8	1803
```

## Raw Perf Marks: localExtHost

```
Name	Timestamp	Delta	Total
code/timeOrigin	1610634595853	0	0
code/fork/start	1610634596102	249	249
code/fork/willLoadCode	1610634596131	29	278
code/extHost/willConnectToRenderer	1610634596629	498	776
code/extHost/didConnectToRenderer	1610634596632	3	779
code/extHost/didWaitForInitData	1610634597967	1335	2114
code/extHost/didCreateServices	1610634597980	13	2127
code/extHost/willWaitForConfig	1610634597984	4	2131
code/extHost/didWaitForConfig	1610634598087	103	2234
code/extHost/didInitAPI	1610634598087	0	2234
code/extHost/didInitProxyResolver	1610634598092	5	2239
code/extHost/ready	1610634598095	3	2242
code/extHost/willLoadExtensionCode/vscode.microsoft-authentication	1610634598129	34	2276
code/extHost/didLoadExtensionCode/vscode.microsoft-authentication	1610634598155	26	2302
code/extHost/willLoadExtensionCode/vscode.extension-editing	1610634598156	1	2303
code/extHost/didLoadExtensionCode/vscode.extension-editing	1610634598183	27	2330
code/extHost/willLoadExtensionCode/vscode.typescript-language-features	1610634598184	1	2331
code/extHost/didLoadExtensionCode/vscode.typescript-language-features	1610634598233	49	2380
code/extHost/willLoadExtensionCode/Angular.ng-template	1610634598234	1	2381
code/extHost/didLoadExtensionCode/Angular.ng-template	1610634598337	103	2484
code/extHost/willLoadExtensionCode/christian-kohler.npm-intellisense	1610634598338	1	2485
code/extHost/didLoadExtensionCode/christian-kohler.npm-intellisense	1610634598375	37	2522
code/extHost/willLoadExtensionCode/denoland.vscode-deno	1610634598377	2	2524
code/extHost/didLoadExtensionCode/denoland.vscode-deno	1610634598762	385	2909
code/extHost/willLoadExtensionCode/VisualStudioExptTeam.vscodeintellicode	1610634598766	4	2913
code/extHost/didLoadExtensionCode/VisualStudioExptTeam.vscodeintellicode	1610634598856	90	3003
code/extHost/willLoadExtensionCode/vscode.debug-auto-launch	1610634598857	1	3004
code/extHost/didLoadExtensionCode/vscode.debug-auto-launch	1610634598863	6	3010
code/extHost/willLoadExtensionCode/vscode.git	1610634598864	1	3011
code/extHost/didLoadExtensionCode/vscode.git	1610634598921	57	3068
code/extHost/willLoadExtensionCode/alefragnani.project-manager	1610634598922	1	3069
code/extHost/didLoadExtensionCode/alefragnani.project-manager	1610634598934	12	3081
code/extHost/willLoadExtensionCode/artdiniz.quitcontrol-vscode	1610634598935	1	3082
code/extHost/didLoadExtensionCode/artdiniz.quitcontrol-vscode	1610634598944	9	3091
code/extHost/willLoadExtensionCode/bierner.emojisense	1610634598945	1	3092
code/extHost/didLoadExtensionCode/bierner.emojisense	1610634598954	9	3101
code/extHost/willLoadExtensionCode/christian-kohler.path-intellisense	1610634598955	1	3102
code/extHost/didLoadExtensionCode/christian-kohler.path-intellisense	1610634598984	29	3131
code/extHost/willLoadExtensionCode/CoenraadS.bracket-pair-colorizer	1610634598985	1	3132
code/extHost/didLoadExtensionCode/CoenraadS.bracket-pair-colorizer	1610634599011	26	3158
code/extHost/willLoadExtensionCode/donjayamanne.githistory	1610634599012	1	3159
code/extHost/didLoadExtensionCode/donjayamanne.githistory	1610634599068	56	3215
code/extHost/willLoadExtensionCode/EditorConfig.EditorConfig	1610634599069	1	3216
code/extHost/didLoadExtensionCode/EditorConfig.EditorConfig	1610634599099	30	3246
code/extHost/willLoadExtensionCode/formulahendry.auto-rename-tag	1610634599100	1	3247
code/extHost/didLoadExtensionCode/formulahendry.auto-rename-tag	1610634599122	22	3269
code/extHost/willLoadExtensionCode/Gruntfuggly.todo-tree	1610634599122	0	3269
code/extHost/didLoadExtensionCode/Gruntfuggly.todo-tree	1610634599155	33	3302
code/extHost/willLoadExtensionCode/hbenl.vscode-test-explorer	1610634599155	0	3302
code/extHost/didLoadExtensionCode/hbenl.vscode-test-explorer	1610634599179	24	3326
code/extHost/willLoadExtensionCode/icrawl.discord-vscode	1610634599180	1	3327
code/extHost/didLoadExtensionCode/icrawl.discord-vscode	1610634599193	13	3340
code/extHost/willLoadExtensionCode/jock.svg	1610634599194	1	3341
code/extHost/didLoadExtensionCode/jock.svg	1610634599541	347	3688
code/extHost/willLoadExtensionCode/mhutchie.git-graph	1610634599542	1	3689
code/extHost/didLoadExtensionCode/mhutchie.git-graph	1610634599586	44	3733
code/extHost/willLoadExtensionCode/mkxml.vscode-filesize	1610634599586	0	3733
code/extHost/didLoadExtensionCode/mkxml.vscode-filesize	1610634599636	50	3783
code/extHost/willLoadExtensionCode/muuvmuuv.vscode-sundial	1610634599637	1	3784
code/extHost/didLoadExtensionCode/muuvmuuv.vscode-sundial	1610634599659	22	3806
code/extHost/willLoadExtensionCode/nhoizey.gremlins	1610634599659	0	3806
code/extHost/didLoadExtensionCode/nhoizey.gremlins	1610634599661	2	3808
code/extHost/willLoadExtensionCode/msjsdiag.debugger-for-chrome	1610634599661	0	3808
code/extHost/didLoadExtensionCode/msjsdiag.debugger-for-chrome	1610634599819	158	3966
code/extHost/willLoadExtensionCode/streetsidesoftware.code-spell-checker	1610634599819	0	3966
code/extHost/didLoadExtensionCode/streetsidesoftware.code-spell-checker	1610634599869	50	4016
code/extHost/willLoadExtensionCode/stylelint.vscode-stylelint	1610634599870	1	4017
code/extHost/didLoadExtensionCode/stylelint.vscode-stylelint	1610634599942	72	4089
code/extHost/willLoadExtensionCode/vscode-icons-team.vscode-icons	1610634599942	0	4089
code/extHost/didLoadExtensionCode/vscode-icons-team.vscode-icons	1610634600005	63	4152
code/extHost/willLoadExtensionCode/vscode.npm	1610634600016	11	4163
code/extHost/didLoadExtensionCode/vscode.npm	1610634600051	35	4198
code/extHost/willLoadExtensionCode/yzhang.markdown-all-in-one	1610634600056	5	4203
code/extHost/didLoadExtensionCode/yzhang.markdown-all-in-one	1610634600130	74	4277
code/extHost/willActivateExtension/vscode.microsoft-authentication	1610634600138	8	4285
code/extHost/willActivateExtension/vscode.extension-editing	1610634600139	1	4286
code/extHost/willActivateExtension/vscode.typescript-language-features	1610634600139	0	4286
code/extHost/willActivateExtension/Angular.ng-template	1610634600172	33	4319
code/extHost/willActivateExtension/christian-kohler.npm-intellisense	1610634600176	4	4323
code/extHost/willActivateExtension/denoland.vscode-deno	1610634600176	0	4323
code/extHost/willActivateExtension/VisualStudioExptTeam.vscodeintellicode	1610634600177	1	4324
code/extHost/willActivateExtension/vscode.debug-auto-launch	1610634600179	2	4326
code/extHost/willActivateExtension/vscode.git	1610634600180	1	4327
code/extHost/willActivateExtension/alefragnani.project-manager	1610634600186	6	4333
code/extHost/willActivateExtension/artdiniz.quitcontrol-vscode	1610634600192	6	4339
code/extHost/willActivateExtension/bierner.emojisense	1610634600192	0	4339
code/extHost/willActivateExtension/christian-kohler.path-intellisense	1610634600197	5	4344
code/extHost/willActivateExtension/CoenraadS.bracket-pair-colorizer	1610634600198	1	4345
code/extHost/willActivateExtension/donjayamanne.githistory	1610634600213	15	4360
code/extHost/didActivateExtension/vscode.extension-editing	1610634600246	33	4393
code/extHost/didActivateExtension/vscode.typescript-language-features	1610634600246	0	4393
code/extHost/didActivateExtension/Angular.ng-template	1610634600246	0	4393
code/extHost/didActivateExtension/christian-kohler.npm-intellisense	1610634600246	0	4393
code/extHost/didActivateExtension/vscode.debug-auto-launch	1610634600246	0	4393
code/extHost/didActivateExtension/alefragnani.project-manager	1610634600246	0	4393
code/extHost/didActivateExtension/artdiniz.quitcontrol-vscode	1610634600246	0	4393
code/extHost/didActivateExtension/bierner.emojisense	1610634600246	0	4393
code/extHost/didActivateExtension/christian-kohler.path-intellisense	1610634600246	0	4393
code/extHost/didActivateExtension/CoenraadS.bracket-pair-colorizer	1610634600246	0	4393
code/extHost/didActivateExtension/donjayamanne.githistory	1610634600246	0	4393
code/extHost/willActivateExtension/EditorConfig.EditorConfig	1610634600290	44	4437
code/extHost/willActivateExtension/formulahendry.auto-rename-tag	1610634600291	1	4438
code/extHost/willActivateExtension/Gruntfuggly.todo-tree	1610634600293	2	4440
code/extHost/willActivateExtension/hbenl.vscode-test-explorer	1610634600318	25	4465
code/extHost/willActivateExtension/icrawl.discord-vscode	1610634600320	2	4467
code/extHost/willActivateExtension/jock.svg	1610634600322	2	4469
code/extHost/willActivateExtension/mhutchie.git-graph	1610634600326	4	4473
code/extHost/willActivateExtension/mkxml.vscode-filesize	1610634600341	15	4488
code/extHost/willActivateExtension/muuvmuuv.vscode-sundial	1610634600345	4	4492
code/extHost/willActivateExtension/nhoizey.gremlins	1610634600347	2	4494
code/extHost/willActivateExtension/msjsdiag.debugger-for-chrome	1610634600350	3	4497
code/extHost/willActivateExtension/streetsidesoftware.code-spell-checker	1610634600350	0	4497
code/extHost/willActivateExtension/stylelint.vscode-stylelint	1610634600350	0	4497
code/extHost/willActivateExtension/vscode-icons-team.vscode-icons	1610634600356	6	4503
code/extHost/willActivateExtension/vscode.npm	1610634600359	3	4506
code/extHost/willActivateExtension/yzhang.markdown-all-in-one	1610634600370	11	4517
code/extHost/didActivateExtension/EditorConfig.EditorConfig	1610634600601	231	4748
code/extHost/didActivateExtension/Gruntfuggly.todo-tree	1610634600601	0	4748
code/extHost/didActivateExtension/hbenl.vscode-test-explorer	1610634600601	0	4748
code/extHost/didActivateExtension/jock.svg	1610634600601	0	4748
code/extHost/didActivateExtension/mkxml.vscode-filesize	1610634600601	0	4748
code/extHost/didActivateExtension/muuvmuuv.vscode-sundial	1610634600601	0	4748
code/extHost/didActivateExtension/nhoizey.gremlins	1610634600601	0	4748
code/extHost/didActivateExtension/msjsdiag.debugger-for-chrome	1610634600601	0	4748
code/extHost/didActivateExtension/stylelint.vscode-stylelint	1610634600601	0	4748
code/extHost/didActivateExtension/vscode.npm	1610634600601	0	4748
code/extHost/didActivateExtension/yzhang.markdown-all-in-one	1610634600601	0	4748
code/extHost/didActivateExtension/mhutchie.git-graph	1610634600934	333	5081
code/extHost/didActivateExtension/vscode.git	1610634600962	28	5109
code/extHost/didActivateExtension/formulahendry.auto-rename-tag	1610634600979	17	5126
code/extHost/willLoadExtensionCode/bierner.markdown-checkbox	1610634601001	22	5148
code/extHost/didLoadExtensionCode/bierner.markdown-checkbox	1610634601003	2	5150
code/extHost/didActivateExtension/streetsidesoftware.code-spell-checker	1610634601356	353	5503
code/extHost/didActivateExtension/icrawl.discord-vscode	1610634602276	920	6423
code/extHost/didActivateExtension/vscode.microsoft-authentication	1610634602286	10	6433
code/extHost/didActivateExtension/denoland.vscode-deno	1610634602297	11	6444
code/extHost/willActivateExtension/bierner.markdown-checkbox	1610634602787	490	6934
code/extHost/didActivateExtension/bierner.markdown-checkbox	1610634602787	0	6934
code/extHost/willLoadExtensionCode/ms-vscode.js-debug	1610634603451	664	7598
code/extHost/didLoadExtensionCode/ms-vscode.js-debug	1610634603879	428	8026
code/extHost/willLoadExtensionCode/vscode.github	1610634603880	1	8027
code/extHost/didLoadExtensionCode/vscode.github	1610634603890	10	8037
code/extHost/willLoadExtensionCode/raagh.angular-karma-test-explorer	1610634603891	1	8038
code/extHost/didLoadExtensionCode/raagh.angular-karma-test-explorer	1610634604020	129	8167
code/extHost/willLoadExtensionCode/bierner.markdown-emoji	1610634604026	6	8173
code/extHost/didLoadExtensionCode/bierner.markdown-emoji	1610634604028	2	8175
code/extHost/willActivateExtension/ms-vscode.js-debug	1610634604304	276	8451
code/extHost/willActivateExtension/vscode.github	1610634604314	10	8461
code/extHost/willActivateExtension/raagh.angular-karma-test-explorer	1610634604315	1	8462
code/extHost/willActivateExtension/bierner.markdown-emoji	1610634604320	5	8467
code/extHost/didActivateExtension/ms-vscode.js-debug	1610634604322	2	8469
code/extHost/didActivateExtension/vscode.github	1610634604322	0	8469
code/extHost/didActivateExtension/raagh.angular-karma-test-explorer	1610634604322	0	8469
code/extHost/didActivateExtension/bierner.markdown-emoji	1610634604322	0	8469
code/extHost/willLoadExtensionCode/bierner.markdown-yaml-preamble	1610634604542	220	8689
code/extHost/didLoadExtensionCode/bierner.markdown-yaml-preamble	1610634604549	7	8696
code/extHost/willLoadExtensionCode/vscode.github-authentication	1610634604591	42	8738
code/extHost/didLoadExtensionCode/vscode.github-authentication	1610634604667	76	8814
code/extHost/willLoadExtensionCode/vscode.configuration-editing	1610634604668	1	8815
code/extHost/didLoadExtensionCode/vscode.configuration-editing	1610634604679	11	8826
code/extHost/willLoadExtensionCode/vscode.json-language-features	1610634604679	0	8826
code/extHost/didLoadExtensionCode/vscode.json-language-features	1610634604812	133	8959
code/extHost/willActivateExtension/bierner.markdown-yaml-preamble	1610634604813	1	8960
code/extHost/didActivateExtension/bierner.markdown-yaml-preamble	1610634604813	0	8960
code/extHost/willActivateExtension/vscode.github-authentication	1610634605094	281	9241
code/extHost/willActivateExtension/vscode.configuration-editing	1610634605101	7	9248
code/extHost/willActivateExtension/vscode.json-language-features	1610634605101	0	9248
code/extHost/didActivateExtension/vscode.configuration-editing	1610634605113	12	9260
code/extHost/didActivateExtension/vscode.json-language-features	1610634605113	0	9260
code/extHost/didActivateExtension/vscode.github-authentication	1610634605213	100	9360
code/extHost/didActivateExtension/VisualStudioExptTeam.vscodeintellicode	1610634605238	25	9385
code/extHost/didActivateExtension/vscode-icons-team.vscode-icons	1610634607699	2461	11846
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
