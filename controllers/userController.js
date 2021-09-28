const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
	const users = await User.find();
	res.status(200).json(users);
};

exports.getUserById = async (req, res) => {
	const user = await User.findById(req.params.id);
	if (!user) return res.status(404).json("No user found");
	res.status(200).json(user);
};

exports.register = async (req, res) => {
	const user = await User.create(req.body);
	res.status(200).json(user);
};
