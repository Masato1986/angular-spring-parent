# angular-spring-parent

クライアントサイドに Angular、サーバサイドに Spring Boot を使った、  
SPAのWebアプリケーションのひな型です。

クライアントサイドとサーバサイドをそれぞれ別のプロジェクトとして作成ています。

maven プロジェクトのモジュール機能を使って、下記の構成となっています。

## 全体の構成

 - angular-spring-parent → クライアント・サーバサイドを取りまとめる親プロジェクトです。
   - [client](client/README.md) → Angularのプロジェクトです。
   - [server](server/README.md) → Spring Bootのプロジェクトを格納しています。

## アプリケーションの作成時の注意点
親プロジェクト自体はパッケージングしないので、  
[pom.xml](pom.xml)に、  
```<packaging>pom</packaging>```  
を追加してください。

クライアントサイド、サーバサイドのプロジェクトを作成したら、  
[pom.xml](pom.xml)の、`modules` の設定を行ってください。

クライアントサイド、サーバサイドのプロジェクト作成時の注意点は  
[client](client/README.md)プロジェクト、  
[server](server/README.md)プロジェクト、  
それぞれのREADME.mdを参照してください。
