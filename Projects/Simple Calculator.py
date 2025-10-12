# Simple Calculator

# Ask the user for numbers
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# Ask the user for the operation
operator = input("Choose an operation (+, -, *, /): ")

# Perform calculation based on the operator
if operator == '+':
    result = num1 + num2
elif operator == '-':
    result = num1 - num2
elif operator == '*':
    result = num1 * num2
elif operator == '/':
    # Handle division by zero
    if num2 != 0:
        result = num1 / num2
    else:
        result = "Error: Cannot divide by zero!"
else:
    result = "Invalid operator"

# Show the result
print("Result:", result)
