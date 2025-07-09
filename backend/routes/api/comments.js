/**
 * @route GET /api/comments
 * @group Comments - Operations about comments
 * @returns {Array.<Comment>} 200 - An array of comment objects
 * @returns {object} 500 - Error message
 * @description Retrieves all comments, sorted by creation date (most recent first).
 */

/**
 * @route DELETE /api/comments/{id}
 * @group Comments - Operations about comments
 * @param {string} id.path.required - The ID of the comment to delete
 * @returns {object} 200 - Success message with deleted comment ID
 * @returns {object} 400 - Invalid comment ID
 * @returns {object} 404 - Comment not found
 * @returns {object} 500 - Error message
 * @description Deletes a comment by its ID.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
//Hey Github Copilot, please complete the code for the comments API route.
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
});
//add another endpoint for deleting comments
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid comment ID" });
    }
    try {
        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully", id });
    } catch (error) {
        res.status(500).json({ message: "Error deleting comment", error });
    }
});