class ShipmentTracker {

	private products: Product[] = [];

	constructor(products: Product[]): void {
		this.products = products;
	}

	trackAllShipments(): ShipmentStatus[] {
		const shipmentStatuses: ShipmentStatus[] = [];
		for (const product of this.products) {
			if( product.isShipable()) {
				shipmentStatuses.push(product.trackShipment());
			}
		}
		return shipmentStatuses;
	}

	// other shopping cart methods

}