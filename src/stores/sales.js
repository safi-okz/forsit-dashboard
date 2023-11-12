import { defineStore } from 'pinia';

export const useSalesStore = defineStore('salesStore', {
    state: () => ({
        sales_data: [
            {
              "platform": "Amazon",
              "order_id": "AMZN12345",
              "date": "2023-10-01",
              "product_id": "P123",
              "quantity_sold": 10,
              "price_per_unit": 25.99,
              "total_sales_revenue": 259.90
            },
            {
              "platform": "Walmart",
              "order_id": "WMRT67890",
              "date": "2023-10-02",
              "product_id": "P456",
              "quantity_sold": 5,
              "price_per_unit": 19.99,
              "total_sales_revenue": 99.95
            },
            {
              "platform": "Amazon",
              "order_id": "AMZN67890",
              "date": "2023-10-02",
              "product_id": "P789",
              "quantity_sold": 8,
              "price_per_unit": 14.49,
              "total_sales_revenue": 115.92
            }
          ],
          orders: [
            {
              "order_id": "ORD12345",
              "date": "2023-10-01",
              "customer_name": "John Doe",
              "shipping_address": "123 Main Street, Cityville, State",
              "items": [
                {
                  "product_id": "P123",
                  "product_name": "Widget A",
                  "quantity": 2,
                  "price_per_unit": 19.99
                },
                {
                  "product_id": "P456",
                  "product_name": "Widget B",
                  "quantity": 3,
                  "price_per_unit": 29.99
                }
              ],
              "total_order_amount": 139.95
            },
            {
              "order_id": "ORD67890",
              "date": "2023-10-02",
              "customer_name": "Jane Smith",
              "shipping_address": "456 Elm Street, Townsville, State",
              "items": [
                {
                  "product_id": "P789",
                  "product_name": "Widget C",
                  "quantity": 1,
                  "price_per_unit": 49.99
                }
              ],
              "total_order_amount": 49.99
            },
            {
              "order_id": "ORD67890",
              "date": "2023-10-02",
              "customer_name": "Jane Smith",
              "shipping_address": "456 Elm Street, Townsville, State",
              "items": [
                {
                  "product_id": "P789",
                  "product_name": "Widget C",
                  "quantity": 1,
                  "price_per_unit": 49.99
                }
              ],
              "total_order_amount": 49.99
            },
            {
              "order_id": "ORD67890",
              "date": "2023-10-02",
              "customer_name": "Jane Smith",
              "shipping_address": "456 Elm Street, Townsville, State",
              "items": [
                {
                  "product_id": "P789",
                  "product_name": "Widget C",
                  "quantity": 1,
                  "price_per_unit": 49.99
                }
              ],
              "total_order_amount": 49.99
            },
            {
              "order_id": "ORD67890",
              "date": "2023-10-02",
              "customer_name": "Jane Smith",
              "shipping_address": "456 Elm Street, Townsville, State",
              "items": [
                {
                  "product_id": "P789",
                  "product_name": "Widget C",
                  "quantity": 1,
                  "price_per_unit": 49.99
                }
              ],
              "total_order_amount": 49.99
            },
            {
              "order_id": "ORD67890",
              "date": "2023-10-02",
              "customer_name": "Jane Smith",
              "shipping_address": "456 Elm Street, Townsville, State",
              "items": [
                {
                  "product_id": "P789",
                  "product_name": "Widget C",
                  "quantity": 1,
                  "price_per_unit": 49.99
                }
              ],
              "total_order_amount": 49.99
            },
            {
              "order_id": "ORD67890",
              "date": "2023-10-02",
              "customer_name": "Jane Smith",
              "shipping_address": "456 Elm Street, Townsville, State",
              "items": [
                {
                  "product_id": "P789",
                  "product_name": "Widget C",
                  "quantity": 1,
                  "price_per_unit": 49.99
                }
              ],
              "total_order_amount": 49.99
            },
          ]
    }),
    getters: {
        totalSales(state){
            return state.sales_data.reduce((acc, curr) => acc += curr.quantity_sold, 0);
        
        },
        totalOrders(state){
            return state.orders.length;
        }
    },
    actions: {

    }
    });