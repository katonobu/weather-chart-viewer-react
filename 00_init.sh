# 初期設定
node --version
sudo apt-get update
sudo apt-get install -y nodejs npm

# プロジェクト生成
npm create vite@latest weather-chart-viewer -- --template react

mv weather-chart-viewer/* .
