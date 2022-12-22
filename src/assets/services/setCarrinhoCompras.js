import API from './webapi.services';
import { BASE_URL } from './urls';

export const getAnuncio = async () => {
  try {
    return await API.get(`${BASE_URL}/CarrinhoCompras`).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const insertItemCompras = async (param) => {
  try{
    return await API.post(`${BASE_URL}/CarrinhoCompras`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const updateItemCompras = async (param) => {
  try{
    return await API.put(`${BASE_URL}/CarrinhoCompras/${param.id}`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const deleteItemCompras = async (id) => {
  try{
    return await API.delete(`${BASE_URL}/660/gastos/${id}`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}