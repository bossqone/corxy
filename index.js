#!/usr/bin/env node
const colors = require('colors');
const morgan = require('morgan');
const http = require('http');
const connect = require('connect');
const cors = require('cors');
const httpProxy = require('http-proxy');
const docopt = require('docopt').docopt;

const doc = `
corxy

Usage:
  corxy <target> [--port=<port>] [--host=<host>] [--origin=<origin>] [--credentials] [--insecure] [--log]
  corxy -h | --help | --version

Options:
  -p <port>, --port=<port>        Port number [default: 9000]
  -h <host>, --host=<host>        Host [default: 127.0.0.1]
  -o <origin>, --origin=<origin>  Restrict origin domain
  -c, --credentials               access-control-allow-credentials=true
  -i, --insecure                  Disable validation of SSL certificates
  -l, --log                       Display information about requests
`;

const options = docopt(doc, {
    version: require('./package').version
});
const port = options['--port'] || 9000;
const host = options['--host'] || '127.0.0.1';
const origin = options['--origin'] || true;
const credentials = options['--credentials'] || false;
const insecure = options['--insecure'] || false;
const log = options['--log'] || false;
let target = options['<target>'];

if (/^https?:\/\//.test(target) === false) {
    target = `http://${target}`;
}

const proxy = httpProxy.createProxyServer({
    target: target,
    secure: !insecure
});

proxy.on('error', (err) => {
    console.error(err);
});

const app = connect();

if (log) {
    app.use(morgan('dev'));
}

app.use(cors({
    origin: origin,
    credentials: credentials
}));

app.use((req, res) => {
    proxy.web(req, res);
});

http.createServer(app).listen(port, host);

console.log(`CORS proxy to ${target.green} running on http://${host.blue.bold}:${port.blue.bold}`);
