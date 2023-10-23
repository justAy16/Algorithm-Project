function analyzeSentence(sentence) {
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    const sentenceLength = sentence.length;

    for (let i = 0; i < sentenceLength; i++) {
        const char = sentence[i];

      // Increment the length counter for every character
        length++;

      // Check if the character is a space (word separator)
        if (char === ' ') {
        wordCount++;
        }

      // Check if the character is a vowel (case-insensitive)
        if ('aeiouAEIOU'.includes(char)) {
        vowelCount++;
        }
    }

    // Add 1 to wordCount to account for the last word (ending with a period)
    wordCount++;

    // Display the results
    console.log('Length of the sentence:', length);
    console.log('Number of words in the sentence:', wordCount);
    console.log('Number of vowels in the sentence:', vowelCount);
}

  // Example usage
    const inputSentence = 'This is a sample sentence. It has vowels and spaces.';
    analyzeSentence(inputSentence);
