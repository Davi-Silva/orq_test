import { DynamoDB, config } from 'aws-sdk';
import awsConfig from '@config/database/dynamoDB';

config.update(awsConfig);

const docClient: DynamoDB.DocumentClient = new DynamoDB.DocumentClient();

export default docClient;
