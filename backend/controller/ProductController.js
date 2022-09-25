import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getProducts = async (req, res) => {
  try {
    const response = await prisma.product.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        name: name,
        price: price,
      },
    });
    res.status(201).json(product)
  } catch (error) {
    res.status(401).json({ msg: error.message });

  }
};

export const updateProduct = (req, res) => {};

export const deleteProduct = (req, res) => {};
