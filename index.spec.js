const jsCurl = require('./index');

const pc = cmd => console.log(JSON.stringify(jsCurl.parseCurl(cmd), null, 2));

// https: //www.rosehosting.com/blog/curl-command-examples/
test('parseCurl', () => {
    const cmd = `curl 'http://google.com/' -H 'Accept-Encoding: gzip, deflate, sdch' -H 'Accept-Language: en-US,en;q=0.8,da;q=0.6' -H 'Upgrade-Insecure-Requests: 1' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Connection: keep-alive' --compressed`;
    pc(cmd);
    // pc('curl https://domain.com');
    // pc('curl -o website https://domain.com'); // *
    // pc('curl -O https://domain.com/file.zip'); // *
    // pc('curl -O https://domain.com/file.zip -O https://domain.com/file2.zip'); // *
    // pc('curl -u user sftp://server.domain.com/path/to/file'); // *
    // pc('curl -I http://domain.com'); // *
    pc('curl ftp://ftp.domain.com --user username:password'); // *
    pc('curl -T file.zip ftp://ftp.domain.com/ --user username:password'); // *
    pc('curl -d password=x http://x.com/y'); // *
    pc(`curl -i -H 'Accept: application/json' -X POST -F "filename=@/file/path" -F "other_field=its_value"   "http://hostname/resource"`);
    pc(`curl -i -H 'Content-Type: application/json' -H 'Accept: application/json' -X DELETE -d '{"key1":"value1"}' "http://hostname/resource"`);
    pc(`curl -s \
     -X POST https://10.240.0.100:5000/v2.0/tokens \
     -H "Content-Type: application/json" \
     -d '{"auth": {"tenantName": "TENANT", "passwordCredentials":{"username": "USERNAME", "password": "PASSWORD"}}}'`);
    pc(`curl -i \
     -H "Content-Type: application/json" \
     -d '
        { "auth": {
            "identity": {
              "methods": ["password"],
              "password": {
                "user": {
                  "name": "USERNAME",
                  "domain": { "id": "default" },
                  "password": "PASSWORD"
                }
              }
            },
            "scope": {
              "project": {
                "name": "PROJECT",
                "domain": { "id": "default" }
              }
            }
          }
        }' \
     https://10.240.0.100:5000/v3/auth/tokens`);
    expect(3).toBe(3);
});
