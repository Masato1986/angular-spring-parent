# angular-spring-parent

クライアントサイドに`Angular`、サーバサイドに`Spring Boot`を使った、  
SPAのWebアプリケーションのひな型です。

クライアントサイドとサーバサイドをそれぞれ別のプロジェクトとして作成ています。

`maven`プロジェクトのモジュール機能を使って、下記の構成となっています。

## 全体の構成

 - angular-spring-parent → クライアント・サーバサイドを取りまとめる親プロジェクトです。
   - [client](client/README.md) → Angularのプロジェクトです。
   - server → Spring Bootのプロジェクトを格納しています。

