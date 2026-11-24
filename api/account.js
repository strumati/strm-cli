const https = require("https");

const options = {
    hostname: config["API"],
    path: "/v1/test",
    method: "GET",
    headers: {
        "Cookie": `jwt=${config["TOKEN"]}`,
        "User-Agent": "strm"
    }
};

https.request(options, (res) => {
    let data = "";

    res.on("data", chunk => {
        data += chunk;
    });

    res.on("end", () => {
        if (res.statusCode == 200) {
            // print account info

            const json = JSON.parse(atob(config["TOKEN"].split(".")[0]))

            console.log("");
            console.log(" -",json.name);
            console.log(" -",json.id);
            console.log("");

        } else {
            // please login via strm login
        }
    });
}).on("error", (err) => {
    console.error(err);
}).end();

