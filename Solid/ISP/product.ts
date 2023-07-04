interface Product {

	getPrice(): number;

	isShipable(): boolean;
	
	trackShipment(): ShipmentStatus;
}