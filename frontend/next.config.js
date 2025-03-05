module.exports = {
    rewrites: async () => [
      {
        source: "/api/:path*",
        destination: "http://backend:8081/api/:path*",
      },
    ],
  };
  