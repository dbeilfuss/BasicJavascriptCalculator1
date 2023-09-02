const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("What would you like to calculate? (i.e. '4 + 2')", function(input){

		/// array containing the parts of the input, split apart
		const tokens = input.split(' ');
	
		/// constants containing each part of the request
		const mathSymbol = tokens[1];
		const num1 = Number(tokens[0]);
		const num2 = Number(tokens[2]);

		/// a string containing the formula
		const calculationString = `${num1} ${mathSymbol} ${num2} = `

		/// the variable that will contain the result when we're finished
		let result = null

		/// where the math happens
		switch (mathSymbol) {
			case "+":
				result = `${num1 + num2}`;
				break;
			case "-":
				result = `${num1 - num2}`;
				break;
			case "*":
				result = `${num1 * num2}`;
				break;
			case "/":
				result = `${num1 / num2}`;
				break;
			case "√":
				result = `${num2 ** (1/num1)}`;
				break;

			/// an error message if the math can't happen
			default:
				console.log("Request not recognized.");
				console.log("Be sure to include a space between each number and math symbol (i.e. '4 * 30', not '4*30').");
				console.log("Press 'option + V' to insert a '√' symbol (i.e. '2 √ 9' for the square root of 9).");
		}

		/// Print the answer
		if (result) {
			console.log(calculationString + result)
		}

	// This line closes the connection to the command line interface.
	reader.close()

});
