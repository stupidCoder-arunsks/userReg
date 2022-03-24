const User = require('../models/user');

exports.getUsers = ((req,res,next) => {
    // console.log("entering 1 >>> ");
    User.findAll().then(data => {
        // console.log("entering 2 >>> ");

        // console.log('Get User response data >>>>>' , data[0]);
        // res.status(200).send(res)
        res.json(data);
    }).catch(err => {
    console.log(err);
    });
});

exports.addUser = ((req,res,next) => {
    const userName = req.body.name;
    const userEmail = req.body.email;
    console.log('req >>>>>>>> ' , req.body);
    console.log("user name and email " , userEmail,userName);
    User.create({
       name:userName,
       email:userEmail,
    }).then(() => {
        console.log("user Added successfully...");
        res.status(200).send({data:"user created"});
        
    }).catch(err => {
        console.log(err);
    });
});

exports.deleteUser = ((req,res,next) => {
    // console.log('req params >>>> ' ,req.params);
    const id = req.params.id;
    //    console.log("id >>>> " ,id);
    User.findByPk(id).then(user => {
        user.destroy();
    }).then(() => {
        res.status(200).send({data:"user deleted"});
    })
    .catch(err => console.log(err));

});