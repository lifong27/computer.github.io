function totalfood() {
    // Prevent form submission for calculating total
    event.preventDefault();
  
    // Get the selected item and its quantity
    const category = document.getElementById("category").value;
    const qty = parseInt(document.getElementById("qty").value) || 0;
  
    // Prices for each item
    const prices = {
      "Pizza": 15.00,
      "Chicken": 10.00,
      "Burger": 20.00,
      "Flat lay": 25.00,
    };
  
    // Calculate total based on selected item and quantity
    const price = prices[category];
    const total = qty * price;
  
    // Display the total in the 'total' input field
    document.getElementById("total").value = total.toFixed(2);
  }