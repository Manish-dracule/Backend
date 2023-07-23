const express = require("express");
const router = express.Router();

const {
  getAllContacts,
  getOneContacts,
  updateContacts,
  createContacts,
  deleteContacts,
} = require("../controllers/contactsControllers");

router.route("/").get(getAllContacts).post(createContacts);
router
  .route("/:id")
  .get(getOneContacts)
  .patch(updateContacts)
  .delete(deleteContacts);

module.exports = router;
