const {Router} = require('express');
const {Product} = require('../models');


const router = Router();

router.get('/', async(req, res) => {
    const products = await Product.findAll();
  res.status(200).json(products);
});

router.get('/:id', async(req, res) => {
    const { id } = req.params
    const products = await Product.findByPk(id);
  res.status(200).json(products);
})

router.post('/', async(req, res)=>{
    const { name , description } = req.body
    Product.create({ name , description });
    res.status(200).json({ name , description });
})


router.put('/:id', async(req, res) =>{
    const { name , description } = req.body
    const { id } = req.params;
    productResult = await Product.update({name, description},{
        where:{
            id
        }
    });
    res.status(200).json({message: "update com sucesso"})
  });

router.delete('/:id', async(req, res) =>{
  const { id } = req.params;
  productResult = await Product.destroy({
      where:{
          id
      }
  });
  res.status(200).json({message: "excluido com sucesso"})
});

module.exports = router;
