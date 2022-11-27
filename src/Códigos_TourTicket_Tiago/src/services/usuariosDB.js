import Database from './DBServices';

const DB_EXEC = Database.getConnection();

export const getCadastros = async () => {
  let results = await DB_EXEC(`select * from cadastro`);
  console.log(results);
  return results.rows._array;
}

export const insertCadastros = async (param) => {
  let results = await DB_EXEC(`insert into cadastros(nome, senha, email, endereco)values(?,?,?,?)`, [param.nome, param.senha,param.email,param.endereco]);
  console.log(results); 
  return results.rowsAffected;
}

export const updateCadastros = async (param) => {
  let results = await DB_EXEC(`update cadastros set nome=?, senha=?, email=?,endereco=? where id=?`, [param.nome, param.senha,param.email,param.id]);
  console.log(results); 
  return results.rowsAffected;
}

export const deleteCadastros = async (param) => {
  let results = await DB_EXEC(`delete cadastros where id=?`, [id]);
  console.log(results); 
  return results.rowsAffected;
}



 