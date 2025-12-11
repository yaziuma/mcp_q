# 前提条件
circleciのMCPサーバーは以下を前提にしています。

For NPX installation:
- pnpm package manager
- Node.js >= v18.0.0

## Node.js のインストール
以下のリンクから公式のインストール手順が参照可能です。

https://nodejs.org/

### 1. nvm のダウンロードとインストール
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

### 2. nvm の有効化
```bash
# シェルを再起動する代わりに実行
\. "$HOME/.nvm/nvm.sh"
```

### 3. Node.js のインストール
```bash
nvm install 24
```

## インストール確認

### Node.js バージョン確認
```bash
node -v
```

### npm バージョン確認
```bash
npm -v
```

## 追加パッケージのインストール

### pnpm のインストール
```bash
npm install -g pnpm
```

### pnpm バージョン確認
```bash
pnpm -v
```
