const { readFile } = require('fs');
const { v4 } = require('uuid');

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
  newUser.userId = v4();
  try {
    const users = await fsPromises.readFile(fileData);
    const parsedUsers = JSON.parse(users);

    const updatedUsersList = [...parsedUsers, newUser];

    await fsPromises.writeFile(fileData, JSON.stringify(updatedUsersList));

    res.send(updatedUsersList);
  } catch (error) {
    return res.send('Error post');
  }
};

usersController.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const users = await fsPromises.readFile(fileData);
    const parsedUsers = JSON.parse(users);

    const userIndex = parsedUsers.findIndex(user => user.userId === id);
    parsedUsers[userIndex].name = name;
    parsedUsers[userIndex].email = email;

    await fsPromises.writeFile(fileData, JSON.stringify(parsedUsers));

    res.send(parsedUsers);
  } catch (error) {
    return res.send('Error patch');
  }
};

usersController.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await fsPromises.readFile(fileData);
    const parsedUsers = JSON.parse(users);

    const filteredUsers = parsedUsers.filter(user => user.userId !== id);

    await fsPromises.writeFile(fileData, JSON.stringify(filteredUsers));

    res.send(filteredUsers);
  } catch (error) {
    return res.send('Error delete');
  }
};

module.exports = usersController;
