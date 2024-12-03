function clock(totalSecods) {
    let hours = Math.trunc(totalSecods / 3600); 
  
    totalSecods = totalSecods - hours * 3600;
    let minutes = Math.trunc(totalSecods / 60); 
  
    totalSecods = totalSecods - minutes * 60;
    let seconds = Math.trunc(totalSecods); 
    if (hours   < 9) {hours = "0" + hours;}
    if (minutes < 9) {minutes = "0" + minutes;}
    if (seconds < 9) {seconds = "0" + seconds;}
    

    return `${hours}:${minutes}:${seconds}`;
  }
  console.log(clock(67123));



  