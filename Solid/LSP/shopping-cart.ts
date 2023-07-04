class ShoppingCart {

	private items: Product[] = [];

	addItem(item: Product): void {
		this.items.push(item);
	}

	calculateTotal(): number {
		let total = 0;
		for (const item of this.items) {
			total +⁼ item.price;
		}
		return total;
	}

}