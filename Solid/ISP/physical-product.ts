class PhysicalProduct {

	getPrice(): number {
		// calculate product price based on unit price, discounts, taxes ..
		return price;
	}

	isShipable(): boolean {
		return true;
	}

	trackShipment(): ShipmentStatus {
		// implementation
		return shipmentStatus;
	}

	// some other methods related to product

}