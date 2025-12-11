# CircleCI MCP セットアップガイド

このガイドに従って CircleCI MCP サーバーをセットアップしてください。

## 前提条件

### 1. VS Code Amazon Q Developer 拡張機能のインストール
VS Code で拡張機能をインストール、または[Amazon Q Developer 拡張機能](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.amazon-q-vscode)から詳細を確認

### 2. CircleCI パーソナルアクセストークンの取得
1. [CircleCI アカウント設定](https://app.circleci.com/settings/user/tokens)にアクセス
2. "Create New Token" をクリック
3. トークン名を入力（例: "MCP Server Token"）
4. "Add API Token" をクリック
5. 生成されたトークンをコピーして保存

## セットアップ手順

### 1. MCP 設定ファイルのコピー
```bash
cp .amazonq/mcp.json.template .amazonq/mcp.json
```

### 2. CircleCI トークンの設定
```bash
# .amazonq/mcp.json ファイルを編集
# YOUR_CIRCLECI_TOKEN を実際のトークンに置き換え
```

### 3. VS Code で MCP を更新
Amazon Q のチャット画面右上にある工具アイコン「Configure MCP servers」よりご確認いただけます。

## トラブルシューティング

### MCP サーバーが起動しない場合
```bash
# Node.js がインストールされているか確認
node --version
npm --version

# npx が利用可能か確認
npx --version
```

### 下記のメッセージが表示された時
エラーメッセージ:
```
MCP: server 'circleci-local' failed to connect: Command 'npx' not found. Please ensure it's installed and on your PATH.
```

解決方法:
```bash
sudo ln -s "$(which npx)" /usr/local/bin/npx
sudo ln -s "$(which node)" /usr/local/bin/node
```