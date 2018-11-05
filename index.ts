import {connect, set} from 'mongoose';
import {app} from './app';

async function initialize() {
    const url = 'mongodb://localhost:27017/unirededb';
    const client = await connect(url, {useNewUrlParser: true});
    console.log('Conectado com sucesso em unirededb!');
    app.listen(3000, () => console.log('Executando na porta 3000.'));

} 

initialize();