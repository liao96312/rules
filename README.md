# 目录
- [起点](#起点)
- [Spotify](#spotify)
- [Spotify歌词翻译](#spotify歌词翻译)
- [哔哩哔哩](#哔哩哔哩)
- [贴吧](#贴吧)

**_点击下方各自链接,查看能去哪些广告_**

## 起点
> Loon和Surge均支持对tcp链接进行解密,可以完美去广告
> qx目前不支持对TCP链接进行MITM,需全程开启代理软件

qx去广告无效的解决办法:

目前只能删除起点app,重新下载安装使用

| 软件 | 链接 |
| :-----| :---- |
| Surge | https://raw.githubusercontent.com/app2smile/rules/master/module/qidian.sgmodule |
| Loon | https://raw.githubusercontent.com/app2smile/rules/master/plugin/qidian.plugin |
| qx | Rewrite:https://raw.githubusercontent.com/app2smile/rules/master/module/qidian.conf |


## Spotify
> 需要系统版本>=iOS15  
> Spotify音质不能设置为超高

| 软件 | 链接 |
| :-----| :---- |
| Surge | https://raw.githubusercontent.com/app2smile/rules/master/module/spotify.module |
| Loon | https://raw.githubusercontent.com/app2smile/rules/master/plugin/spotify.plugin |
| qx | Rewrite:https://raw.githubusercontent.com/app2smile/rules/master/module/spotify.conf |
| qx（独立去广告版） | Rewrite:https://raw.githubusercontent.com/liao96312/rules/master/module/spotify-noad-qx.conf |

> 独立版保留原模块的部分 Premium/HiFi 相关响应改写；原模块注明音质不能设置为超高。为近似原 Surge 的 Spotify 专属 QUIC 规则，需在 Quantumult X 主配置 `[general]` 中加入 `udp_drop_list = QUIC`（若已有该项则合并）；这是全局设置，会拦截所有应用的 QUIC。现有 `spotify.conf` 未改动。


## Spotify歌词翻译
> https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-lyric.js


## 哔哩哔哩
> 需要系统版本>=iOS15

| 软件 | 链接 |
| :-----| :---- |
| Surge | https://raw.githubusercontent.com/app2smile/rules/master/module/bilibili.sgmodule |
| Loon | https://raw.githubusercontent.com/app2smile/rules/master/plugin/bilibili.plugin |
| qx | Filter:https://raw.githubusercontent.com/app2smile/rules/master/rule/bilibili-ad-qx.list  <br> Rewrite:https://raw.githubusercontent.com/app2smile/rules/master/module/bilibili-qx.conf |


## 贴吧
> 需要系统版本>=iOS15

| 软件 | 链接 |
| :-----| :---- |
| Surge | https://raw.githubusercontent.com/app2smile/rules/master/module/tieba.sgmodule |
| Loon | https://raw.githubusercontent.com/app2smile/rules/master/plugin/tieba.plugin |
| qx | Filter:https://raw.githubusercontent.com/app2smile/rules/master/rule/tieba-ad-qx.list  <br> Rewrite:https://raw.githubusercontent.com/app2smile/rules/master/module/tieba-qx.conf |
