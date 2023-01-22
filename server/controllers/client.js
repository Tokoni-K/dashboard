import Product from "../models/Product.js"
import ProductStat from "../models/ProductStat.js"
import User from "../models/User.js"
import Transaction from "../models/Transaction.js"
import getCountryIso3 from "country-iso-2-to-3";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); //grabbing all products

        const productsWithStats = await Promise.all(
            products.map(async (product) => {   //for every product we look for the project stat based on ID
                const stat = await ProductStat.find({
                    productId: product._id
                })
            return {  
                ...product._doc,  //returning an array of objects with the product information,
                stat,  // and combining it with the stat information
            }
            })
        );

        res.status(200).json(productsWithStats)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getCustomers = async (req, res) => {
    try {
            const customers = await User.find({ role: "user" }).select("-password"); //select -password so we dont send user password to front-end
            res.status(200).json(customers);
        } catch (error) {
            res.status(404).json({ message: error.message });
    }
}

export const getTransactions = async (req, res) => {
    try {
        // sort should look like this: { "field": "userId", "sort": "desc"}
        const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

        // formatted sort should look like { userId: -1 }
        const generateSort = () => {
        const sortParsed = JSON.parse(sort);
        const sortFormatted = {
            [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
        };
        return sortFormatted;
        };

        const sortFormatted = Boolean(sort) ? generateSort() : {};

        const transactions = await Transaction.find({
        $or: [  // $or allows us to search multiple fields
            { cost: { $regex: new RegExp(search, "i") } }, //searching for cost with value use imputed
            { userId: { $regex: new RegExp(search, "i") } },
        ],
        })
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize);

        const total = await Transaction.countDocuments({ // will give us number of documents we have in mongodb
        name: { $regex: search, $options: "i" },
        });

        res.status(200).json({ transactions, total });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getGeography = async (req, res) => {
    try {
        const users = await User.find();

        //to convert country info from 3 to 2, we use the reduce function with iso, as its what nivo geo maps require
        const mappedLocations = users.reduce((acc, { country }) => { 
        const countryISO3 = getCountryIso3(country);
        if (!acc[countryISO3]) {
            acc[countryISO3] = 0;
        }
        acc[countryISO3]++;
        return acc;
        }, {});

        const formattedLocations = Object.entries(mappedLocations).map(
        ([country, count]) => {
            return { id: country, value: count };
        });

        res.status(200).json(formattedLocations);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};