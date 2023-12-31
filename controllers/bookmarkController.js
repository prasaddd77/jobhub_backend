const Bookmark = require("../models/Bookmark");

module.exports = {
  createBookmark: async (req, res) => {
    const newBookmark = Bookmark(req.body);

    try {
      await newBookmark.save();

      res.status(201).json("Bookmark Created Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteBookmark: async (req, res) => {
    try {
      await Bookmark.findByIdAndDelete(req.params.id);

      res.status(200).json("Bookmark Successfully Deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getBookmarks: async (req, res) => {
    try {
      const bookmarks = await Bookmark.find({ userId: req.params.userId });

      res.status(200).json(bookmarks);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
