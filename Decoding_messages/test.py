def decode(message_file):
    pyramid_lines = []

    # Read the encoded message from the file
    with open(message_file, 'r') as file:
        for line in file:
            # Split each line into number and word
            parts = line.strip().split()
            number, word = int(parts[0]), parts[1]

            # Add the word to the corresponding pyramid line
            pyramid_lines.append((number, word))

    # Sort the pyramid lines based on the numbers
    sorted_lines = sorted(pyramid_lines, key=lambda x: x[0])

    # Extract the message words based on the pyramid structure
    decoded_message = ' '.join(word for _, word in sorted_lines)

    return decoded_message

# Example usage:
encoded_file = 'test.txt'
decoded_message = decode(encoded_file)
print(decoded_message)
