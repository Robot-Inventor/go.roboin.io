# go.roboin.io

[go.roboin.io](https://go.roboin.io)からアクセス可能な自分用の短縮リンクのリポジトリー。JSONファイルからCloudflare Pages用の`_redirects`ファイルを生成する。

## 更新方法

`./src/json/links.json`を更新する。リダイレクトコードについては次を参照すること。

- `301`：恒久的なリダイレクト。将来にわたってリダイレクト先が変更されない場合に使用する
- `302`：一時的なリダイレクト。リダイレクト先が将来変更される可能性がある場合に使用する

`./src/json/links.json`を更新したら、`main`ブランチにpushすることで自動的にデプロイされる。
