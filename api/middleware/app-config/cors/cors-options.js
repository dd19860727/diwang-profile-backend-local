const corsOptions = {
    origin: 'http://example.com',
    allowedHeaders:['Origin','Content-Type','Accept','Authorization'],
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions;