import * as SQLite from 'expo-sqlite';

export const Database = {
  getConnection: () => {
    
    const db = SQLite.openDatabase('usuarios_manager.db');

    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists Cadastros( id integer primary key not null, senha int not null, nome text not null, email text not null, endereco text not null);'
      );
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });

    return ExecuteQuery;
  },
};

export default Database;