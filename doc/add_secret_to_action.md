GitHub SecretsへのAWSキー登録は、以下の手順で行います。

***

### ✅ **1. AWSキーを準備**

*   IAMユーザー作成時に取得した **`AWS_ACCESS_KEY_ID`** と **`AWS_SECRET_ACCESS_KEY`** を用意。
*   CSVをダウンロードして安全に保管しておく。

***

### ✅ **2. GitHubリポジトリでSecretsを設定**

1.  GitHubで対象リポジトリを開く。
2.  上部メニューから **「Settings」** をクリック。
3.  左メニューで **「Secrets and variables」 → 「Actions」** を選択。
4.  **「New repository secret」** をクリック。

***

### ✅ **3. Secretsを追加**

*   **Name**：`AWS_ACCESS_KEY_ID`
*   **Value**：IAMで取得したアクセスキーID
*   **「Add secret」** をクリック。

同様にもう一つ追加：

*   **Name**：`AWS_SECRET_ACCESS_KEY`
*   **Value**：IAMで取得したシークレットアクセスキー
*   **「Add secret」** をクリック。

***

### ✅ **4. GitHub Actionsで利用**

*   YAML内で以下のように参照します：

```yaml
with:
  aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
  aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

***

💡 **セキュリティのポイント**

*   Secretsは暗号化され、GitHub Actions内でのみ利用可能。
*   キーをコミットやログに出力しない。
*   不要になったキーはIAM側で削除。

