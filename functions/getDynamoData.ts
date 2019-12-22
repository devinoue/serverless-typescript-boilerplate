import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client'

export function getDynamoData(): any {
  const dynamoDB: DocumentClient = new AWS.DynamoDB.DocumentClient()

  const params = {
    TableName: process.env.DYNAMO_TABLE,
    KeyConditionExpression: 'Id = :id',

    ExpressionAttributeValues: {
      ':id': 'id',
    },
    ScanIndexForward: false,
  }

  return new Promise((resolve, reject) => {
    dynamoDB
      .query(params)
      .promise()
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        console.error(err)
        reject(err)
      })
  })
}
