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
こちらは、npmやyarn、webpackといった  
フロントエンド用パッケージ管理ツールをmavenから実行できるようにし、  
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

[angular.json](angular.json)を編集します。  
projects -> client -> architect -> build -> options -> outputPath  
を `dist/client/` から、`dist/META-INF/resources/` と変更します。



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
