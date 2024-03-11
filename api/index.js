import express from 'express'; //import express files which serves as the backend server.using(npm i express)


const app=express();

app.listen(5173, () => {
    console.log("Grish server is running on this port: 5173");
}
);
