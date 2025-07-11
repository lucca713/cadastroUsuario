import { db } from "../db.js";

//passei a requisicao como "_" pois ja que é uma get nao precisa do req apenas ler entao so passo o res
export const getUsers = (_,res) =>{
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data)=>{
        if (err) return res.json(err);
         
        return res.status(200).json(data);
    })
}