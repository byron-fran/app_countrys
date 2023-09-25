export const generarId = () => {
     const id = Math.random().toString(16).substring(2) + Date.now().toString(16)
     return id
};

export const formaterDinero = cantidad => {
     return cantidad.toLocaleString('en-US', {
       
     });
};