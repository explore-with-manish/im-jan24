module.exports = {
    apps: [
        {
            name: "node-api",
            script: "./bin/www",
            instances: "max",
            exec_mode: "cluster",
            env: {
                NODE_ENV: "development",
                PORT: 5000
            },
            env_test: {
                NODE_ENV: "test",
                PORT: 6000
            },
            env_production: {
                NODE_ENV: "test",
                PORT: 10000
            }
        }
    ]
};