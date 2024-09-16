import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetOrdersQuery } from '../state/reallyPizzaApi'
import { updateDisplaySize } from '../state/pizzaSlice'

export default function OrderList() {
  // const {data: orders, isLoading: gettingOrders } = useGetOrdersQuery()
  const orders = useGetOrdersQuery().data || []
  const sizeFilter = useSelector(st => st.pizzaState.size)
  console.log("state of filter", sizeFilter)
  const dispatch = useDispatch()
  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {
          orders?.filter((order) => sizeFilter === order.size || sizeFilter === 'All').map((order) => {
            return (
              <li key={order.id}>
                <div>
                  {order.customer} ordered a size {order.size} with {order.toppings.length || 'no'} topping{order.toppings.length === 1 ? '' : 's'}
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
