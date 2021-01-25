import os
try:
    from SimpleHTTPServer import SimpleHTTPRequestHandler as Handler
    from socketserver import TCPServer as Server
except ImportError:
    from http.server import SimpleHTTPRequestHandler as Handler
    from http.server import HTTPServer as Server

PORT = int(os.getenv('PORT', 8000))

os.chdir('wpp')

httpd = Server(("", PORT), Handler)
try:
    print("Start serving at port %i" % PORT)
    httpd.serve_forever()
except KeyboardInterrupt:
    pass
httpd.server_close