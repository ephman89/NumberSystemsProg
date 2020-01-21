function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);
    var c = Math.abs(parseInt(document.getElementById("2_SignedInt").value));

    var out = "";
    while (c != 0)
    {
      out = c % 2 + out;
      c = Math.trunc(c / 2);
    }
    while (out.length<32){
      out = "0"+ out;
    }

    var outputValueTwosComplement = "";

    for (var i =0; i< outputValue.length; i++){
      if (out.charAt(i)==0){
        outputValueTwosComplement += 1;
      }
      else {
        outputValueTwosComplement += 0;
      }
    }




    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}
