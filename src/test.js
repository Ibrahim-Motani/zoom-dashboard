function transformer(str) {
  //split the str first
  //then merge the elments between two double quotes
  let delimiter = ",";
  const quotes = '"';
  const elements = str.split(delimiter);
    const newElements = [];
    
  for (let i = 0; i < elements.length; ++i) {
    if (elements[i].indexOf(quotes) >= 0) {
      //the left double quotes is found
      var indexOfRightQuotes = -1;
      var tmp = elements[i];
      //find the right double quotes
      for (let j = i + 1; j < elements.length; ++j) {
        if (elements[j].indexOf(quotes) >= 0) {
          indexOfRightQuotes = j;
          break;
        }
      }
      //found the right double quotes
      //merge all the elements between double quotes
      if (-1 !== indexOfRightQuotes) {
        for (let j = i + 1; j <= indexOfRightQuotes; ++j) {
          tmp = tmp + delimiter + elements[j];
        }
        newElements.push(tmp);
        i = indexOfRightQuotes;
      } else {
        //right double quotes is not found
        newElements.push(elements[i]);
      }
    } else {
      //no left double quotes is found
      newElements.push(elements[i]);
    }
  }
  return newElements;
}



/////// working

function splitCSVButIgnoreCommasInDoublequotes(str) {
  //split the str first
  //then merge the elments between two double quotes
  var delimiter = ",";
  var quotes = '"';
  var elements = str.split(delimiter);
  var newElements = [];
  for (var i = 0; i < elements.length; ++i) {
    if (elements[i].indexOf(quotes) >= 0) {
      //the left double quotes is found
      var indexOfRightQuotes = -1;
      var tmp = elements[i];
      //find the right double quotes
      for (var j = i + 1; j < elements.length; ++j) {
        if (elements[j].indexOf(quotes) >= 0) {
          indexOfRightQuotes = j;
          break;
        }
      }
      //found the right double quotes
      //merge all the elements between double quotes
      if (-1 !== indexOfRightQuotes) {
        for (var j = i + 1; j <= indexOfRightQuotes; ++j) {
          tmp = tmp + delimiter + elements[j];
        }
        newElements.push(tmp);
        i = indexOfRightQuotes;
      } else {
        //right double quotes is not found
        newElements.push(elements[i]);
      }
    } else {
      //no left double quotes is found
      newElements.push(elements[i]);
    }
  }
  return newElements;
}  

