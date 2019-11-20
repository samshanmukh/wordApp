const express = require('express')
const randomWords = require('random-words')
const app = express()

// CORS
app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

// Midlleswares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/nextWord', (req, res) => {
    function generateWord() {
        var word = randomWords()
    
        if(word.length != 6){
            generateWord()
        } else {
            console.log(word)
            res.end(word)
        }
    }
    
    generateWord()
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
