class Shop {

	sellItem(Product product, Customer customer): void {
		const price = product.getPrice();
		const customerCredit = customer.getWallet().getBalance().getAmount();

		if (customerCredit >= price) {
			// process the sale
			// ...
		}
	}

}