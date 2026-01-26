export class CheckoutPage {

    constructor() {

        this.urlCheckoutStepTwo = 'https://www.saucedemo.com/checkout-step-two.html';


        this.itemTotal = '#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label';
        this.tax = '#checkout_summary_container > div > div.summary_info > div.summary_tax_label';
        this.total = '#checkout_summary_container > div > div.summary_info > div.summary_total_label';
    }

    validarUrlCheckout() {
        cy.url().should('eq', this.urlCheckoutStepTwo);
        return this;
    }

    validarCalculoTotal() {
        let itemTotalValor;
        let taxValor;

        cy.get(this.itemTotal)
            .invoke('text')
            .then(textoItemTotal => {
                itemTotalValor = Number(
                    textoItemTotal.replace('Item total: $', '')
                );
            });

        cy.get(this.tax)
            .invoke('text')
            .then(textoTax => {
                taxValor = Number(
                    textoTax.replace('Tax: $', '')
                );

                cy.get(this.total)
                    .invoke('text')
                    .then(textoTotal => {
                        const totalMostrado = Number(
                            textoTotal.replace('Total: $', '')
                        );

                        const totalCalculado = Number(
                            (itemTotalValor + taxValor).toFixed(2)
                        );
                        expect(totalCalculado).to.eq(totalMostrado);
                    });
            });

        return this;
    }
}
