const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({ 
    name: { 
      user_id: { 
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      },
        type: String,
        requied: [true, "Please add the name of note"],
    },
    author : { 
        type: String,
        requied: [true, "Please add the author of note"],
    },
    no_of_pages: {
        type: String,
        requied: [true, "Please add the number of pages in note"],
    },
  },
  { 
    timestamps: true,
  }
);

module.exports = mongoose.model("Note",bookSchema);