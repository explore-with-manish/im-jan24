var dev2;

(function (ns) {
    function hello() {
        console.log("Hello from File Two...");
    }

    ns.hello = hello;
})(dev2 = dev2 || {});