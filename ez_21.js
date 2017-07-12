function(context, args) {
    // usage ez_21{target:#s.your.target}
    var c = ["open", "release", "unlock"];

    var llen = "!LOCK_UNLOCKED".length;

    var ret = "";

    var success = false;

    for (var k = 0; k < 3; k++) {
        // alt syntax
        /*var v = {};
        v["ez_21"]    = c[k];
        ret = args.target.call(v);*/

        ret = args.target.call({
            ez_21: c[k]
        })

        if (ret.substr(0, llen) === "!LOCK_UNLOCKED") {
            success = true;
            break;
        }
    }

    ///example to how to make a basic account transfer, makes the script medsec
    ///this \ is to prevent this from being thought of as medsec by the game when commented out
    //#s.accts.xfer\_gc_to({ to:"username", amount:"5KGC" });
    // ed note: the \ shouldn’t be needed. //-style quotes are stripped from the files on upload, so this won’t even be seen by the security level checker.

    return {
        ok: success,
        msg: ret
    };
}
