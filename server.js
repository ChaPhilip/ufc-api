const express = require('express')
const app = express()
const PORT = 8000
const fighters = {
    'paddy pimblett':{
        'name':'Paddy Pimblett',
        'nickname':'Paddy the Baddy',
        'weightClass': 'lightweight',
        'age': 27,
        'birthPlace': 'Huyton, England',
        'debut': 'Septembe r 4, 20021' ,
    },
    'max holloway':{
        'name':'Max Holloway',
        'nickname':'Blessed',
        'weightClass': 'featherweight',
        'age': 30,
        'birthPlace': 'Honolulu, Hawaii',
        'debut': 'February 4, 2012' ,
    },
    'Chales oilveria':{
        'name':'Charles Oilvera',
        'nickname': 'da Bronx',
        'weightClass': 'lightweight',
        'age': 32 ,
        'birthPlace': 'Guaruja Sao Paulo, Brazil',
        'debut': 'Octorber 17, 1989' ,
    },
    'sean o\'malley ':{
        'name':'Sean o\'malley',
        'nickname': 'The Suga Show',
        'weightClass': 'bantamweight',
        'age': 27 ,
        'birthPlace': 'Helena, Montana',
        'debut': 'October 24, 1994' ,
 
    },
    'cm Punk':{
        'name':'CM Punk',
        'nickname': 'CM Punk',
        'weightClass': 'Champ',
        'age': '43' ,
        'birthPlace': 'WWE',
        'debut': '2016' ,
}
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:fighterName',(request,response)=> {
    const fightersName = (request.params.fighterName.toLowerCase())
    if(fighters[fightersName]){
        response.json(fighters[fightersName])
    }else{
        response.json(fighters['cm punk'])
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is online ${PORT}!`)
})
