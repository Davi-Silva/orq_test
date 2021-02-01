import docClient from '@database/dynamoDB';

import {
  IDataLoad,
  IUpdateItemParams,
  IDeleteItemParams,
} from '@interfaces/controllers/test';

export function createItem(dataLoad: IDataLoad): void {
  const params: { TableName: string; Item: IDataLoad } = {
    TableName: 'charges',
    Item: dataLoad,
  };

  docClient.put(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
}

export function index(): void {
  const params: { TableName: string } = {
    TableName: 'charges',
  };

  docClient.scan(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
}

export function updateItem(id: string, email: string, name: string): void {
  const params: IUpdateItemParams = {
    TableName: 'charges',
    Key: { id },
    UpdateExpression: 'set data[0].email[0] = :e, data[0].name = :n',
    ExpressionAttributeValues: {
      ':e': email,
      ':n': name,
    },
    ReturnValues: 'UPDATED_NEW',
  };

  docClient.update(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
}

export function deleteItem(id: string): void {
  const params: IDeleteItemParams = {
    TableName: 'charges',
    Key: { id },
  };

  docClient.delete(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
}
