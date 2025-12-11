# CircleCI MCP デモ

**VS Code Amazon Q Developer 拡張機能**を使用して、CircleCI MCP サーバーの機能をテストするためのシンプルな Node.js プロジェクトです。

## CircleCI MCP セットアップ

### 前提条件
- VS Code に [Amazon Q Developer 拡張機能](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.amazon-q-vscode)をインストール
- [CircleCI アカウント設定](https://app.circleci.com/settings/user/tokens)から CircleCI パーソナルアクセストークンを取得
- [CircleCI MCP Server ドキュメント](https://github.com/CircleCI-Public/mcp-server-circleci#prerequisites)で追加の前提条件を確認

### セットアップ手順
1. `.amazonq/mcp.json.template` を `.amazonq/mcp.json` にコピー
2. `<your_circleci_token>` を実際の CircleCI トークンに置き換え
3. Amazon Q Developer 拡張機能で MCP を更新

### 参考リンク
- [Amazon Q Developer ドキュメント](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/)
- [CircleCI ドキュメント](https://circleci.com/docs/)