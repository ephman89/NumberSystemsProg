function ConversionPart1() {

    var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);


    var Int2 = document.getElementById("1_UnsignedInt").value;

      var c = 0;
      while (Int2 != "") {
        c = c * UnsignedIntBaseFrom + parseChar(Int2.charAt(0));
        Int2 = Int2.substring(1, UnsignedInt.length);
      }

      var out = "";




      // Show the output on the screen
      FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, out], 1);

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


    }
