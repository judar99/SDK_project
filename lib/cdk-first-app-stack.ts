import * as cdk from '@aws-cdk/core';
import * as lambda from "@aws-cdk/aws-lambda";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import * as apigw from "@aws-cdk/aws-apigateway";
const path = require('path');



export class CdkFirstAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //Dynamodb
    const greetingsTable = new dynamodb.Table(this,"GreetingTable",{
      partitionKey: {name: "id", type: dynamodb.AttributeType.STRING},
    });

    //Lambda
    const saveHelloFuntion = new lambda.Function(this,"SaveHelloFuntion",{
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'handler.saveHello',
      code: lambda.Code.fromAsset(path.resolve(__dirname,'lambda')),
      environment: {
        GREETINGS_TABLE: greetingsTable.tableName,
      },
    });
    //permiso para lambda
    greetingsTable.grantWriteData(saveHelloFuntion);

    //APIgatway
    const helloAPI =new apigw.RestApi(this,"helloApi");

    helloAPI.root
      .resourceForPath("hello")
      .addMethod("POST", new apigw.LambdaIntegration(saveHelloFuntion))


  }
}