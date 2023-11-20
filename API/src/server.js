import express, { response } from "express";
import "express-async-errors";

import routes from "./routes/index.js"
import AppError from "./utils/AppError.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

app.use(( error, req, res, next) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

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