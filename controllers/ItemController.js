import ItemModel from "../models/Item.js"
export const getAll = async (req, res) => {
  try {
    const items = await ItemModel.find();
    res.json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Невдалося знайти пости",
    });
  }
}

 export const getOne= async (req,res) => {
    try {
     const  itemId  = req.params.id
     const item = await ItemModel.findOne({_id: itemId});
     res.json(item);
    } 
    catch (error) {
     console.log(error)
     res.status(500).json({
         message:"Невдалося знайти пост",
     });
    }
 }
 
 export const remove= async (req, res) => {
    try {
      const itemId = req.params.id;
      const result = await ItemModel.findOneAndDelete({ _id: itemId });
      if (!result) {
        return res.status(404).json({
          message: "Пост не знайдено",
        });
      }
      res.json({
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Невдалося видалити пост",
      });
    }
  };


  export const update = async (req, res) => {
    try {
      const itemId = req.params.id;
      await ItemModel.updateOne(
        { _id: itemId },
        {
          title : req.body.title,
          text : req.body.text,
          imgmain:req.body.imgmain,
        }
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


export const create = async (req,res) => {
   try {
    const doc = new ItemModel ({
        title : req.body.title,
        text : req.body.text,
        imgmain:req.body.imgmain,
      //  user: req._userId*/
    })
    const item = await doc.save()
    res.json(item);
   } 
   catch (error) {
    console.log(error)
    res.status(500).json({
        message:"Невдалося створити товар",
    });
   }
}