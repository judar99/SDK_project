import * as cdk from '@aws-cdk/core';
import * as lambda from "@aws-cdk/aws-lambda";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import * as apigw from "@aws-cdk/aws-apigateway";


import { Lambda } from 'aws-cdk-lib/aws-ses-actions';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkFirstAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkFirstAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
