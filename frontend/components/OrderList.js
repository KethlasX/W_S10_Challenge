import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetOrdersQuery } from '../state/reallyPizzaApi'
import { updateDisplaySize } from '../state/pizzaSlice'

export default function OrderList() {
  // const {data: orders, isLoading: gettingOrders } = useGetOrdersQuery()
  const orders = useGetOrdersQuery().data || []
  const sizeFilter = useSelector(st => st.pizzaState.size)
  const dispatch = useDispatch()
  console.log('orders', orders)
  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {
          orders?.map(() => {
            return (
              <li key={orders.id}>
                <div>
                  order details here
                  {/* need to display orders */}
                </div>
              </li>
            )
          })
        }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L'].map(size => {
            const className = `button-filter${size === 'All' ? ' active' : ''}`
            return <button
              // ONCLICK
              onClick={() => dispatch(updateDisplaySize(size))}
              data-testid={`filterBtn${size}`}
              className={className}
              key={size}>{size}</button>
          })
        }
      </div>
    </div>
  )
}
