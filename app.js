const app = new Vue({
  el: "table",
  data: {
    items: [
      { description: "Website design", quantity: 1, price: 300 }
    ]
  },
  computed: {
    total() {
      return this.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    }
  },
  methods: {
    addRow() {
      this.items.push({ description: "", quantity: 1, price: 0 });
    },

    deleteItem: function(index) {
        this.items.splice(index, 1)
    },
    // printInvoice: function() {
    //     window.print();
    // },
   
  },
  
  filters: {
    currency(value) {
      return value.toFixed(2);
    }
  }
});
