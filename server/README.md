# Server
Spring Boot によるサーバサイドのプロジェクトです。  
https://start.spring.io/ よりWebのアプリケーションを作成してください。

## アプリケーションの作成時の注意点
`dependency` にクライアントサイドのプロジェクトを追加してください。  
設定内容は [pom.xml](pom.xml) の
 - TODO クライアントサイドのプロジェクトを依存性に追加　ここから
 - TODO クライアントサイドのプロジェクトを依存性に追加　ここまで

を参照してください。

### Spring Bootにおける静的コンテンツの取り扱い
Spring Bootでは、静的コンテンツの格納場所として
 - classpath:/META-INF/resources/
 - classpath:/resources/
 - classpath:/static/
 - classpath:/public/

の四か所がデフォルトで設定されています。  

### maven のパッケージをして成果物を確認する
今度は、親プロジェクトで maven のパッケージを行います。  
`client` → `server` の順でパッケージが行われ、最終的に、  
サーバサイドのプロジェクトの成果物である `server-1.0-SNAPSHOT.jar` の内部に、  
`client-1.0-SNAPSHOT.jar` が含まれます。  
(クライアントサイドのプロジェクトを maven の dependency に追加しているためです)

```
C:\Users\***\***\angular-spring-parent\server\target>jar tf server-1.0-SNAPSHOT.jar BOOT-INF/lib/client-1.0-SNAPSHOT.jar
BOOT-INF/lib/client-1.0-SNAPSHOT.jar
```

### クライアントサイドのプロジェクトのビルドの成果物の配置場所を調整した理由
クライアントサイドのプロジェクトで、  
`/META-INF/resources/` 配下にビルドの成果物を出力するようにした理由は、  
`classpath:/META-INF/resources/` 配下にビルド後の index.html や main-es5.js を配置するためです。  
そうすることによって、自動的に静的コンテンツとして扱われるようになります。

### 実行してみる
せっかく jar ファイルを生成したので、実行してみましょう。  
下記をターミナルかコマンドプロンプトで実行してください。  
`java -jar server-1.0-SNAPSHOT.jar` 

`Started ServerApplication in 1.787 seconds (JVM running for 2.148)`  
とコンソールに出力されたら、 http://localhost:8080 にWebブラウザからアクセスしてください。  
![トップページイメージ](https://raw.githubusercontent.com/Masato1986/images/master/index.jpg)
という画面が表示されます。

また、コンソールに  
` Adding welcome page: class path resource [META-INF/resources/index.html]`  
と出力されていることに注目してください。  
Spring Bootでは静的コンテンツの配置場所に置かれた index.html を Welcome Page に自動的に設定してくれるので、  
http://localhost:8080 にWebブラウザからアクセスするだけで、上記のページが閲覧できるようになります。

