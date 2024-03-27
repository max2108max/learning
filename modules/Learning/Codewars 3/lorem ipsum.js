function justify(text, width) {
    let wid = 0
  
for (let i = 0; i < 10; i++) {
    if(text[wid+width].search(/[a-z]/)){console.log(`не буква`);}
    else console.log(`буква`);
}

    return text[wid+width]
  }
console.log(justify('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 20));
