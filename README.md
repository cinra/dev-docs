# ドキュメント置き場

## 構造

```sh
.
├── docs/
│   ├── .vuepress # theme関連ファイル
│   │   ├── config.js # ページ設定
│   │   ├── components # *.vue（記事内で読み込み可）
│   │   └── public # メディアディレクトリ
│   ├── README.md # トップページ
│   └── * # ページディレクトリ
│       └── *.md # ページデータ
└── vuepress/ # ドキュメントルート（dist）
```

## 執筆

### ドキュメント追加

`docs/**/*.md`

```
$ git add .
$ git commit -am ''
$ git push
# published to -> docs.cinra.net
```

## Theme編集

### Requirements

```
node >= 8.x.x
npm >= 5.x.x
```

### Install

```shell
$ yarn install
```

### Start

```
$ yarn dev
# look at -> localhost:8080
```