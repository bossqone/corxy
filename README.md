CORxy - Simple CORS proxy
=================

```bash
$ npm install -g corxy
```

## Usage
```bash
corxy <target> [--port=<port>] [--host=<host>] [--origin=<origin>] [--credentials] [--insecure] [--log]
corxy -h | --help | --version
```

## Options
```bash
-p <port>, --port=<port>        Port number [default: 9000]
-h <host>, --host=<host>        Host [default: 127.0.0.1]
-o <origin>, --origin=<origin>  Restrict origin domain
-c, --credentials               access-control-allow-credentials=true
-i, --insecure                  Disable validation of SSL certificates
-l, --log                       Display information about requests
```

## License

MIT License

Copyright (c) [2017] [Lukáš Kováč]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.