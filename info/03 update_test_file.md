# テストのトラブルシューティング

Flaky テストを導入し、CircleCI MCP ツールでトラブルシューティングを行う方法を説明します。

## Flaky テストの導入

### 1. テストファイルの更新
現在の安定したテストファイルを Flaky テストに置き換えます。

```bash
# index.test.backup を index.test.js に上書き
cp index.test.backup index.test.js
```

### 2. Flaky テストの種類
`index.test.backup` には以下の種類の Flaky テストが含まれています：

- **ランダム失敗テスト**: 5%、10%、15% の確率で失敗
- **タイミング依存テスト**: 実行時の秒数が 7、11、13 で割り切れる時に失敗
- **実行時間可変テスト**: 3-25秒の可変実行時間
- **重い計算処理テスト**: ネストしたループによる重い処理

### 3. 変更のコミットとプッシュ

```bash
git add .
git commit -m "Introduce flaky tests for demonstration"
git push origin main
```

## Flaky テストのトラブルシューティング

### 1. Flaky テストの特定
Amazon Q チャットで問題のあるテストを特定してください。

```
# サンプル
このレポジトリのCircleCIの実行結果を確認して、問題があれば適切なトラブルシューティングを行って。
```

### 2. 更新されたテストファイルの確認
- CircleCI MCP ツールが問題のあるテストを自動検出します
- 安定したテストに修正するための提案が提供されます
- 必要に応じて追加の調整を行ってください
