# 初期設定
node --version
sudo apt-get update
sudo apt-get install -y nodejs npm
npm install

# AWS CLI インストール
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
rm awscliv2.zip

# ここで下記を聞かれる。
## AWS Access Key ID: IAMユーザーのアクセスキー
## AWS Secret Access Key: IAMユーザーのシークレットキー
## Default region name: 例 ap-northeast-1（東京リージョン）
## Default output format: json（推奨）
aws configure
aws configure list
