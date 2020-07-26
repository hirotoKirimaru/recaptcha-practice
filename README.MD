# 概要
Google recaptcha V3を実装するだけのソース

# 目的
個人で行っているブログにて、Google reCatpchaV3を導入するのに苦労した精神論を書きました。  
そうすると、毎日のように一定数の検索での流入がありました。  
  
なので、ソースとして残しておくことでもっと喜ばれるんじゃないかと思い、こちらのリポジトリを作成しました。

## 構成
- fronend
    - フロントエンドのソース
- backend
    - サーバサイドのソース

# 環境
- frontend
    - react
    - typescript
- backend
    - GCP
    - Node.js v12

# 動作確認用フロントページ
https://hirotokirimaru.github.io/recaptcha-practice/frontend/build/index.html

# ローカルでのフロントの動かし方
1. frontendに移動します。
```code
cd frontend
```

1. 起動
```code
yarn start
```

# ローカルでのサーバの動かし方
1. backendに移動します。
```code
cd backend
```
1. コードで記載しているexports.recaptcha を exports.mainにする。

1. 起動
```code
yarn start
```
で起動します。

# 備考
[きり丸の日記](https://nainaistar.hatenablog.com/entry/2020/03/10/012900)