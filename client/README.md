# Client

Angular によるクライアントサイドのプロジェクトです。
作成するためには、

 - Node.js
 - Angular CLI

がインストールされていることが前提です。  
Node.js は https://nodejs.org/ja/ よりダウンロードして、インストールしてください。  
Angular CLI は ターミナルやコマンドプロンプトで下記のコマンドを実行して、インストールしてください。  
```npm install -g @angular/cli```


## アプリケーションの作成時の注意点
下記の手順で作成してください。

 - 空の maven プロジェクトを作成します  
 （本サンプルではプロジェクトの名前を client として作成しています）
 - ターミナルもしくはコマンドプロンプトで `ng new client --routing` を実行します
 - `Which stylesheet format would you like to use?`   
 と stylesheet のフォーマットの選択が聞かれますのでお好みのものを選択します  
 （本サンプルはCSSで選択しています）
 - src/main、src/test は本プロジェクトでは不要ですので削除します

これで標準的な Angular プロジェクトが出来上がります。  
次に、 Angular プロジェクトを maven のパッケージからビルドできるように調整します。

### frontend-maven-plugin の導入
[https://github.com/eirslett/frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin)  
を導入します。
こちらは、npm や yarn、webpack といった  
フロントエンド用パッケージ管理ツールを maven から実行できるようにし、  
クライアントサイドアプリケーションで必要なライブラリのダウンロードやビルドまでを  
maven のコマンドで実行できるようにするプラグインです。  

[pom.xml](pom.xml) の  

 - TODO リソースファイルの配置場所を dist にする設定 ここから
 - TODO リソースファイルの配置場所を dist にする設定 ここまで

を参照してください。

### maven プロジェクトのリソース関連の配置フォルダの変更
maven プロジェクトではリソース関連のファイルはデフォルトでは、  
`src/main/resources` に配置するようになっていますが、本プロジェクトでは、`dist` フォルダに設定します。

[pom.xml](pom.xml) の  

 - TODO リソースファイルの配置場所を dist にする設定 ここから
 - TODO リソースファイルの配置場所を dist にする設定 ここまで

を参照してください。

### maven clean の対象フォルダの追加
Angular プロジェクトではビルド後の成果物が `dist` フォルダに生成されるので、  
`dist` フォルダも maven の clean の対象にします。

[pom.xml](pom.xml) の  

 - TODO maven clean の対象フォルダの追加 ここから
 - TODO maven clean の対象フォルダの追加 ここまで

を参照してください。

### Angular プロジェクト ビルド後の成果物の出力先の変更
Angular プロジェクトではビルド後の成果物がデフォルトでは、  
`dist/client/` となっていますので、`dist/META-INF/resources/` と変更します。

[angular.json](angular.json) を編集します。  
projects -> client -> architect -> build -> options -> outputPath  
を `dist/client/` から、`dist/META-INF/resources/` と変更します。

### maven のパッケージをして成果物を確認する
ここまでの変更が完了したら、クライアントサイドプロジェクトの maven のパッケージを行いましょう。  
`target/classes/META-INF/resources` 配下に、

 - index.html
 - main-es5.js

等が生成されていることが確認できます。

`target` 直下に生成される `client-1.0-SNAPSHOT.jar`　にも  
`/META-INF/resources` 配下に、上記の index.html や main-es5.js 等が同胞されます。

`/META-INF/resources`　配下に、index.html 等を出力する理由は、  
[server](../server/README.md) の方で説明します。
