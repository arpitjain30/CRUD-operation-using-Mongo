import User from "../model/model.js"

function handlewelcome(req, res) {
    res.send(`Hey Welcome`);
}

async function handleAndShowUser(req, res) {
    try {
        const Users = await User.find();
        res.send(Users);
    } catch (error) {
        res.status(500).send(`Internal Error Occured: ${error}`);
    }
}

async function handleAndAddUser(req, res) {
    try {
        const body = req.body;
        if (!body) {
            res.send(`Enter each field`);
        } else {
            const existingUser = await User.findOne({ email: body.email });
            if (existingUser) {
                return res.status(409).send('User with this email already exists');
            }else{
                const newUser = new User ({
                    name: body.name,
                    email: body.email,
                    gender: body.gender,
                })
                const savedUser = await newUser.save();
                console.log(savedUser);
                res.send(savedUser);
            }
        }
    } catch (error) {

    }
}

async function handleAndRemoveUser(req, res){
    const ID = req.params._id;
    console.log(ID);
    try {
        const deletedUser = await User.findByIdAndDelete(ID);
        if (!deletedUser) {
            res.send(`Can't find user to delete`);   
        }else{
            res.send(`Deleted id: ${ID}`);
        }
    } catch (error) {
        console.log(error);
        res.send(`Internal Error Occured`);
    }
}

async function handleAndUpdateUser(req, res){
    const ID = req.params.ID;
    try {
        const userTOUpdate = await User.findByIdAndUpdate(ID, body, {new: true});
        if(!userTOUpdate){
            res.send(`No user found for ${ID}`);
        }else{
            res.send(`User updated`);
        }
    } catch (error) {
        console.log(error);
        res.send(`Internal Error`);
    }
}

export{
    handlewelcome,
    handleAndShowUser,
    handleAndAddUser,
    handleAndRemoveUser,
    handleAndUpdateUser,
}