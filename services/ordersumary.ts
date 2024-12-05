import { Router, Response, Request } from 'express';
import { Product } from "../modles/products";

// Fetch data from MongoDB
export const samorder = async (Z: any[],req:Request, res: Response)=> {
    console.log(Z); 
    try {
    const idarray =[]
    const finalresult: any[] =[]
    const fullfinalresult: any[] =[]
    // Using a for loop to iterate over the array
    for (let i = 0; i < Z.length; i++) {
                                       const product = Z[i];
                                       console.log(Z[i].productid);
                                       idarray.push(Z[i].productid);
                                       }
    console.log(idarray);
    // Count occurrences
    const countMap: { [key: string]: number } = {};
    idarray.forEach(item => {
                            countMap[item] = (countMap[item] || 0) + 1;
                            });

    // Convert the countMap to an array of [element, count] pairs and sort
    const sortedArrayWithCounts = Object.entries(countMap).sort((a, b) => a[0].localeCompare(b[0]));

    // Output the result
    sortedArrayWithCounts.forEach(([element, count]) => {
                                                        console.log(`${element}: ${count}`);
                                                        finalresult.push({ element: element, count: count });
                                                        });
    console.log(finalresult);
    const frestojson = finalresult ? JSON.parse(JSON.stringify(finalresult)) : null; // Convert req.user to JSON  
    for (let i = 0; i < frestojson.length; i++) {
                                       const productid = frestojson[i].element;
                                       const productlist = await Product.findOne({_id:productid}); // Fetch one  
                                       fullfinalresult.push({ name: productlist?.productname, 
                                                              count: frestojson[i].count, 
                                                              productid: frestojson[i].element,
                                                              customer:Z[i].username
                                                            });
                                                 }                                                
  //res.status(200).json(fullfinalresult);
  return(fullfinalresult);
  } 
  catch (error) {
  console.error('Error fetching users:', error);
  res.status(500).json({ message: 'Internal server error' });
  }
};


