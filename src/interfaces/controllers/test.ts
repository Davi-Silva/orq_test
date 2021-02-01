export interface IDataLoad {
  id: string;
  org_id: string;
  flow_id: string;
  data: [
    {
      id: string;
      name: string;
      phone: { code: string; number: string; type: string }[];
      email: string[];
    },
  ];
}

export interface IUpdateItemParams {
  TableName: string;
  Key: { id: string };
  UpdateExpression: string;
  ExpressionAttributeValues: {
    ':e': string;
    ':n': string;
  };
  ReturnValues: string;
}

export interface IDeleteItemParams {
  TableName: string;
  Key: {
    id: string;
  };
}
