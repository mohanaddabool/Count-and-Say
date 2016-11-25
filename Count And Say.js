function countAndSay(n) {
    if (n <= 0)
        return null;
 
    var result = "1";
    var i = 1;
 
    while (i < n) {
        var sb = '';
        var count = 1;
        for (var j = 1; j < result.length; j++) {
            if (result.charAt(j) == result.charAt(j - 1))//to compare current char with previous char
            {
                count++;
            }
            else // if no Repetition you must add the previous char to the char were you are counting then rest the count to start new char
            {
                sb += count;
                sb += result.charAt(j - 1);
                count = 1;
            }
        }
 // here you must bulid the result from if and else
        sb += count;
        sb += result.charAt(result.length - 1);
        result = sb;
        i++;
    }
 
    return result;
}

console.log(countAndSay(5));