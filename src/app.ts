import 'dotenv/config';
import '@database/dynamoDB';
import express from 'express';

import middlewares from '@middlewares/index';

import routes from '@routes/index';

const app = express();

middlewares(app);

routes(app);

import { createItem, index, updateItem, deleteItem } from '@controllers/test';

/* createItem({
  id: '3',
  org_id: '1',
  flow_id: '1',
  data: [
    {
      email: ['test@test.com'],
      id: '1',
      name: 'Test',
      phone: [{ code: '21', number: '42363463234', type: 'cel' }],
    },
  ],
}); */

/* index(); */

/* updateItem('3', 'day@trade.com', 'Day Trade'); */

/* deleteItem('hello@world.com'); */

export default app;
