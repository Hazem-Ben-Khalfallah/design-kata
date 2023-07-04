class OrderService {

	private orderRepository: OrderSqlRepository;

	placeOrder(order: Order): void {
		// place the order
		this.orderRepository.sale(order);
	}

}