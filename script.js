// Good Luck 💪🏾
function count(char, str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === char) {
        count++;
      }
    }
    return count;
  }
  
  console.log(count("a", "fikrcamp")); 
  console.log(count("c", "bootcamp")); 
  console.log(count("o", "fikrcamp coding bootcamp")); 