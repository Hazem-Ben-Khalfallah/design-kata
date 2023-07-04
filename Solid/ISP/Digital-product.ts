class PhysicalProduct {

	getPrice(): number {
		// calculate product price based on unit price, discounts, taxes ..
		return price;
	}

	isShipable(): boolean {
		return false;
	}

	trackShipment(): ShipmentStatus {
		throw new Error("Digital products does not require shipment tracking!")
	}

	// some other methods related to product

}