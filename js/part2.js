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

    var output2C = "";

    for (var i =0; i< out.length; i++){
      if (out.charAt(i)==0){
        output2C += 1;
      }
      else {
        output2C += 0;
      }
    }

    for (var i = output2C.length -1; i>=0 ; i--){
          if (output2C.charAt(i)=="0"){
            output2C= output2C.substring(0, i)+"1"+output2C.substring(i+1);
            i = -10;
          }
          else{
            output2C= output2C.substring(0, i)+"0"+output2C.substring(i+1);
           }
        }

        {
        var UnsignedInt = out;
        var UnsignedIntBaseFrom = 2;
        var UnsignedIntBaseTo = 16;

        var value = 0;
        while (UnsignedInt != "") {
          value = value * UnsignedIntBaseFrom + parseChar(UnsignedInt.charAt(0));
          UnsignedInt = UnsignedInt.substring(1, UnsignedInt.length);
        }

        var med = "";

        while (value != 0) {
          med = assignChar(value % UnsignedIntBaseTo) + med;
          value = Math.trunc(value / UnsignedIntBaseTo);
        }

        out =med;
        while (out.length<8){
          out = "0" + out;
        }
      }

      {
      var UnsignedInt = output2C;
      var UnsignedIntBaseFrom = 2;
      var UnsignedIntBaseTo = 16;

      var value = 0;
      while (UnsignedInt != "") {
        value = value * UnsignedIntBaseFrom + parseChar(UnsignedInt.charAt(0));
        UnsignedInt = UnsignedInt.substring(1, UnsignedInt.length);
      }

      var med = "";

      while (value != 0) {
        med = assignChar(value % UnsignedIntBaseTo) + med;
        value = Math.trunc(value / UnsignedIntBaseTo);
      }

      output2C =med;
    }

    FormatAndShowOutput([output2C, out, SignedDecimalInt], 2);
     
    }
    function parseChar(thing) {
      switch (thing) {
        case "a":
          return 10;
          break;
        case "b":
          return 11;
          break;
        case "c":
          return 12;
          break;
        case "d":
          return 13;
          break;
        case "e":
          return 14;
          break;
        case "f":
          return 15;
          break;
        case "A":
          return 10;
          break;
        case "B":
          return 11;
          break;
        case "C":
          return 12;
          break;
        case "D":
          return 13;
          break;
        case "E":
          return 14;
          break;
        case "F":
          return 15;
          break;
        default:
          return parseInt(thing);
          break;
      }
    }
    function assignChar(thing) {
      switch (thing) {
        case 10:
            return "A";
          break;
        case 11:
            return "B";
          break;
        case 12:
            return "C";
          break;
        case 13:
            return "D";
          break;
        case 14:
            return "E";
          break;
        case 15:
            return "F";
          break;
        default:
          return "" + thing;
          break;

      }
    }
