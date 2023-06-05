const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { i1, c1, i2, c2, i3, c3, i4, c4, i5, c5, i6, c6, i7, c7, i8, c8 } = req.body;
    if (!i1 || !i2 || !i3 || !i4 || !i5 || !i6 || !i7 || !i8 ) {
      console.log("All fields required...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const user = await User.create({
      i1,
      c1,
      i2,
      c2,
      i3,
      c3,
      i4,
      c4,
      i5,
      c5,
      i6,
      c6,
      i7,
      c7,
      i8,
      c8,
    });
    return res.status(200).json({
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
