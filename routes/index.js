const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note");
const validator = require("../middlewares/validate.middleware");
const { UpdateBookSchema } = require("../schemas/book.schema");

router.route("/")
  .get(noteController.getNote)
  .post(noteController.createNote);

router.route("/:id")
  .get(noteController.getNote)
  .put([validator(UpdateBookSchema)],noteController.updateNote)
  .delete(noteController.deleteNote);

module.exports = router