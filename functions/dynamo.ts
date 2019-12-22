import { getDynamoData } from './getDynamoData'

import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
export const main: APIGatewayProxyHandler = async (event, _context) => {
  const res = await getDynamoData()

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: res,
      },
      null,
      2,
    ),
  }
}
