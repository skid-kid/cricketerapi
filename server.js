const express=require('express');
const app=express();
const port=3001;
const fs=require('fs');


app.get('/batsman', (req, res) => {
    fs.readFile(' batsman.json','utf-8',(err,data)=>{
        if(err){
            return res.status(500).json('Error to read file');
        }
        res.json(JSON.parse(data));       
    });
});

app.get('/bowler', (req, res) => {
        fs.readFile(' bowler.json','utf-8',(err,data)=>{
            if(err){
                return res.status(500).json('Error to read file');
            }
            res.json(JSON.parse(data));       
    });
});
app.get('/batsman/:Name', (req, res) => {
    fs.readFile('batsman.json','utf-8',(err,data)=>{
        if(err){
            return res.status(500).json({err:'Error to read this file'});
        }
        const batsmen=JSON.parse(data);
        const batsman=batsmen.find(b=>b.Name.toLowerCase()===req.params.Name.toLowerCase());
        if(!batsman){
            return res.status(404).json({err:'Batsman not found'});
        }
        res.json(batsman);
    });
});
app.get('/bowler/:Name', (req, res) => {
    fs.readFile('bowler.json','utf-8',(err,data)=>{
        if(err){
            return res.status(500).json({err:'Error to read this file'});
        }
        const bowlers=JSON.parse(data);
        const bowler=bowlers.find(b=>b.Name.toLowerCase()===req.params.Name.toLowerCase());
        if(!batsman){
            return res.status(404).json({err:'Batsman not found'});
        }
        res.json(bowler);
    });
});

app.listen(port,()=>{
    console.log("Server starting on port",port);
})