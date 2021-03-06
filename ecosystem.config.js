module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [{
    name      : 'node-deploy-test',
    script    : './index.js',
    env: {
      PORT: 3000,
      NODE_ENV: 'development'
    },
    watch: true,
    instance_var: 'INSTANCE_ID',
    env_production : {
      PORT: 8000,
      NODE_ENV: 'production'
    },
    instances  : 4,
    exec_mode  : "cluster"
  }],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   },
  //   dev : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/development',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
  //     env  : {
  //       NODE_ENV: 'dev'
  //     }
  //   }
  // }
};
