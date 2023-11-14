import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
res.send("Hello, World!")
})

app.get("/passou", (req, res) => {
    res.send("Você passou!")
})

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}.`);
});











/**
 *                       BACK_END
 *                   ____     ______________            *                 
 *     *            /___/|   /_____________/|                             
 *                  |   ||   |    _________|/    *                     
 *       *          |   ||   |    | |______                            
 *   *              |   ||   |    |/______/|                                          
 *       *   ___    |   ||   |________    ||         *            
 *          /  /|___|   ||    ________|   ||
 *    *    |  |_/___|   ||   /________|   ||
 *          \__________//    |____________|/    *
 * 
 * 
 *  + Developed by : GabrielDantasOli
 *  + GITHUB       : https://github.com/gabrieldantasoli
 *  + Contact      : gabriel.dantas.oliveira@ccc.ufcg.edu.br
 *  
 *  + JAVASCRIPT FOR ALL LIFE!
 * 
 **/ 