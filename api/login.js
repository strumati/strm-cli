const https = require("https");
const http = require("http");

http.createServer((req,res)=>{
    if (new URL("x://x"+req.url).searchParams.get("code")) {
        const request = https.request(
            "https://api.strumati.cloud/v1/code?code="+new URL("x://x"+req.url).searchParams.get("code"),
            { method: "GET" },
            (response) => {
                let body = "";

                response.on("data", (chunk) => {
                    body += chunk;
                });

                response.on("end", () => {
                    const token = new URLSearchParams(JSON.parse(body).cookie
                        .replace("; ","&"))
                        .get("jwt");


                    config["TOKEN"] = token;
                    config["API"] = "api.strumati.cloud"
                    configWrite();

                    process.exit();
                });
            }
        );

        request.on("error", (error) => {
            console.error("HTTPS request failed:", error.message);
        });

        request.end();

        res.writeHead(200,{"content-type":"text/html"});
        res.end("<span>You can close this</span><script>window.close()</script>");
    }
}).listen(16574)


const url = "https://auth.strumati.cloud/oauth?redirect=http://localhost:16574"

require('child_process').exec('xdg-open '+url)

console.log("If you can't open a browser configure the link so it works for you: "+url.replace("localhost","{your_ip}"));
