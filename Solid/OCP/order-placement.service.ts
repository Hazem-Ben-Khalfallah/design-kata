class OrderPlacementService {

	placeOrder( order: Order, user: User): void {
		if( user.fidelityLevel === "silver") {
			// apply 5% discount for silver level users
			order.applyDiscount(0.05);
		} else if( user.fidelityLevel === "gold") {
			// apply 10% discount for gold level users
			order.applyDiscount(0.1);
		}

		// place the order in the system
		// ...
	}

}