/**
 * Created by UNIVESRE on 17/8/5.
 */

var n = 1;
search:
while (n < 99999) {
    n += 1;
    for (var i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            continue search;
        }
    }

    // Found The Prime;
    postMessage(n);
}
