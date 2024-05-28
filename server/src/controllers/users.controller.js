const { readFile } = require('fs');

const usersController = {};

const path = require('path');
const fsPromises = require('fs/promises');

const fileData = path.resolve(__dirname, '../../data/users.json');

usersController.getAllUsers = async (req, res) => {
  try {
    const users = await fsPromises.readFile(fileData);
    const parsedUsers = JSON.parse(users);
    res.send(parsedUsers);
  } catch (err) {
    return res.send('Error get');
  }
};

usersController.createUser = async (req, res) => {
  const newUser = req.body;
  newUser.userId = '0001';
  try {
    const users = fsPromises.readFile(fileData);
    const parsedUsers = JSON.parse(users);

    const updatedUsersList = [...parsedUsers, newUser];
    console.log(updatedUsersList);
  } catch (error) {
    return res.send('Error post');
  }
};

module.exports = usersController;
