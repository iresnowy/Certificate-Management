const mongoose= require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://admin:admin123@cluster0.tf6rn.mongodb.net/CertificateManagement?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Connect Successfully');
    } catch (error) {
        console.log('Connect Failed');
    }
}
module.exports={connect};