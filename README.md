# about
AWS Lambda Functionの(自分向けの)TypeScriptボイラープレートです。  

`functions`ディレクトリ中にルーティングするように作られています。
DynamoDB系のサンプルファイルも入っています。

`.env.example`系のファイルが２つあるので、`.example`を消してからご使用ください(.env系のファイルはデフォルトで.gitignoreしています)

DynamoDB Localも使用して、ローカル環境開発をまとめています。

# Installed
- Webpack
- Serverless offline
- Serverless Dynamo-local
- ESLint
- Pretter
- Jest-ts


Install
```
> yarn
> sls dynamodb install
```

offline

```
> sls offline
```


Development
```
> sls deploy
```

Production
```
> sls deploy --env production
```
