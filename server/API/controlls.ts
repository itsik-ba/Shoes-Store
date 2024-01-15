import ShoesModel from "./model";


export const getAllShoes = async (req:any, res:any) => {
 try {
    const shoes = await ShoesModel.find({ });
    res.send({shoes})
 } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
 }
}


export const createNewShoes = async (req:any, res:any) => {
 try {
    const {name, url , price} = req.body;
    if(!name) throw new Error("No name provided");
    if(!url) throw new Error("No url provided");
    if(!price) throw new Error("No price provided");
    
    console.log(name, url , price);
     
    const newShoes = await ShoesModel.create({name, url , price});
      console.log(newShoes)
      res.status(201).send({ ok: true });

 } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
 }

}

export const deleteShoes = async (req:any, res:any) => {
try {
     const { _id } = req.body;
     
     const deleteShoes = await ShoesModel.deleteOne({ _id });
     console.log(deleteShoes)

     const shoes = await ShoesModel.find({});

     res.send({ ok: true, shoes });
} catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
}
}