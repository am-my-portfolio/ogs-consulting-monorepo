import { Injectable } from '@nestjs/common';
import { IResponse } from '@am-ogs/types';
import { BaseLoggerService } from '../../services/base-logger/base-logger.service';
import { MealmeAxiosClientService } from '../../gateways/mealme-axios-client/mealme-axios-client.service';
import {
  ListOrdersRequest,
  OrderFinalizeRequest,
  OrderRequest,
} from '../../models/requests/order.request';
import { Order } from '../../models/order.interface';

@Injectable()
export class OrderService {
  constructor(
    private readonly mealMeClientService: MealmeAxiosClientService,
    private readonly logger: BaseLoggerService,
  ) {
    logger.classContext = this.constructor.name;
  }

  async createOrder(body: OrderRequest): Promise<IResponse<Order>> {
    let response: IResponse<Order>;
    try {
      const order: Order = await this.mealMeClientService.post<Order>(
        'order/order/v2',
        body,
      );
      response = {
        status: true,
        statusCode: 200,
        message: 'Order Created Succesfully',
        data: order,
      };
    } catch (error) {
      response = {
        status: false,
        statusCode: 500,
        message: 'Order Failed to Create',
        error: error.message,
      };
    }
    return response;
  }

  async finalizeOrder(body: OrderFinalizeRequest): Promise<IResponse<Order>> {
    let response: IResponse<Order>;
    try {
      const order: Order = await this.mealMeClientService.post<Order>(
        'order/finalize',
        body,
      );
      response = {
        status: true,
        statusCode: 200,
        message: 'Order Finalized Succesfully',
        data: order,
      };
    } catch (error) {
      response = {
        status: false,
        statusCode: 500,
        message: 'Order Failed to Finalize',
        error: error.message,
      };
    }
    return response;
  }

  async listOrders(query: ListOrdersRequest): Promise<IResponse<Order[]>> {
    let response: IResponse<Order[]>;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const orderList = await this.mealMeClientService.get<any>(
        'account/orders',
        query,
      );
      response = {
        status: true,
        statusCode: 200,
        message: 'Orders Listed Successfully',
        data: orderList.orders,
      };
    } catch (error) {
      response = {
        status: false,
        statusCode: 500,
        message: 'Orders Failed to List',
        error: error.message,
      };
    }
    return response;
  }
}
