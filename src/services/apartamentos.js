import { http } from './config'

export default {
    index:() =>{
        return http.get('apartamentos');
    },

    store:(apartamento) =>{
        return http.put(`apartamentos/create/${apartamento.predio_id}`, apartamento);
    },

    show:(apartamento_id) =>{
        return http.get(`apartamentos/${apartamento_id}`);
    },

    delete:(apartamento) =>{
        return http.delete(`apartamentos/delete/${apartamento.id}`);
    }

}