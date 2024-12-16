const { Pool } = require('pg')
const {validationResult} = require('express-validator')
const pool = new Pool({
    connectionString: "postgresql://geralt:admin@localhost:5432/gameofthrones"
})
const getHouse = async (request, response) => {
    try {
        const queryResponse = await pool.query('SELECT * FROM houses ORDER BY RANDOM() LIMIT 1;');
        response.status(200).json(queryResponse.rows);
    } catch (error) {
        console.error(error); // Log the error for debugging
        response.status(500).json({ error: 'Internal Server Error' });
    }
};

const getCharacter = async(request,response) => {
    try {
        const queryResponse = await pool.query('SELECT * FROM roles ORDER BY RANDOM() LIMIT 1;');
        response.status(200).json(queryResponse.rows);
    } catch (error) {
        console.log(error);
        response.status(500).json({error:error.message})
    }
}
const getCharacters = async(request,response) => {
    try {
        const queryResponse = await pool.query('SELECT * FROM roles;');
        response.status(200).json(queryResponse.rows);
    } catch (error) {
        console.log(error);
        response.status(500).json({error:error.message})
    }
}
const getOneDialog = async(request,response) => {
    try {
        const queryResponse = await pool.query('SELECT * FROM dialogues ORDER BY RANDOM() LIMIT 1;');
        response.status(200).json(queryResponse.rows);
    } catch (error) {
        console.log(error);
        response.status(500).json({error:error.message})
    }
}
const getFiveDialog = async(request,response) => {
    try {
        const queryResponse = await pool.query('SELECT * FROM dialogues ORDER BY RANDOM() LIMIT 5;');
        response.status(200).json(queryResponse.rows);
    } catch (error) {
        console.log(error);
        response.status(500).json({error:error.message})
    }
}
const getCharacterDialog = async(request,response) => {
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(400).json({errors:errors.array()})
    }
    const character = request.query.character;
    try {
        const queryResponse = await pool.query('SELECT * FROM dialogues WHERE character = $1',[character]);
        response.json(queryResponse.rows);
    } catch (error) {
        console.log(error);
        response.status(500).json({error:error.message})
    }
}
module.exports = {
    getHouse,
    getCharacter,
    getOneDialog,
    getFiveDialog,
    getCharacterDialog
}