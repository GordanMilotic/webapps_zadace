function convert(number){
    let sati=Math.floor(number/60);
    let minute=number%60;
    console.log(sati + ":" + minute);
}
convert(71);
convert(230);