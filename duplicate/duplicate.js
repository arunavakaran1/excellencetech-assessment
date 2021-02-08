const yourArray = [1,2, 3, 4, 5, 5,6,7,8,9,10,11,11,12,13,14,15,16,17,18,19,20,21,22,23,23,34]

let duplicates = []

const tempArray = [...yourArray].sort()

for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicates.push(tempArray[i])
  }
}

document.write(duplicates) 