# about
AWS Lambda Functionの(自分向けの)TypeScriptボイラープレートです。  

`functions`ディレクトリ中にルーティングするように作られています。

`.env.example`系のファイルが２つあるので、`.example`を消してからご使用ください(.env系のファイルはデフォルトで.gitignoreしています)

DynamoDBの使用を想定しています。

# インストール済み
- Serverless offline
- Serverless Dynamo-local
- ESLint
- Pretter


Install
```bash
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
