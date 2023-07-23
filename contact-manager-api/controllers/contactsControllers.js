const asyncHandler = require("express-async-handler");
const contacts = require("../models/contacts");

const getAllContacts = asyncHandler(async (req, res) => {
  const contact = await contacts.find();
  res.status(200).json(contact);
  // res.json({name: 'hello'})
});

const createContacts = asyncHandler(async (req, res) => {
  const { name, phone, email } = req.body;
  const contact = await contacts.create({ name, phone, email });
  res.status(201).json(contact);
});

const getOneContacts = asyncHandler(async (req, res) => {
  const contact = contacts.findById(req.params.id);
  if(!contact){
    res.send(404);
    throw Error('no such user found');
  }
  res.status(200).json(contact);
});
const updateContacts = asyncHandler(async (req, res) => {
  const contact = contacts.findById(req.params.id);
  if(!contact){
    res.send(404);
    throw Error('no such user found');
  }
  const updatedComtact =await contacts.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  )
});

const deleteContacts = asyncHandler(async (req, res) => {
  await contacts.findByIdAndRemove(req.params.id);
});

module.exports = {
  getAllContacts,
  getOneContacts,
  updateContacts,
  deleteContacts,
  createContacts,
};
