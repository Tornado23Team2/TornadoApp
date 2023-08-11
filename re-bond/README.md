# 開発用ドキュメント
Re:Bondチーム開発用に必要な情報をまとめたドキュメント。

## サーバー起動

```bash
npm run dev
```

## コミットメッセージ
コミットメッセージは以下のルールに沿って記述する。
- 1行目は実装内容をなるべく短く要約する。
- 1行目の先頭に下記表のPrefixから1つを選び記述する。
- 詳細に記述しなければならない内容がある場合は2行目を空行にし、3行目以降に記述する。

| Prefix  |  説明  |
| ------- | ------ |
| feat:   | 新しい機能 |
| improve:| 仕様に影響がない変更 |
| fix:    | バグの修正 |
| style:  | 空白、フォーマットの変更など |
| chore:  |  補助ツール、ライブラリ関連 |
| doc:    | ドキュメントの変更・追加 |
| test:   | テスト |
| break:  | 以前のバージョンへ戻す |

## ブランチ名の命名規則

ブランチ名は、以下の命名規則に従うこと。
### featureName/yourName/#issueNum