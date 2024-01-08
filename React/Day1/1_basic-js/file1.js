var dev1;

(function (ns) {
    function hello() {
        console.log("Hello from File One...");
    }

    ns.hello = hello;
})(dev1 = dev1 || {});