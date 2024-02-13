function validateFormSubmit() {
  var myOutput = ""; //This will be used to store the output of the form and to display the details
  var errors = ""; //This will be used to store any messages

  var namee = document.getElementById("namee").value;
  var phone = document.getElementById("phone").value;
  var postcode = document.getElementById("postcode").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var province = document.getElementById("province").value;
  var email = document.getElementById("email").value;
  var creditcard = document.getElementById("creditcard").value;
  var creditcardexpmonth = document.getElementById("creditcardexpmonth").value;
  var creditcardexpyear = document.getElementById("creditcardexpyear").value;
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  var product1 = document.getElementById("product").value;
  var product2 = document.getElementById("secondproduct").value;

  //using if else statement
  //three equal to refers to strict equality operator checking every type and value.

  //Validating name
  if (namee == "") {
    errors += "Name is required <br/>";
  } else {
    errors += "";
  }

  // Validating the phone patterns
  var phoneregex = /^\(?(\d{3})\)?[\.\-\/\s]?(\d{3})[\.\-\/\s]?(\d{4})$/;

  if (phone == "") {
    errors += "Phone is required <br/>";
  } else if (phoneregex.test(phone)) {
    // Returns true if phone satisfies the pattern
    errors += ""; // No error in phone
  } else {
    // Error found in phone; concatenating to the existing list of errors
    errors += "Phone is not in correct format <br/>";
  }

  //Validating the postcode
  var postcoderegex = /^[A-Z][0-9][A-Z]\s[0-9][A-Z][0-9]$/;

  //Converting to UpperCase
  postcode = postcode.toUpperCase();

  // Checking if the postcode fits the pattern
  if (postcode == "") {
    errors += "Postcode is required <br/>";
  } else if (postcoderegex.test(postcode)) {
    // Returns true if postcode satisfies the pattern
    errors += ""; // No error in postcode
  } else {
    errors += "Post code is not in correct format <br/>"; // Error found in postcode
  }

  //Validating the address
  if (address == "") {
    errors += "Address is required <br/>";
  } else {
    errors += "";
  }

  //Validating the city
  if (city == "") {
    errors += "City is required <br/>";
  } else {
    errors += "";
  }

  //Validating the province
  if (province == "") {
    errors += "Province is required <br/>";
  } else {
    errors += "";
  }

  //Validating Email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email == "") {
    errors += "Email is required <br/>";
  } else if (emailRegex.test(email)) {
    errors += ""; // No error in email
  } else {
    errors += "Email is not in correct format <br/>"; // Error found in error
  }

  //Validating Credit Card
  var creditCardRegex = new RegExp("^[0-9]{13,19}$");
  if (creditcard == "") {
    errors += "Credit Card is required <br/>";
  } else if (!creditCardRegex.test(creditcard)) {
    errors += "";
  } else {
    errors += "Credit Card is not in correct format <br/>"; // Error found in error
  }

  //Validating Credit Card Expiry Month
  if (creditcardexpmonth == "") {
    errors += "Credit Card expiry month is required <br/>";
  } else {
    errors += "";
  }

  //Validating Credit Card Expiry Year
  if (creditcardexpyear == "") {
    errors += "Credit Card expiry year is required <br/>";
  } else {
    errors += "";
  }

  //Validating Password
  if (password == "") {
    errors += "Password is required <br/>";
  } else if (password.length < 8) {
    errors += "Password must be at least 8 character. <br/>";
  } else {
    errors += "";
  }

  //Validating Confirm Password
  if (confirmpassword == "") {
    errors += "Please confirm your password <br/>";
  } else if (confirmpassword != password) {
    errors += "Passwords doesn't match <br/>";
  } else {
    errors += "";
  }

  // Products Bought Validation and calculation of the total cost before tax
  if (product1 == "" && product2 == "") {
    errors += "Selecting product is required <br/>";
  }
  //Checking if the product bought by user exceeds $10 or not
  else if (product1 != "" && product2 != "") {
    var totalCostBT = parseInt(product1) + parseInt(product2);
    if (totalCostBT < 10) {
      errors += "The minimum purchase should be $10 <br/>";
    } else {
      errors += "";
    }
  } else if (product1 != "" || product2 == "") {
    //Checking if the product bought by user exceeds $10 or not
    var totalCostBT = parseInt(product1);
    if (totalCostBT < 10) {
      errors += "The minimum purchase should be $10 <br/>";
    } else {
      errors += "";
    }
  } else if (product1 == "" || product2 != "") {
    //Checking if the product bought by user exceeds $10 or not
    var totalCostBT = parseInt(product2);
    if (totalCostBT < 10) {
      errors += "The minimum purchase should be $10 <br/>";
    } else {
      errors += "";
    }
  } else {
    errors += "";
  }

  //Checking if any errors are found.
  if (errors.trim() != "") {
    document.getElementById("errors").innerHTML = errors;
    document.getElementById("formResult").innerHTML = "";
  } else {
    //Getting bought product
    var productBought1 =
      product1 == "7"
        ? "Original T-shirt - $7.00"
        : product1 == "8"
        ? "Skyblue - 8.00$"
        : product1 == "10"
        ? "Black Vibing - $10.00"
        : product1 == "5"
        ? "White T-shirt - $5.00"
        : product1 == "6"
        ? "Colorful T-shirt - $6.00"
        : product1 == "17"
        ? "Three Set - $17.00"
        : product1 == "14"
        ? "Two White T-shirt - $14.00"
        : product1 == "12"
        ? "Knot T-shirt - $12.00"
        : product1 == "13"
        ? "Rainbow T-shirt - $13.00"
        : product1 == "9"
        ? "Four Set Shirt - $9.00"
        : product1 == "3"
        ? "Shirt & Glasses - $3.00"
        : product1 == "4"
        ? "Green T-shirt - $4.00"
        : "No Product Selected";

    var productBought2 =
      product2 == "7"
        ? "Original T-shirt - $7.00"
        : product2 == "8"
        ? "Skyblue - 8.00$"
        : product2 == "10"
        ? "Black Vibing - $10.00"
        : product2 == "5"
        ? "White T-shirt - $5.00"
        : product2 == "6"
        ? "Colorful T-shirt - $6.00"
        : product2 == "17"
        ? "Three Set - $17.00"
        : product2 == "14"
        ? "Two White T-shirt - $14.00"
        : product2 == "12"
        ? "Knot T-shirt - $12.00"
        : product2 == "13"
        ? "Rainbow T-shirt - $13.00"
        : product2 == "9"
        ? "Four Set Shirt - $9.00"
        : product2 == "3"
        ? "Shirt & Glasses - $3.00"
        : product2 == "4"
        ? "Green T-shirt - $4.00"
        : "No Product Selected";

    //Calculating Sales tax according to province
    var salesTax =
      province == "Alberta"
        ? totalCostBT * 0.05
        : province == "British Columbia"
        ? totalCostBT * 0.12
        : province == "Manitoba"
        ? totalCostBT * 0.12
        : province == "Newbrunswick"
        ? totalCostBT * 0.15
        : province == "Newfoundland"
        ? totalCostBT * 0.15
        : province == "Labrador"
        ? totalCostBT * 0.15
        : province == "Nova Scotia"
        ? totalCostBT * 0.15
        : province == "Ontario"
        ? totalCostBT * 0.13
        : province == "Prince Edward Island"
        ? totalCostBT * 0.15
        : province == "Quebec"
        ? totalCostBT * 0.14975
        : totalCostBT * 0.11; //Saskatchewan

    //Calculating total cost after tax
    var totalCostAT = salesTax + totalCostBT;

    //Displaying all the user details with products bought and its calculation
    myOutput = `Name: ${namee} <br>
              Phone: ${phone} <br>
              PostCode: ${postcode} <br>
              Address: ${address} <br>
              City: ${city}<br>
              Province: ${province}<br>
              Email: ${email} <br>
              Credit Card: ${creditcard} <br>
              Expiry Month: ${creditcardexpmonth} <br>
              Expiry Year: ${creditcardexpyear} <br>
              Password: ${password} <br>
              Confirm Password: ${confirmpassword} <br>
              First Product: ${productBought1} <br>
              Second Product: ${productBought2} <br>
              Total Cost(Before Tax): ${totalCostBT} <br>
              Sales Tax: ${salesTax}<br>
              Total Cost(After Tax): ${totalCostAT}<br>     
  `;

    //Removing the error messages
    document.getElementById("errors").innerHTML = "";

    // Showing the details entered by the user and the total cost
    document.getElementById("formResult").innerHTML = myOutput;
  }

  //It will stop the form from submitting
  return false;
}
