export function handleRoute(req, res) {
    const { url } = req;
  
    res.setHeader('Content-Type', 'text/plain');
  
    if (url === '/') {
      res.statusCode = 200;
      res.end('Welcome to the Homepage!');
    } else if (url === '/about') {
      res.statusCode = 200;
      res.end('This is the About Page. Here we share our mission.');
    } else if (url === '/contact') {
      res.statusCode = 200;
      res.end('Contact us at shegezzy@gmail.com');
    }else if (url === '/me') {
        res.statusCode = 200;
        res.end('You must like');
    } else {
      res.statusCode = 404;
      res.end('404 - Page Not Found');
    }
  }
  