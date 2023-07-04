class OrderService {

	private orderRepository: OrderSqlRepository;

	constructor(orderRepository: OrderSqlRepository) {
		this.orderRepository = orderRepository;
	}

	placeOrder(order: Order): void {
		// place the order
		this.orderRepository.sale(order);
	}

}