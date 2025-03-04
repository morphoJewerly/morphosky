import PostModel from "../models/Post.js";

export const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Невдалося знайти товари",
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await PostModel.findOne({_id: postId});
        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Невдалося знайти товар",
        });
    }
};

export const remove = async (req, res) => {
    try {
        const postId = req.params.id;
        const result = await PostModel.findOneAndDelete({_id: postId});

        if (!result) {
            return res.status(404).json({
                message: "Товар не знайдено",
            });
        }

        res.json({
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Невдалося видалити товар",
        });
    }
};

export const update = async (req, res) => {
    try {
        const postId = req.params.id;

        const updateData = req.body.isVariant
            ? {
                price: req.body.price,
                imgmain: req.body.imgmain,
                imgsecond: req.body.imgsecond,
                imgthird: req.body.imgthird,
                title: req.body.title,
                text1: req.body.text1,
                text2: req.body.text2,
                category: req.body.category,
                isVariant: true,
                variants: req.body.variants,
            }
            : {
                title: req.body.title,
                text1: req.body.text1,
                text2: req.body.text2,
                price: req.body.price,
                category: req.body.category,
                imgmain: req.body.imgmain,
                imgsecond: req.body.imgsecond,
                imgthird: req.body.imgthird,
                isVariant: false
            };

        await PostModel.updateOne(
            {_id: postId},
            updateData
        );

        res.json({
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Невдалося обновити дані товару",
        });
    }
};

export const create = async (req, res) => {
    try {
        const docData = req.body.isVariant
            ? {
                price: req.body.price,
                imgmain: req.body.imgmain,
                imgsecond: req.body.imgsecond,
                imgthird: req.body.imgthird,
                title: req.body.title,
                text1: req.body.text1,
                text2: req.body.text2,
                category: req.body.category,
                isVariant: true,
                variants: req.body.variants,
            }
            : {
                title: req.body.title,
                text1: req.body.text1,
                text2: req.body.text2,
                price: req.body.price,
                category: req.body.category,
                imgmain: req.body.imgmain,
                imgsecond: req.body.imgsecond,
                imgthird: req.body.imgthird,
                isVariant: false
            };

        const doc = new PostModel(docData);
        const post = await doc.save();
        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Невдалося створити товар",
        });
    }
};