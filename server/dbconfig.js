const getDbConfig = () => {
    let dbConfig = {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_DATABASE || 'sevenheaven_local',
      user: process.env.DB_USER || '',
      password: process.env.DB_PASSWORD || '',
      poolSize: 3,
    };

    if (process.env.NODE_ENV === 'test') {
      dbConfig = {
        host: 'localhost',
        port: 5432,
        database: 'songscore_test',
        user: '',
        password: '',
        poolSize: 3,
      };
    }
    
    return dbConfig;
};
export default getDbConfig;