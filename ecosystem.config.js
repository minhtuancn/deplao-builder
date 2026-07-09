module.exports = {
  apps: [{
    name: 'deplao-web',
    script: 'dist/server.js',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      WEB_PORT: 8080,
    },
    error_file: 'logs/err.log',
    out_file: 'logs/out.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    max_memory_restart: '1G',
    // Auto-restart on crash
    autorestart: true,
    watch: false,
  }],
};
