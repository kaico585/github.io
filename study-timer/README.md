# 勉強タイマー（PWA）
- 問題演習／ポモドーロ／単発に対応
- 各大問の時間は **<input type="time"> + rollable-datepicker** でホイール編集（iOSではネイティブのホイール、未対応環境ではCDNフォールバック）
- 一時停止→**再開で残り時間から再スタート**
- 予定超過（オーバー）計測、履歴に基づく**重み付き配分提案**
- **オフライン対応**（Service Worker）／**ホーム画面に追加**（PWA）

## 使い方
1. 任意の静的ホスティング（GitHub Pages, Netlify, Cloudflare Pages など）に `index.html` を配置。
2. 同じ階層に `sw.js` と `manifest.webmanifest`、`icons/` を置く。
3. HTTPS でアクセスすると、インストールボタンが有効になります。

## 注意
- Wake Lock API は HTTPS かつ対応ブラウザで有効です。
- iOSのホーム画面追加は Safari の共有メニューから行います（インストールボタンはChrome等で有効）。
