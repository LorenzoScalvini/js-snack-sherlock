document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const word1 = document.getElementById("word1").value;
    const word2 = document.getElementById("word2").value;
    
    const result = findCommonSequence(word1, word2);
    document.getElementById("result").textContent = result;
});

function findCommonSequence(word1, word2) {
    let commonChars = "";
    let maxLength = Math.min(word1.length, word2.length);
    
    for (let i = 0; i < maxLength; i++) {
        for (let j = i + 1; j <= maxLength; j++) {
            const substring = word1.slice(i, j);
            if (word2.includes(substring) && substring.length > commonChars.length) {
                commonChars = substring;
            }
        }
    }
    
    return commonChars;
}