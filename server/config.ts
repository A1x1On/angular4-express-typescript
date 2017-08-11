export const secret: string = "RbBQqA6uF#msRF8s7h*?@=95HUm&DgMDd6zLFn4XzWQ6dtwXSJwBX#?gL2JWf!";
export const length: number = 128;

export function config(): any {
  try {
    return require('./config.local');
  } catch (e) {
  }


  return {
    dev1: {
      name: "dev",
      dbconnection: {
        host: "localhost",
        user: "root",
        password: "12345678",
        database: "general",
        multipleStatements: true,
        connectionLimit: 100
      },
      port: 3000
    }
  }[process.env.ENV];
}




