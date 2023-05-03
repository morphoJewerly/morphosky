import mainPage from "../models/mainPage.js"
export const getAll = async (req, res) => {
    try {
      const data = await  mainPage.find();
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Невдалося знайти контент",
      });
    }
  }
  export const update = async (req, res) => {
    try {
      const mainPageId = req.params.id;
      await  mainPage.updateOne(
        { _id: mainPageId },
        {  
          mainCitate: req.body.mainCitate,
          h1 : req.body.h1 ,
          text1 : req.body.text1,
          text2 : req.body.text2,
          text3 : req.body.text3,
          descr1 : req.body. descr1,
          descr2 : req.body. descr2,
          descr3 : req.body. descr3,
          descr4 : req.body. descr4,
          descr5 : req.body. descr5
        }
        );
      res.json({
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Невдалося обновити дані головної сторінки",
      });
    }
  };
