function combine(s1 = 'aaa', s2 = '') {
    if (s1.length > s2.length) {
        // var a = s2;
        // s1 = s2;
        // s2 = a;

        [s1,s2] = [s2,s1];
    }

    var r = ""

    for (var i = 0; i < s1.length; i++) {
        r = r + s1[i] + s2[i];
    }
    for (var i = s1.length; i < s2.length; i++) {
        r = r + s2[i];
    }
    return r;

}
