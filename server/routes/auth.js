
import express from "express";

const router = express.Router();

// controllers
const {
  signup,
  signin,
  signout,
  // forgotPassword,
  resetPassword,
} = require("../controllers/auth");

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from kaloraat auth API",
  });
});
router.post("/signup", signup);
router.post("/signin", signin);
router.get('/signout', signout)
// router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
